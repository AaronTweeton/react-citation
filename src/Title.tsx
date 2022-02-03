function Title(props: {
	title: string;
	titleType: string;
	magazineTitle: string;
}) {
	const { title, titleType, magazineTitle } = props;
	return (
		<cite>
			{titleType === "book" && (
				<>
					<q>{title},</q>&nbsp;
				</>
			)}
			{titleType === "magazine" && (
				<>
					<q>{title},</q> <u>{magazineTitle}</u>,&nbsp;
				</>
			)}
		</cite>
	);
}

export default Title;
