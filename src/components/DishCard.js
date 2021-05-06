import React from "react";
import { BiTimeFive } from "react-icons/bi/index";

function DishCard({ display: title, time, image }) {
	return (
		<article className="dish-card">
			<img src={image} alt={title} />
			<div className="dish-card-overlay">
				<h2>{title}</h2>
				<p>
					<BiTimeFive
						size="1.3rem"
						style={{ marginTop: "01rem", marginBottom: "-0.25rem" }}
					/>
					{` ${time}min`}
				</p>
			</div>
		</article>
	);
}

export default DishCard;
