import React, { useMemo } from "react";
import { Controller } from "react-hook-form";

const Input = ({ label, name, type, className = "", suffix, helperText, invalid, control, required, ...rest }) => {
	const primaryColorFocus = useMemo(() => (invalid ? "red" : "blue"), [invalid]);
	const primaryColor = useMemo(() => (invalid ? "red" : "gray"), [invalid]);

	return (
		<div class="group relative w-72 md:w-80 lg:w-96">
			<label
				for="1"
				class={`block w-full pb-1 text-sm font-medium text-${primaryColor}-500 transition-all duration-200 ease-in-out group-focus-within:text-${primaryColorFocus}-400`}
			>
				{label}
			</label>
			<div class="relative flex items-center">
				<Controller
					name={name}
					control={control}
					rules={{ required: required }}
					render={({ field }) => {
						return (
							<input
								type={type}
								name={name}
								{...rest}
								required={required}
								class={`text-sm sm:text-base placeholder-${primaryColor}-500 pl-4 ${
									suffix ? "pr-10" : "pr-4"
								} rounded-lg border border-${primaryColor}-400 w-full py-2 focus:outline-none focus:border-${primaryColorFocus}-400 ${className}`}
								{...field}
							/>
						);
					}}
				/>
				{/* <input
					type={type}
					name={name}
					{...rest}
					class={`text-sm sm:text-base placeholder-${primaryColor}-500 pl-4 ${
						suffix ? "pr-10" : "pr-4"
					} rounded-lg border border-${primaryColor}-400 w-full py-2 focus:outline-none focus:border-${primaryColorFocus}-400 ${className}`}
				/> */}
				{suffix && (
					<span
						class={`material-symbols-outlined absolute right-2 text-${primaryColor}-400 transition-all duration-200 ease-in-out group-focus-within:text-${primaryColorFocus}-400`}
					>
						{suffix}
					</span>
				)}
				{helperText && (
					<span
						class={`absolute bottom-[-15px] left-0 block pt-1 text-xs font-semibold text-${primaryColor}-500 transition-all duration-200 ease-in-out`}
					>
						{helperText}
					</span>
				)}
			</div>
		</div>
	);
};

export default Input;
