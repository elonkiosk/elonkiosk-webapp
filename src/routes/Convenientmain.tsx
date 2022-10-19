import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientFooter from "../components/ConvenientFooter";
import BasketSynthesis from "../components/BasketSynthesis";

const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 0 15px 0;
`;

const Main = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(5, 1fr);
	background-color: var(--color-backgroundwhite);

	button {
		:nth-of-type(1) {
			grid-column: 1 / 3;
			grid-row: 1 / 4;
		}

		:nth-of-type(2) {
			grid-column: 1 / 2;
			grid-row: 4 / 6;
		}

		:nth-of-type(3) {
			grid-column: 2 / 3;
			grid-row: 4 / 6;
		}
	}
`;

function Convenientmain() {
	const navigate = useNavigate();

	return (
		<>
			<ConvenientLayout>
				<Header>
					<BasketSynthesis isConvenient={true} />
				</Header>
				<Main>
					<ConvenientButton
						color="green"
						oper={() => {
							navigate("/convenientcategory");
						}}
					>
						<span style={{ fontSize: "33px" }}>음료 추가로 주문하기</span>
					</ConvenientButton>
					<ConvenientButton
						color="red"
						oper={() => {
							navigate("/convenientbasket");
						}}
					>
						<span>선택한 음료</span>
						<span style={{ fontSize: "33px" }}>추가/삭제</span>
					</ConvenientButton>
					<ConvenientButton
						color="red"
						oper={() => {
							navigate("/convenientpaymentmethod");
						}}
					>
						<span>선택한 음료</span>
						<span style={{ fontSize: "33px" }}>결제하기</span>
					</ConvenientButton>
				</Main>
				<ConvenientFooter />
			</ConvenientLayout>
		</>
	);
}

export default Convenientmain;
