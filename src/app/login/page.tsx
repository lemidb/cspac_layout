// IMPORTANT: DON'T FORGET TO ADD THE `use client` if using Next JS 14
//            IF YOU ARE USING THE `react-hook-form` IN THE CLIENT SIDE
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormFields, LoginSchema } from "@/app/_lib/data/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Span } from "next/dist/trace";

export default function Home() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Validating on Submit action...");
      // alert(JSON.stringify(data));
    } catch (error) {
      setError("email", {
        message: "Email is already taken.",
      });
    }
  };

  console.log("Here is the login page.");

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="form-container flex flex-col justify-center w-[33rem] min-h-96 pb-28 items-center px-10 py-10 bg-slate-500 gap-3 rounded-md sm:rounded-3xl shadow-2xl">
        <div>
          <div className="flex justify-center items-center mt-4">
            <Image src="/images/cost.png" width={100} height={90} alt="logo" />
          </div>
          <div className="inline-block mb-4">
            <span className="text-xl font-semibold text-white">
              Welcome Back CSPAC
            </span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col justify-center mt-5 gap-4 items-center px-5"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="w-full mt-2 shadow-lg border px-8 py-2 rounded-md outline-blue-700"
          />

          {errors.email && (
            <span className="text-xs text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="w-full px-8 shadow-lg py-2 border-cyan-900 rounded-md  outline-blue-700"
          />

          {errors.password && (
            <span className="text-xs text-red-600 font-semibold">
              {errors.password.message}
            </span>
          )}
          <div className="flex flex-wrap px-10 items-center justify-between gap-5 mt-2">
            <div className="flex items-center">
              <input type="checkbox" className="text-sm w-4 h-4 rounded-2xl" />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm font-[500] text-black "
              >
                Remember me
              </label>
            </div>
            <div className="flex justify-self-end items-center">
              <a href="#" className="text-black font-semibold  hover:scale-[1.1] ">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 shadow-2xl rounded-md justify-self-start font-semibold font-[courier] px-4 py-2 text-lg mt-3 text-center hover:bg-blue-400 transition-colors duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
