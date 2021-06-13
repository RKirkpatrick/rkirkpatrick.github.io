import { Image } from "../Partials/Masonry";

const CS458 = ({ title }) => {
	const imagePath = "/img/cs458/";
	const project1Images = [
		{
			lowRes: "p1-1-720-min.jpg",
			hiRes: "p1-1-min.jpg",
			description: "Life expectancy line graph by race",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p1-2-720-min.jpg",
			hiRes: "p1-2-min.jpg",
			description: "Life expectancy line graph by race and sex",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p1-3-720-min.jpg",
			hiRes: "p1-3-min.jpg",
			description: "Life expectancy heat map by race",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p1-4-720-min.jpg",
			hiRes: "p1-4-min.jpg",
			description: "Life expectancy heat map by race and sex",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];
	const project2Images = [
		{
			lowRes: "p2-1-720-min.png",
			hiRes: "p2-1-min.png",
			description: "College social network connection graph",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p2-2-720-min.png",
			hiRes: "p2-2-min.png",
			description: "College social network connection graph with uncertainty",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
	];
	const project3Images = [
		{
			lowRes: "p3-1-720-min.png",
			hiRes: "p3-1-min.png",
			description: "Earthquake data overlaid on world map",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p3-2-720-min.png",
			hiRes: "p3-2-min.png",
			description: "Eruption data overlaid on world map",
			author: process.env.REACT_APP_AUTHOR,
			year: 2020,
		},
		{
			lowRes: "p3-3-720-min.png",
			hiRes: "p3-3-min.png",
			description: "Emission data overlaid on world map",
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
				<h2>Project 1 - Life expectancy graph 1900-2017</h2>
				<h3>Assignment Description</h3>
				<ul>
					<li>Data sources:</li>
					<ul>
						<li>
							<a
								href="https://www.cdc.gov/DataStatistics"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.cdc.gov/DataStatistics
							</a>
						</li>
						<li>
							<a
								href="https://www.oregon.gov/odot/Data/Pages/Crash.aspx"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.oregon.gov/odot/Data/Pages/Crash.aspx
							</a>
						</li>
						<li>
							<a
								href="https://nasa.github.io/data-nasa-gov-frontpage"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://nasa.github.io/data-nasa-gov-frontpage
							</a>
						</li>
					</ul>
					<li>Use R, matlab, excel or other software tool:</li>
					<li>Produce 3-page long document</li>
					<ul>
						<li>
							Page 1: Title and one paragraph (500+ words describing the data)
						</li>
						<li>
							Page 2: Plot the data sets using plot functions and label the axes
						</li>
						<li>
							Page 3: Visualize the data with software tools to create
							compelling figures
						</li>
					</ul>
				</ul>
				<h3>Data Description</h3>
				<h4>Page 1</h4>
				<p className="tab">
					Life expectancy data is from the National Vital Statistics Reports
					Volume 68, Number 7 United States Life Tables, 2017. This report is
					accessible from the Life Expectancy section in the NCHS Homepage on
					the CDC website. This report includes life expectancy and survivorship
					data. For this assignment, I am only using the life expectancy data.
					There are two types of life expectancy data in the report, life
					expectancy at ages 0 to 100 by year and Race and life expectancy at
					birth by year. I’m using the life expectancy at birth data, this is
					table 19 in the report. The life expectancy table is split by race and
					sex. The categories are all, male, female, white, white male, white
					female, black, black male, black female, Hispanic, non-Hispanic white,
					non-Hispanic black. The data for all, white, and black go from 1900 to
					2017 and the Hispanic data goes from 2006 to 2017. For this
					assignment, I am going to be displaying the data from 1900 to 2017 so
					I’m not going to use the Hispanic data to keep the graph and
					visualization less cluttered.
				</p>
				<p className="tab">
					There are a few footnotes on the life expectancy table. Data for the
					black population is not available before 1970, the data from 1900 to
					1969 is estimated using the non-white population. Alaska was added in
					1959 and Hawaii was added in 1960. Life expectancies for 2001 to 2017
					were calculated using a revised method. Life expectancies for 2001 to
					2009 were re-estimated and may be different from previously published
					data. Deaths are based on a 50% sample size. There are a few more
					things that could affect the data mentioned in the Technical Notes.
					Beginning in 1970 data for nonresidents was excluded. The geographic
					areas were limited to death-registration areas before 1929. There were
					10 death-registered states in 1900 and 34 death-registered states in
					1920. The values before 1945 were estimated using a different
					procedure for the following categories: total, male, female, white,
					white male, white female.
				</p>
				<p className="tab">
					When I was looking at the plot and the heat map of the data I noticed
					that there was a large drop in the life expectancy around 1918. At
					first, I thought this could have been caused by World War I but when I
					did some research I found out that it was caused by Influenza.
					Influenza killed 50 million people, more than three times the 16
					million people that died in World War I. This caused the life
					expectancy to drop by 12 years in 1918. The second of the two plots
					below is a little harder to see the data than the first one. The
					heatmaps do a much better job of showing lots of categories, although
					it isn’t as easy to tell what the values are.
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{project1Images.map((image, index) => {
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
			<article className="boxshadow">
				<h2>Project 2</h2>
				<h3>Assignment Description</h3>
				<ul>
					<li>Data sources:</li>
					<ul>
						<li>
							<a
								href="http://networkrepository.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								http://networkrepository.com
							</a>
						</li>
					</ul>
					<li>Produce 4-page long document</li>
					<ul>
						<li>
							Page 1: Title and one paragraph (500+ words describing the data)
						</li>
						<li>
							Page 2: Use{" "}
							<a
								href="https://gephi.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://gephi.org
							</a>{" "}
							to visualize the chosen data set
						</li>
						<li>
							Page 3: One paragraph critique (500+ words) of{" "}
							<a
								href="https://kops.uni-konstanz.de/bitstream/handle/123456789/36890/Schulz_0-386044.pdf?sequence=1&isAllowed=y"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://kops.uni-konstanz.de/bitstream/handle/123456789/36890/Schulz_0-386044.pdf?sequence=1&isAllowed=y
							</a>
						</li>
						<li>
							Page 4: Demonstrate your uncertainty visualization (with a tool or
							just hand-drawing sketch) on your data set
						</li>
					</ul>
				</ul>
				<h3>Data Description</h3>
				<h4>Page 1</h4>
				<p className="tab">
					The data is from NetworkRepository.com and was collected by Dartmouth
					College. The graph is a Facebook network where each node is a person
					and each edge is a friendship. It’s an undirected and unweighted
					graph. There are over 7,000 nodes and over 300,000 edges. The average
					number of degrees that one node has is 79. From the tags on the web
					Network Repository website, it looks like this is the Facebook network
					for the students and/or teachers. If it’s the students and teachers
					that would explain why there are two large clusters in the graph. The
					big cluster is the students and the smaller cluster is the teachers.
				</p>
				<p className="tab">
					The data visualization below is using the ForceAtlas 2 layout. I used
					this layout because it is the only one that didn’t take forever to
					load. Each node size and color is determined by the number of
					connections to the node. The nodes with very few connections get
					pushed to the outside. The uncertainty graph visualization could be
					used to show which nodes are students and which are teachers by
					overlaying a colored region on each group.
				</p>
				<h4>Page 3</h4>
				<p className="tab">
					Probabilistic Graph Layout for Uncertain Network Visualization is
					written by Christoph Schulz, Arlind Nocaj, Jochen Goertler, Oliver
					Deussen, Ulrik Brandes, and Daniel Weiskopf. The main focus of the
					article is to provide a technique to “visualize the distribution of
					possible realizations of a probabilistic graph that reflect certainty
					and uncertainty equally well.” The authors build on previous research
					to build their technique for visualizing uncertainty.
				</p>
				<p className="tab">
					The paper describes the work that is related to the research, graph
					models, graph theory, and graph and uncertainty visualization. To get
					a probabilistic graph layout the probabilistic graph is sampled into k
					force-directed layouts using a Monte Carlo process. The k
					force-directed layouts are then tied to a reference layout and
					combined into the probabilistic graph layout. They use node splatting,
					edge splatting and bundling, graph coloring, and density-based
					clustering to visualize the graph.
				</p>
				<p className="tab">
					The authors do a great job of describing how previous research helped
					them make this technique. As long as nodes aren’t overlapping this is
					a great way to show uncertainty. Each node is represented by one color
					so the viewer can tell what node the splatters belong to. The edge
					bundling makes it easier to see the connections between the splattered
					nodes. When the edges aren’t bundled it’s hard to tell what node the
					edges belong to. The figures included in the paper provide a great
					insight into how their techniques change the graph. They provide
					excellent before and after figures for each modification they make.
				</p>
				<p className="tab">
					The authors do a great job of thoroughly explaining their technique.
					They provide a background of information and explain what they added
					to that background. The figures really help show what their technique
					does to the original graph. Overall the paper does a great job of
					relaying their research to the reader.
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{project2Images.map((image, index) => {
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
			<article className="boxshadow">
				<h2>Project 3</h2>
				<h3>Assignment Description</h3>
				<ul>
					<li>Suggested Data sources (you can choose other sources):</li>
					<ul>
						<li>
							<a
								href="https://carto.com/blog/eighty-data-visualizations-examples-using-location-data-maps/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://carto.com/blog/eighty-data-visualizations-examples-using-location-data-maps/
							</a>
						</li>
						<li>
							<a
								href="http://activetectonics.coas.oregonstate.edu/data.htm#2"
								target="_blank"
								rel="noopener noreferrer"
							>
								http://activetectonics.coas.oregonstate.edu/data.htm#2
							</a>{" "}
							(may need to "accept" OSU affiliation)
						</li>
						<li>
							<a
								href="https://gisgeography.com/best-free-gis-data-sources-raster-vector/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://gisgeography.com/best-free-gis-data-sources-raster-vector/
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Aidenjn/CS540-Comparing-Disease-Impacts-on-State-Populations"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/Aidenjn/CS540-Comparing-Disease-Impacts-on-State-Populations
							</a>
						</li>
					</ul>
					<li>Produce 6-page long document with figures on</li>
					<ul>
						<li>
							Page 1: Title and one paragraph (500+ words describing the data)
						</li>
						<li>
							Page 2: One paragraph (800+ words contrasting 3 techniques of the
							7 techniques discussed at{" "}
							<a
								href="https://humansofdata.atlan.com/2016/10/7-techniques-to-visualize-geospatial-data"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://humansofdata.atlan.com/2016/10/7-techniques-to-visualize-geospatial-data
							</a>
						</li>
						<li>
							Page 3: Identify one tool to use from{" "}
							<a
								href="https://www.springboard.com/blog/31-free-data-visualization-tools"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.springboard.com/blog/31-free-data-visualization-tools
							</a>{" "}
							and repeat a demo from this website
						</li>
						<li>
							Page 4—6: Integrate figure, graph, map (can be a network from
							project #2), and text explanation into a multi-view visualization
							system. The figure, the graph, the map (can be a network from
							project #2) and the text should coherently describe the data to be
							visualized. Each page can be a snapshot of the data. Please
							include a screen-capture of the composition.
						</li>
						<li>
							Required for CS558 students and recommended for CS458 students:
							please include a paragraph describing the design principles of
							your work
						</li>
					</ul>
				</ul>
				<h3>Data Description</h3>
				<h4>Page 1</h4>
				<p className="tab">
					The data was gathered by the Smithsonian Institution Global Volcanism
					Program. The data was originally displayed on their web application
					that shows the data on a world map in a time-lapse. The data has
					information about earthquakes and eruptions since 1960 and gas
					emissions since 1978 when satellites were able to provide global SO2
					monitoring. Due to the large amount of earthquake data the website
					slows down the computer a lot. For this assignment, I used Google Data
					Studio to display the data. In order to allow the viewer to select
					different data sets, I had to combine the earthquake, eruption, and
					emission data into one spreadsheet.
				</p>
				<h4>Page 2</h4>
				<p className="tab">
					Chloropleth maps use colors to represent the data. The data is
					separated into regions that are then colored based on the data value
					for that region. Chloropleth maps are great when the data is dependent
					on the region it is from and when the viewer needs to recognize
					geographic locations. The downside of a chloropleth map is that the
					bigger regions can pull the viewer’s attention away from the smaller
					regions that may have more interesting data.
				</p>
				<p className="tab">
					Heat maps also use colors to represent the data, but the colors aren’t
					assigned to specific regions. Heat maps use colors to show the data
					values in more of a gradient across the whole geographic area being
					displayed. Heat maps are great for showing areas of interest because
					areas where the value is high can be smaller than individual regions.
					The downside of a heat map is that they are usually more complex and
					need algorithms to fill in the areas.
				</p>
				<p className="tab">
					Dot maps use dots to represent data. Each data point represents a dot.
					Dot maps are great for showing geotagged data. The main use of the dot
					map is to show the density of data points. One downside to dot maps is
					that when there are too many dots in an area the map becomes solid and
					there is no way to compare the density of these solid regions. Another
					downside to a dot map is that they don’t show any data value, they
					only show the location of each data point.
				</p>
				<p className="tab">
					Chloropleth maps are the best option when regions are important. Heat
					maps are the best option when data doesn’t belong to specific regions,
					such as rainfall data. Dot maps are the best option when geo data is
					the only data that needs to be shown.
				</p>
				<p>
					Data Source:{" "}
					<a
						href="https://volcano.si.axismaps.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://volcano.si.axismaps.io/
					</a>
				</p>
				<h3>Gallery</h3>
				<br className="clear" />
				<div className="masonry">
					{project3Images.map((image, index) => {
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

export default CS458;
