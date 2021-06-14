import { Image } from "../Common/Masonry";

const CS340 = ({ title }) => {
	const imagePath = "/img/cs340/";
	const program3Images = [
		{
			lowRes: "employee-min.jpg",
			hiRes: "employee-min.jpg",
			description: "Unfiltered employee database table",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "project-3-min.jpg",
			hiRes: "project-3-min.jpg",
			description:
				"Employee database table filtered by employees working on project 3",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "project-30-min.jpg",
			hiRes: "project-30-min.jpg",
			description: "Filtered by employees working on project 30",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "search-j-min.jpg",
			hiRes: "search-j-min.jpg",
			description:
				"Filtered by employees with J at the beginning of their first name",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "search-jo-min.jpg",
			hiRes: "search-jo-min.jpg",
			description:
				"Filtered by employees with Jo at the beginning of their first name",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];

	return (
		<>
			<article className="boxshadow">
				<h1>{title}</h1>
			</article>
			<article className="boxshadow">
				<h2>Program 1</h2>
				<Link
					to="http://web.engr.oregonstate.edu/~kirkpary/cs340/program1/"
					target="_blank"
				>
					Link to website
				</Link>
				<h3>Description</h3>
				<p>
					Program requirements:
					<ol>
						<li>Create Department stats table.</li>
						<li>
							Write triggers for EMPLOYEE table to modify DEPT_STATS table when
							rows are inserted, deleted, or updated in the EMPLOYEE table.
						</li>
						<li>
							Write a function called PayLevel that returns a level given an Ssn
							input. Levels are "Above average", "Average", "Below Average". The
							pay levels should be displayed in the Employee details.
						</li>
					</ol>
				</p>
			</article>
			<article className="boxshadow">
				<h2>Program 2</h2>
				<Link
					to="http://web.engr.oregonstate.edu/~kirkpary/cs340/program2/"
					target="_blank"
				>
					Link to website
				</Link>
				<h3>Description</h3>
				<p>
					Program requirements:
					<ol>
						<li>View dependents for a given employee.</li>
						<li>Add a new dependent for a given employee.</li>
						<li>Update information about a dependent.</li>
						<li>Delete a dependent from an employee’s list of dependents.</li>
					</ol>
				</p>
			</article>
			<article className="boxshadow">
				<h2>Program 3</h2>
				<h3>Description</h3>
				<p>
					Program requirements:
					<ol>
						<li>Website implemented in Node.js</li>
						<li>
							Displays the first name, last name, and department number of
							employees that work at "The Company".
						</li>
						<li>
							Has the capability of filtering employees by the project they work
							on.
						</li>
						<li>
							Has the capability of searching for employees by first names.
						</li>
						<li>
							Includes a title and your name at the bottom of the webpage.
						</li>
					</ol>
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{program3Images.map((image, index) => {
						return (
							<Image
								key={index}
								path={imagePath}
								lowRes={image.lowRes}
								highRes={image.hiRes}
								description={image.description}
								author={image.author}
								year={image.year}
							/>
						);
					})}
				</div>
				<br className="clear" />
			</article>
		</>
	);
};

export default CS340;
