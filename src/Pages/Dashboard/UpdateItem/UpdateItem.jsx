import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaSpoon } from "react-icons/fa6";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = UseAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { name, category, price, recipe, image, _id } = useLoaderData()
    // console.log(name, category, price, recipe, image)

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
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            console.log(menuRes.data)
        }

    };
    return (
        <div>
            <SectionTitle heading='Update An Item' subHeading="Info"></SectionTitle>
            <div>
                <div>
                    <img
                        className="w-20 rounded-md border-2"
                        src={image} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                            defaultValue={name}
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
                                defaultValue={category}
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
                                defaultValue={price}
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
                            defaultValue={recipe}
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
                        Update Item <FaSpoon></FaSpoon>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;