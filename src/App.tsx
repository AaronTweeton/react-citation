import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import "./App.css";
import PublicationDate from "./PublicationDate";
import Title from "./Title";

function App() {
	const [firstName, setFirstName] = useState<string>("Sidney");
	const [lastName, setLastName] = useState<string>("Hyman");
	const [title, setTitle] = useState<string>("The American President");
	const [titleType, setTitleType] = useState<string>("book");
	const [date, setDate] = useState<string>("1954-03-03");

	const handleSubmit = () => {
		console.log("submits");
	};

	return (
		<div className="App container py-5">
			<form className="mb-5" onSubmit={handleSubmit}>
				<h1>Citation Generator</h1>
				<fieldset>
					<legend>Author</legend>
					<div className="row mb-3">
						<div className="col">
							<label htmlFor="firstName" className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								name="firstName"
								id="firstName"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div className="col">
							<label htmlFor="lastName" className="form-label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control"
								name="lastName"
								id="lastName"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
				</fieldset>
				<fieldset className="mb-3">
					<legend>Work</legend>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-check form-check-inline">
						<input
							id="book"
							value="book"
							name="titleType"
							type="radio"
							className="form-check-input"
							checked={titleType === "book"}
							onChange={(e) => setTitleType(e.target.value)}
						/>
						<label htmlFor="book" className="form-check-lable">
							Book
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							id="magazine"
							value="magazine"
							name="titleType"
							type="radio"
							className="form-check-input"
							checked={titleType === "magazine"}
							onChange={(e) => setTitleType(e.target.value)}
						/>
						<label htmlFor="magazine" className="form-check-lable">
							Magazine
						</label>
					</div>
				</fieldset>
				<fieldset className="mb-3">
					<legend>Date</legend>
					<label htmlFor="date">Publication Date</label>
					<input
						type="date"
						name="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</fieldset>
			</form>
			<section className="mb-5">
				<h2>Citation</h2>
				<ol>
					<li>
						{firstName} {lastName}
						{firstName && lastName && title && <span>, </span>}
						<Title title={title} titleType={titleType} />
						{title && date && <span>, </span>}
						{date && (
							<PublicationDate
								date={date}
								titleType={titleType}
							/>
						)}
						.
					</li>
				</ol>
			</section>
			<section className="mb-5">
				<h2>Bibliography</h2>
				<ul>
					<li>
						{lastName}
						{firstName && lastName && <span>, </span>}
						{firstName}
						{firstName && lastName && title && <span>, </span>}
						<Title title={title} titleType={titleType} />
						{title && date && <span>, </span>}
						{date && (
							<PublicationDate
								date={date}
								titleType={titleType}
							/>
						)}
						.
					</li>
				</ul>
			</section>
			<section className="mb-5">
				<h2>Filename</h2>
				<samp>
					{firstName}
					{firstName && lastName && <span>-</span>}
					{lastName}
					{firstName && lastName && title && <span>--</span>}
					{title.replaceAll(" ", "-")}
					{title && date && <span>--</span>}
					{date}
				</samp>
			</section>
		</div>
	);
}

export default App;
