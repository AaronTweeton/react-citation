function Title(props: { title: string; titleType: string }) {
	const { title, titleType } = props;
	return (
		<cite>
			{titleType === "book" && <q>{title}</q>}
			{titleType === "magazine" && <u>{title}</u>}
		</cite>
	);
}

export default Title;
