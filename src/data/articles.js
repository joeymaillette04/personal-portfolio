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

// list in order of newest to oldest
const myArticles = [article_2, article_1];

export default myArticles;
