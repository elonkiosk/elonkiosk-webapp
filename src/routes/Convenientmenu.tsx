import styled from "@emotion/styled";
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import Loading from "../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faAngleRight,
	// faAngleLeft,
	// faCircle,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../components/MenuItem";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMenu, IMenu } from "../api";
import ConvenientFooter from "../components/ConvenientFooter";
import Guide from "../components/Guide";

const Header = styled.div`
	background-color: var(--color-blue);
	padding: 18px;
	span {
		font-size: 24px;
		font-weight: 550;
		color: var(--color-white);
	}
`;

const Main = styled.div`
	flex: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	margin: 10px;
	gap: 12px;
	background-color: var(--color-backgroundwhite);
`;

const PrevNext = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

function Convenientmenu() {
	const [tabnum, setTabNum] = useState<number>(0);
	const [isMenuGuide, setIsMenuGuide] = useState(true);
	const { menuname } = useParams();
	const { isLoading, data: menu } = useQuery<IMenu[]>(
		["menu", menuname],
		getMenu,
	);

	useEffect(() => {
		setTimeout(() => setIsMenuGuide(false), 2500);
	}, []);
	//const navigate = useNavigate();

	const RenderMenu = (tabnum: number) => {
		const result = [];
		if (menu !== undefined && menu !== null) {
			if (menu.length > 0) {
				let remainder = 0;
				if (parseInt(String((menu.length - 1) / 4)) == tabnum) {
					if (menu.length % 4 == 0) {
						remainder = 4;
					} else {
						remainder = menu.length % 4;
					}
				} else if (parseInt(String((menu.length - 1) / 4)) == 0) {
					remainder = menu.length;
				} else {
					remainder = 4;
				}
				for (let i = tabnum * 4; i < tabnum * 4 + remainder; i++) {
					result.push(
						<MenuItem
							no={menu[i].number}
							image={menu[i].pic}
							name={menu[i].name}
							price={menu[i].price}
							isConvenient={true}
						></MenuItem>,
					);
				}
			}
		}
		return result;
	};

	const PrevMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (tabnum > 0) {
			setTabNum(prev => prev - 1);
		}
		event.preventDefault();
	};

	const NextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (menu !== undefined) {
			if (tabnum < parseInt(String((menu.length - 1) / 4))) {
				setTabNum(prev => prev + 1);
			}
		}
		event.preventDefault();
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					{isMenuGuide ? <Guide category="menu" /> : <></>}
					<Header>
						<span>{menuname}</span>
					</Header>
					<Main>{RenderMenu(tabnum)}</Main>
					<PrevNext>
						<ConvenientButton color="green" oper={PrevMenu}>
							<span>
								<FontAwesomeIcon icon={faCircleArrowLeft} />
								{"\n\n\n이전메뉴"}
							</span>
						</ConvenientButton>
						<ConvenientButton color="green" oper={NextMenu}>
							<span>
								{"다른메뉴\n\n\n"}
								<FontAwesomeIcon icon={faCircleArrowRight} />
							</span>
						</ConvenientButton>
					</PrevNext>
					<ConvenientFooter />
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientmenu;
