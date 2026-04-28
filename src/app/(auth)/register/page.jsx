'use client';

import { useForm, Watch } from "react-hook-form";

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleRegisterFunc = (data) => {
        console.log(data);
        const { email, password, name, photoUrl } = data;
        console.log(email, password, name, photoUrl);
    }
    console.log(watch("email"), watch("password"), watch("name"), watch("photoUrl"));

    return (
        <div className='container mx-auto py-8 min-h-[80vh] flex items-center justify-center bg-slate-300'>
            <div className="p-12 rounded-md bg-white">
                <h1 className="font-bold text-3xl text-center mb-6">Register your account</h1>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" {...register("email", { required: "Email is required" })} placeholder="Type here email" />

                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" {...register("password", { required: "Password is required" })} placeholder="Type here password" />

                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" {...register("name", { required: "Name is required" })} placeholder="Type here name" />

                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" {...register("photoUrl", { required: "Photo URL is required" })} placeholder="Type here photo URL" />

                        {errors.photoUrl && <span className="text-red-500 text-sm mt-1">{errors.photoUrl.message}</span>}

                    </fieldset>

                    <button className="btn w-full bg-slate-800 hover:bg-slate-950 text-white">Register</button>
                </form>


                {/* <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p> */}
            </div>
        </div>
    );
};

export default RegisterPage;