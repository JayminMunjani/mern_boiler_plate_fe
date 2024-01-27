import React, { useState } from "react";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({});

	const onSubmit = (data) => {
		console.log("🚀 ~ onSubmit ~ data:", data);
	};

	return (
		<div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
			<div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
				<div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
				<button class="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
					<span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
						<i class="fab fa-facebook-f"></i>
					</span>
					<span>Login with Facebook</span>
				</button>
				<div class="relative mt-10 h-px bg-gray-300">
					<div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
						<span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
					</div>
				</div>
				<div class="mt-10">
					<form action="#" onSubmit={handleSubmit(onSubmit)}>
						<div class="flex flex-col mb-6">
							<Input
								label={"Email Address:"}
								type="email"
								name="email"
								placeholder="E-Mail Address"
								control={control}
								required={true}
								suffix={
									<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
										<path
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"
										/>
									</svg>
								}
								helperText={!!errors?.email ? "Please enter valid email" : ""}
								invalid={!!errors?.email}
							/>
						</div>
						<div class="flex flex-col mb-6">
							<Input
								label={"Password:"}
								type={showPassword ? "text" : "password"}
								name="password"
								placeholder="******"
								control={control}
								required={true}
								suffix={
									!showPassword ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											className="cursor-pointer"
											onClick={() => setShowPassword(!showPassword)}
										>
											<path
												fill="currentColor"
												d="M2.22 2.22a.75.75 0 0 0-.073.976l.073.084l4.034 4.035a9.986 9.986 0 0 0-3.955 5.75a.75.75 0 0 0 1.455.364a8.49 8.49 0 0 1 3.58-5.034l1.81 1.81A4 4 0 0 0 14.8 15.86l5.919 5.92a.75.75 0 0 0 1.133-.977l-.073-.084l-6.113-6.114l.001-.002l-1.2-1.198l-2.87-2.87h.002l-2.88-2.877l.001-.002l-1.133-1.13L3.28 2.22a.75.75 0 0 0-1.06 0m7.984 9.045l3.535 3.536a2.5 2.5 0 0 1-3.535-3.535M12 5.5c-1 0-1.97.148-2.889.425l1.237 1.236a8.503 8.503 0 0 1 9.899 6.272a.75.75 0 0 0 1.455-.363A10.003 10.003 0 0 0 12 5.5m.195 3.51l3.801 3.8a4.003 4.003 0 0 0-3.801-3.8"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 28 28"
											className="cursor-pointer"
											onClick={() => setShowPassword(!showPassword)}
										>
											<path
												fill="currentColor"
												d="M25.257 16h.005h-.01zm-.705-.52c.1.318.387.518.704.52c.07 0 .148-.02.226-.04c.39-.12.61-.55.48-.94C25.932 14.93 22.932 6 14 6S2.067 14.93 2.037 15.02c-.13.39.09.81.48.94c.4.13.82-.09.95-.48l.003-.005c.133-.39 2.737-7.975 10.54-7.975c7.842 0 10.432 7.65 10.542 7.98M10.5 16a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"
											/>
										</svg>
									)
								}
								helperText={!!errors?.password ? "Please enter valid password" : ""}
								invalid={!!errors?.password}
							/>
						</div>

						<div class="flex items-center mb-6 -mt-4">
							<div class="flex ml-auto">
								<a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">
									Forgot Your Password?
								</a>
							</div>
						</div>

						<div class="flex w-full">
							<button
								type="submit"
								class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
							>
								<span class="mr-2 uppercase">Login</span>
								<span>
									<svg
										class="h-6 w-6"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</span>
							</button>
						</div>
					</form>
				</div>
				<div class="flex justify-center items-center mt-6">
					<a href="#" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
						<span>
							<svg
								class="h-6 w-6"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
							</svg>
						</span>
						<span class="ml-2">You don't have an account?</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
