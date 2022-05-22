import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

//TODO add recaptcha verification
export default function Contact() {
	const debug = window.location.hostname === "localhost" ? true : false;
	const [state, handleSubmit] = useForm("mlealbay", { debug: debug });
	useEffect(() => {
		if (state.succeeded) {
			//TODO add submission confirmed message
		}
	}, [state]);

	return (
		<>
			<Helmet>
				<title>{`Contact - ${process.env.REACT_APP_AUTHOR} - ${process.env.REACT_APP_SLOGAN}`}</title>
			</Helmet>
			<article id="contact" className="boxshadow">
				<form id="contact" onSubmit={handleSubmit}>
					<h1>Contact Form</h1>
					<fieldset className="alignleft fifty boxshadow contactform">
						<legend>Contact Information</legend>
						<label htmlFor="firstlastname">First and Last Name</label>
						<input
							name="firstlastname"
							id="firstlastname"
							type="text"
							required
							placeholder="John Smith"
							maxLength="32"
						/>
						<ValidationError prefix="Name" field="name" errors={state.errors} />
						<label htmlFor="email">Email</label>
						<input
							name="email"
							id="emailaddress"
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
					<fieldset className="boxshadow">
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
					<fieldset className="boxshadow">
						<legend>Submit Form</legend>
						{/* <input type="hidden" id="token" name="token" />
						<label htmlFor="post"></label> */}
						{/* <div
							className="g-recaptcha"
							data-sitekey="6Ldp7_EZAAAAAJf6c1zZLeSjczHJ1OJ03jJKrodO"
						></div> */}
						<input
							name="post"
							id="post"
							type="submit"
							value="Submit"
							disabled={state.submitting}
						/>
						<label htmlFor="reset"></label>
						<input name="reset" id="reset" type="reset" value="Reset" />
					</fieldset>
				</form>
			</article>
		</>
	);
}
