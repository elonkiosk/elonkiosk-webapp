import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import React, { useEffect } from "react";
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

function Convenientcate() {
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const { isLoading, data: category } = useQuery<string[]>(
		"catagory",
		getCategory,
	);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(category);
	}, []);

	mock.onGet("/gets").reply(() => {
		const gets = {
			error: null,
			content: {
				category: ["커피", "음료", "빵"],
			},
		};
		return [200, gets];
	});

	const RenderCategory = () => {
		const result: React.ReactNode[] = [];
		if (category !== undefined) {
			for (let i = 0; i < category.length; i++) {
				result.push(
					<ConvenientButton
						color="green"
						oper={(event: React.MouseEvent<HTMLButtonElement>) => {
							navigate(`/convenientmenu/${category[i]}`);
							event.preventDefault();
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

export default Convenientcate;
