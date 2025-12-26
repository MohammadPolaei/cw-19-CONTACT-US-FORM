import { useState } from "react";
import Input from "../../shared/Inputs";

function Form() {
	const [formdata, setFormData] = useState({
		companyName: "",
		natureOfBussiness: "",
		Address: "",
		postCode: "",
		contactName: "",
		contactPhone: "",
		email: "",
		linkedIn: "",
		yourIdea: "",
	});

	function handleSubmit() {}

	function handleChange(name: string, value: string) {
		setFormData((prev) => ({ ...prev, [name]: value }));
	}
	return (
		<div className="p-8 flex flex-col gap-5 max-w-1/3">
			<div className="flex flex-col gap-3 ">
				<h1 className="font-bold text-xl">Contact us</h1>
				<p>
					Need an experienced and skilled hand with custom IT project? Fill out
					the form to get a free consultion{" "}
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-between gap-3"
			>
				<Input
					type="text"
					name="Your Company Name"
					placeholder="Your Company Name"
					value={formdata.companyName}
					required
					error=""
					onchange={(value) => handleChange("companyName", value)}
				/>
				<div>
					<Input
						type="text"
						name="Nature of Business"
						placeholder="Nature of Business"
						value={formdata.natureOfBussiness}
						required
						error=""
						onchange={(value) => handleChange("natureOfBussiness", value)}
					/>
					<Input
						type="number"
						name="Address"
						placeholder="Address"
						value={formdata.Address}
						required
						error=""
						onchange={(value) => handleChange("Address", value)}
					/>
				</div>
				<Input
					type="text"
					name="Postcode"
					placeholder="Postcode"
					value={formdata.postCode}
					required
					error=""
					onchange={(value) => handleChange("Postcode", value)}
				/>
				<Input
					type="number"
					name="Contact name"
					placeholder="Contact name"
					value={formdata.contactName}
					required
					error=""
					onchange={(value) => handleChange("contactName", value)}
				/>
				<Input
					type="email"
					name="Contact Phone"
					placeholder="Contact Phone"
					value={formdata.contactPhone}
					required
					error=""
					onchange={(value) => handleChange("contactPhone", value)}
				/>
				<Input
					type="text"
					name="Email"
					placeholder="Email"
					value={formdata.email}
					required
					error=""
					onchange={(value) => handleChange("Email", value)}
				/>
				<Input
					type="text"
					name="Linkedin"
					placeholder="Linkedin"
					value={formdata.linkedIn}
					required
					error=""
					onchange={(value) => handleChange("Linkedin", value)}
				/>
				<Input
					type="text"
					name="YourIdea"
					placeholder="Lets talk about your idea"
					value={formdata.yourIdea}
					required
					error=""
					onchange={(value) => handleChange("YourIdea", value)}
				/>
				<input type="file" accept="*/*" />
			</form>
		</div>
	);
}

export default Form;
