import styled from "@emotion/styled";

const Wrapper = styled.div`
	width: 100%;
	padding: 15px;
	//width: 100%;
	flex: 1;
	display: grid;
	place-items: center;
	background-color: aqua;

	span {
		font-size: 33px;
		font-weight: 600;
		word-break: keep-all;
		white-space: pre-wrap;
		line-height: 40px;
		text-align: center;
	}
`;

interface IConvenientTitle {
	children: React.ReactNode;
}

function ConvenientTitle(props: IConvenientTitle) {
	return <Wrapper>{props.children}</Wrapper>;
}

export default ConvenientTitle;
