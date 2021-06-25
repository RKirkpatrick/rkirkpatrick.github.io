import React from "react";

//TODO add recaptcha verification
export default function Contact() {
	return (
		<>
			<article id="contact" className="boxshadow">
				<form
					id="contact"
					action="mailto:kirkpary@gmail.com"
					method="post"
					enctype="multipart/form-data"
					name="EmailForm"
				>
					<h1>Contact Form</h1>
					<fieldset class="alignleft fifty boxshadow contactform">
						<legend>Contact Information</legend>
						<label for="firstlastname">First and Last Name</label>
						<input
							name="firstlastname"
							id="firstlastname"
							type="text"
							required
							placeholder="John Smith"
							maxlength="32"
						/>
						<label for="emailaddress">Email</label>
						<input
							name="emailaddress"
							id="emailaddress"
							required
							type="email"
							placeholder="JohnSmith@example.com"
							maxlength="32"
						/>
						<label for="phone">Phone</label>
						<input
							name="phone"
							id="phone"
							type="tel"
							required
							placeholder="503-555-5555"
							maxlength="12"
						/>
						<label for="web">Website</label>
						<input
							name="web"
							id="web"
							type="url"
							required
							placeholder="www.JohnSmith.com"
							maxlength="40"
						/>
					</fieldset>
					<fieldset class="boxshadow">
						<legend>Email Subject</legend>
						<label for="subject">
							Select a
							<select name="subject" id="subject" required>
								<option value="">subject:</option>
								<option value="Employment">Employment</option>
								<option value="Contract">Contract</option>
								<option value="Personal">Personal</option>
							</select>
						</label>
						<label for="message">Type up to 480 characters.</label>
						<textarea
							id="message"
							name="message"
							required
							placeholder="Text only"
							maxlength="480"
						></textarea>
					</fieldset>
					<fieldset class="boxshadow">
						<legend>Submit Form</legend>
						{/* <input type="hidden" id="token" name="token" /> */}
						<label for="post"></label>
						<input name="post" id="post" type="submit" value="Submit" />
						<label for="reset"></label>
						<input name="reset" id="reset" type="reset" value="Reset" />
					</fieldset>
				</form>
			</article>
		</>
	);
}
