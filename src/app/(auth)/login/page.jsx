'use client';

import Link from "next/link";
import { useForm, Watch } from "react-hook-form";

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLoginFunc = (data) => {
        console.log(data);
    }
    console.log(watch("email"), watch("password"));

    return (
        <div className='container mx-auto py-8 min-h-[80vh] flex items-center justify-center bg-slate-300'>
            <div className="p-12 rounded-md bg-white">
                <h1 className="font-bold text-3xl text-center mb-6">Login your account</h1>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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

                    <button className="btn w-full bg-slate-800 hover:bg-slate-950 text-white">Login</button>
                </form>


                <p className="mt-4 text-center">
                    Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;