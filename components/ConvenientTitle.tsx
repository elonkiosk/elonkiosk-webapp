import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
	padding: 15px;
	width: 100%;
	display: grid;
	place-items: center;
	background-color: aqua;

	span {
		font-weight: 500;
		word-break: keep-all;
		white-space: pre-wrap;
		line-height: 40px;
	}
`;

interface IConvenientTitle {
	children: React.ReactNode;
}

function ConvenientTitle(props: IConvenientTitle) {
	return <Wrapper>{props.children}</Wrapper>;
}

export default ConvenientTitle;
