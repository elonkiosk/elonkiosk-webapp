import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";
import ConvenientButton from "../components/ConvenientButton";
import { useNavigate } from "react-router-dom";
import ConvenientFooter from "../components/ConvenientFooter";

interface IGets {
	//error: null;
	food_number: number;
	food_category: string;
	store_id: number;
	food_name: string;
	price: number;
	food_pic: string;
	food_explanation: string;
}

const Main = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//grid-template-rows: repeat(5, 1fr);
	background-color: antiquewhite;
`;

function Convenientbasket() {
	const [data, setData] = useState<IGets[]>([]);
	const [loading, setLoading] = useState(true);
	const [ismenu, setIsMenu] = useState(true);
	const [error, setError] = useState<unknown>();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const [category, setCategory] = useState<Set<string>>(new Set());
	const navigate = useNavigate();

	// useEffect(() => {}, []);

	const RenderBasket = () => {
		const result: React.ReactNode[] = [];
		category.forEach((item, index) => {
			result.push(
				<ConvenientButton
					color="green"
					oper={(event: React.MouseEvent<HTMLButtonElement>) => {
						navigate(`/convenientmenu/${item}`);
						event.preventDefault();
					}}
					key={index}
				>
					<span>{item}</span>
				</ConvenientButton>,
			);
		});
		return result;
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<Main>{RenderBasket()}</Main>
					<ConvenientFooter />
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientbasket;
