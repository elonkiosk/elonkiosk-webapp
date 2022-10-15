import styled from "@emotion/styled";
import { useEffect } from "react";

const Wrapper = styled.div`
	@media (max-width: 768px) {
		background-color: var(--color-backgroundwhite);
		width: 100%;
		height: calc(var(--vh, 1vh) * 100);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
`;

interface IConvenientLayout {
	children: React.ReactNode;
}

function setScreenSize() {
	const vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function ConvenientLayout(props: IConvenientLayout) {
	useEffect(() => {
		setScreenSize();
		window.addEventListener("resize", () => setScreenSize());
	}, []);

	return <Wrapper>{props.children}</Wrapper>;
}

export default ConvenientLayout;
