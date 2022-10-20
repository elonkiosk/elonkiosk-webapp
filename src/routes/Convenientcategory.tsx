import styled from "@emotion/styled";
import React from "react";
import Loading from "../components/Loading";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";
import ConvenientButton from "../components/ConvenientButton";
import { useNavigate } from "react-router-dom";
import ConvenientFooter from "../components/ConvenientFooter";
import { useQuery } from "react-query";
import { getCategory } from "../api";

const Main = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: var(--color-backgroundwhite);
`;

function Convenientcategory() {
	const { isLoading, data: category } = useQuery<string[]>(
		"catagory",
		getCategory,
	);
	const navigate = useNavigate();

	const RenderCategory = () => {
		const result: React.ReactNode[] = [];
		if (category !== undefined) {
			for (let i = 0; i < category.length; i++) {
				result.push(
					<ConvenientButton
						color="green"
						oper={() => {
							navigate(`/convenientmenu/${category[i]}`);
						}}
					>
						<span>{category[i]}</span>
					</ConvenientButton>,
				);
			}
		}
		return result;
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<ConvenientTitle>
						<span>어떤 종류의 메뉴를 주문하시겠나요?</span>
					</ConvenientTitle>
					<Main>{RenderCategory()}</Main>
					<ConvenientFooter />
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientcategory;
