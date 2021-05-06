import React from "react";

function SearchForm(props) {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<aside className="static">
			<form onSubmit={handleSubmit}>
				<label>Add Your Ingredients</label>
				<input type="text" />
			</form>
		</aside>
	);
}

export default SearchForm;
