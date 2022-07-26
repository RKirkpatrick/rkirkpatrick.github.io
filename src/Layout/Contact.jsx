import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

//TODO add recaptcha verification
export default function Contact() {
	const debug = window.location.hostname === "localhost" ? true : false;
	const [state, handleSubmit] = useForm("mlealbay", { debug: debug });
	// useEffect(() => {
	// 	if (state.succeeded) {
	// 		//TODO add submission confirmed message
	// 		alert("Form submitted!");
	// 	}
	// 	if (state.errors.length > 0) {
	// 		console.log(state.errors);
	// 		alert("Error!");
	// 	}
	// }, [state]);

	if (state.succeeded) {
		return (
			<p class="confirmation aligncenter neu-flat radius-scaled">
				Thanks for sending a message!
			</p>
		);
	}

	return (
		<>
			<Helmet>
				<title>{`Contact - ${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
			</Helmet>
			<article id="contact">
				<form id="contact" onSubmit={handleSubmit} autoComplete="on">
					<h1>Contact Form</h1>
					<div className="form-body">
						<fieldset>
							<legend>Contact Information</legend>
							<label htmlFor="name">First and Last Name</label>
							<input
								name="name"
								id="name"
								type="text"
								required
								placeholder="John Smith"
								maxLength="32"
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
							<label htmlFor="email">Email</label>
							<input
								name="email"
								id="email"
								required
								type="email"
								placeholder="JohnSmith@example.com"
								maxLength="32"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<label htmlFor="phone">Phone</label>
							<input
								name="phone"
								id="phone"
								type="tel"
								required
								placeholder="503-555-5555"
								maxLength="12"
							/>
							<ValidationError
								prefix="Phone"
								field="phone"
								errors={state.errors}
							/>
							<label htmlFor="web">Website</label>
							<input
								name="web"
								id="web"
								type="url"
								placeholder="www.JohnSmith.com"
								maxLength="40"
							/>
							<ValidationError
								prefix="Website"
								field="web"
								errors={state.errors}
							/>
						</fieldset>
						<fieldset>
							<legend>Email Subject</legend>
							<label htmlFor="subject">
								Select a
								<select name="subject" id="subject" required>
									<option value="">subject:</option>
									<option value="Employment">Employment</option>
									<option value="Contract">Contract</option>
									<option value="Personal">Personal</option>
								</select>
							</label>
							<ValidationError
								prefix="Subject"
								field="subject"
								errors={state.errors}
							/>
							<label htmlFor="message">Type up to 480 characters.</label>
							<textarea
								id="message"
								name="message"
								required
								placeholder="Text only"
								maxLength="480"
							></textarea>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
						</fieldset>
					</div>
					<fieldset className="submit-field">
						{/* <input type="hidden" id="token" name="token" />
						<label htmlFor="post"></label> */}
						{/* <div
							className="g-recaptcha"
							data-sitekey="6Ldp7_EZAAAAAJf6c1zZLeSjczHJ1OJ03jJKrodO"
						></div> */}
						<input
							className="button"
							name="post"
							id="post"
							type="submit"
							value="Submit"
							disabled={state.submitting}
						/>
						<input
							className="button alignright"
							name="reset"
							id="reset"
							type="reset"
							value="Clear"
						/>
					</fieldset>
				</form>
			</article>
		</>
	);
}
