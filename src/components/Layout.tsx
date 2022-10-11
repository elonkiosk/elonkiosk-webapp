import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
	height: 100vh;
	// vh가 맞음? %가 맞지 않음?
	display: flex;
	flex-direction: column;
`;

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

export default function Layout({ children }: any) {
	const navigate = useNavigate();

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
