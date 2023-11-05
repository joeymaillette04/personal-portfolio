function article_1() {
	return {
		date: "October 2, 2023",
		title: "Exciting Milestone: Portfolio Web App Now Live!",
		description:
			"This week marks an exciting moment as I've successfully deployed my portfolio web application. The platform serves as a comprehensive showcase of my skills in software engineering, machine learning, and data analysis. From autonomous bots to data-driven financial models, you can get a glimpse of various projects I've been part of. Stay tuned as I continually update it with more of my latest work.",
		keywords: [
			"React Apps",
			"Personal Portfolio",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,

	};
}

function article_2() {
	return {
		date: "October 3, 2023",
		title: "An Upcoming Adventure: Interview with MIT-PITT-RW Design Team",
		description:
			"I am excited to share that I have an upcoming interview with the MIT-PITT-RW design team, which specializes in autonomous racing. This isn't just an interview; it's an opportunity to engage with a subject that fascinates me deeply. I look forward to potentially being part of a team that pushes the boundaries of autonomous vehicles and racing technology. Stay tuned for updates!",
		keywords: [
			"React Apps",
			"Personal Portfolio",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

function article_3() {
	return {
		date: "October 18, 2023",
		title: "New GitHub Projects Alert: DSA Implementations & VHDL-based Adder Modules!",
		description:
		"The first project encompasses a meticulously curated collection of my Data Structures and Algorithms (DSA) implementations. From basic sorting algorithms to intricate data structures, this repository is a testament to my dedication and proficiency in the foundational concepts of computer science. The second project is particularly exciting for those interested in hardware description and digital logic design. It features the implementation of a half-adder, full-adder, and a 4-bit adder using VHDL.",
		keywords: [
			"Data Strcutures & Algorithms",
			"Algorithms",,
			"DSA",
			"VHDL",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

function article_4() {
	return {
		date: "November 4, 2023",
		title: "Engineering the Future of Racing: My New Chapter with MIT-PITT-RW!",
		description:
		"With great enthusiasm, I step into a leading-edge role with the MIT-PITT-RW autonomous racing team for the Indy Autonomous Challenge with prizes up to 1.5 Million USD. As part of the behaviour software team, my objective is to enhance the path planning and control strategies of our autonomous racing car. The joint venture with MIT, PITT, RIT, and UWaterloo presents an exceptional opportunity to merge analytical problem-solving with real-world applications in a field that is defining the cutting edge of transportation technology.",
		keywords: [
			"FSAE",
			"IAC",,
			"Autonomous Cars",
			"Autonomous Vehicles",
			"Autonomous Racing",
			"Software Design",
			"Software Engineering",
			"Path Planning",
			"Control Systems",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	};
}

// list in order of newest to oldest
const myArticles = [article_4, article_3, article_2, article_1];

export default myArticles;
