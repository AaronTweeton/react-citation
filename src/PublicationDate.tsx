function PublicationDate(props: { date: string; titleType: string }) {
	const { date, titleType } = props;

	const formatInputToDate = (input: string): Date => {
		const date = new Date(input);
		date.setDate(date.getDate() + 1);
		return date;
	};

	const options: Intl.DateTimeFormatOptions = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	return (
		<time dateTime={date}>
			{titleType === "book" && formatInputToDate(date).getFullYear()}
			{titleType === "magazine" &&
				formatInputToDate(date).toLocaleDateString("en-US", options)}
		</time>
	);
}

export default PublicationDate;
