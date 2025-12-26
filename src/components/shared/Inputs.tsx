import type { ChangeEvent } from "react";

export type inputType = {
	type: string;
	name: string;
	placeholder: string;
	value: string;
	onchange: (value: string) => void;
	error?: string;
	required?: boolean;
};

function Input({
	type = "text",
	name,
	placeholder,
	value,
	onchange,
	error,
	required,
}: inputType) {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		onchange(e.target.value);
	}

	return (
		<div className="flex flex-col gap-5 w-full">
			<input
				className="border-b-2 border-[#0008] pb-2 "
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
			/>
			{error && <div className="text-sm text-red-300">{error}</div>}
		</div>
	);
}

export default Input;
