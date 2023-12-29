import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import useCard from "../../../Hooks/useCard";
import UseAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { user } = UseAuth()
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = UseAxiosSecure()
    const [cart, refetch] = useCard()


    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    // console.log(cart)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    // console.log(res.data.clientSecret);
                })

        }
    }, [axiosSecure, totalPrice])






    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
            console.log('payment method error', error)
        } else {
            console.log('payment method', paymentMethod)
            setError('')
        }
        // confirm payment method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'

                }
            }
        })
        if (confirmError) {
            // console.log('payment method error', confirmError)
        } else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                // console.log('transaction id ', paymentIntent.id)
                // console.log('eta card', cart)
                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),  // utc date convert . use moment js to
                    cardId: cart.map(item => item._id),
                    menuItemId: cart.map(item => item.menuId),
                    status: 'panding'
                }

                const res = await axiosSecure.post('/payment', payment);
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Your payment has been successfully",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                }

                refetch()

            }
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                // disabled={!stripe || !clientSecret}
                className="bg-orange-500 text-white py-2 px-3 mt-4 rounded-lg font-bold hover:bg-slate-500 hover:text-white" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-700">{error}</p>
            {transactionId && <p className="text-green-600">Your Transaction Id {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;