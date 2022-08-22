import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Wrapper = styled.div`
	height: 100vh;
	// vh가 맞음? %가 맞지 않음?
	display: flex;
	flex-direction: column;
`;

const GoBack = styled.div`
	padding: 12px 0;
	background-color: brown;
	button {
		padding: 0;
		margin-left: 15px;
		background-color: transparent;
		border: 0;

		&:hover {
			cursor: pointer;
		}

		svg {
			font-size: 22px;
			padding: 0 5px;
		}
	}
`;

export default function Layout({ children }: any) {
	const Router = useRouter();

	return (
		<Wrapper>
			<GoBack>
				<button onClick={() => Router.back()}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
			</GoBack>
			{children}
		</Wrapper>
	);
}
