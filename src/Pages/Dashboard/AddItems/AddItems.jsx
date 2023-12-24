import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaSpoon } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = UseAxiosSecure()
    const onSubmit = async (data) => {
        // console.log(data)
        const imageFile = { image: data.image[0] }
        // uploded img
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            console.log(menuRes.data)
        }

    };
    return (
        <div>
            <SectionTitle
                heading="ADD AN NEW"
                subHeading="what's new ?"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full " />

                    </label>
                    <div className="flex gap-4">
                        {/* cetegory */}
                        <label className="form-control w-full my-6 flex-1">
                            <div className="label">
                                <span className="label-text">cetegory*</span>
                            </div>
                            <select
                                defaultValue="default"
                                {...register("category", { required: true })}
                                className="select select-bordered w-full flex-1"
                            >
                                <option disabled value="default" >Select a category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Shoup">Shoup</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drink">Drink</option>
                            </select>

                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6 flex-1">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />

                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>

                        </div>
                        <textarea
                            {...register('recipe', { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe details"></textarea>

                    </label>
                    {/* file input */}
                    <div>
                        <input
                            {...register('image')}
                            type="file"
                            className="file-input file-input-bordered w-full bg-orange-100 max-w-xs" />
                    </div>

                    <button
                        value="submit"
                        className="btn border-2 mt-4 ml-2 p-2 rounded-md bg-orange-400 font-semibold text-white"
                    >
                        Add Item <FaSpoon></FaSpoon>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;