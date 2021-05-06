import React from "react";
import DishCard from "./components/DishCard";
import SearchForm from "./components/SearchForm";

import "./style.css";
import data from "./data";

function App() {
	return (
		<main className="main-container">
			<SearchForm />
			<section className="recepie-list-container">
				{data.results.map((dish) => {
					const { display, id, time } = dish;
					return <DishCard key={id} {...dish} />;
				})}
			</section>
		</main>
	);
}

export default App;
