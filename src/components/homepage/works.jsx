import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./titanium.jpg"
								alt="titanium"
								className="work-image"
							/>
							<div className="work-title">titanium.agency</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">May 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img
								src="./carizon.png"
								alt="carizon"
								className="work-image"
							/>
							<div className="work-title">Carizon Agency</div>
							<div className="work-subtitle">
								Fullstack Developer
							</div>
							<div className="work-duration">Aug 2021 - Nov 2021</div>
						</div>

						<div className="work">
							<img
								src="./mcdonalds.jpg"
								alt="mcdonalds"
								className="work-image"
							/>
							<div className="work-title">McDonald's Canada</div>
							<div className="work-subtitle">
								Supervisor
							</div>
							<div className="work-duration">Mar 2019 - Aug 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
