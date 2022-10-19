import { useEffect } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
	@media (max-width: 768px) {
		background-color: var(--color-backgroundwhite);
		width: 100%;
		height: calc(var(--vh, 1vh) * 100);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: relative;
	}
`;

function setScreenSize() {
	const vh = window.innerHeight * 0.01;

	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

const GoBack = styled.div`
	padding: 14px 0;
	background-color: var(--color-pink);

	button {
		padding: 0;
		margin-left: 15px;
		background-color: transparent;
		border: 0;

		&:hover {
			cursor: pointer;
		}

		svg {
			font-size: 24px;
			padding: 0 5px;
			color: #fff;
		}
	}
`;

interface INormalLayout {
	children: React.ReactNode;
}

function NormalLayout({ children }: INormalLayout) {
	const navigate = useNavigate();

	useEffect(() => {
		setScreenSize();
		window.addEventListener("resize", () => setScreenSize());
	}, []);

	return (
		<Wrapper>
			<GoBack>
				<button onClick={() => navigate(-1)}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			</GoBack>
			{children}
		</Wrapper>
	);
}

export default NormalLayout;
