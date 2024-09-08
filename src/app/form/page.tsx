// IMPORTANT: DON'T FORGET TO ADD THE `use client` if using Next JS 14
//            IF YOU ARE USING THE `react-hook-form` IN THE CLIENT SIDE
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// swx@2WS
const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contains at least one uppercase, one lowercase, one number, one special character",
      }
    ),
});

type FormFields = z.infer<typeof schema>;

// BEFORE USING ZOD
// type FormFields = {
//   name: string;
//   email: string;
//   password: string;
// };

export default function Home() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
          
      // throw new Error("Email is already taken.");
      console.log('Validating on Submit action...')
      alert(JSON.stringify(data));
    } catch (error) {
      setError("email", {
        message: "Email is already taken.",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">Register Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-96"
        >
          <input
            {...register(
              "name"
              // BEFORE USING ZOD
              // ,{
              //   required: true,
              // }
            )}
            className="border w-full rounded-md p-4"
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-xs text-red-600 font-semibold">
              {errors.name.message}
            </span>
          )}
          <input
            {...register("email")}
            className="border w-full rounded-md p-4"
            type="text"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-xs text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}
          <input
            {...register("password")}
            className="border w-full rounded-md p-4"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-xs text-red-600 font-semibold">
              {errors.password.message}
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
}