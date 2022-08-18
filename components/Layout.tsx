import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const GoBack = styled.div`
	padding: 10px 0;
	background-color: brown;
	button {
		padding: 0;
		margin-left: 15px;
		background-color: transparent;
		border: 0;
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
