import styled from "@emotion/styled";
import React from "react";

const Background = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: #ffffffb7;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const LoadingText = styled.div`
	font: 1rem "Noto Sans KR";
	text-align: center;
`;

const LoadingGif = styled.img`
	width: 20%;
`;

function Loading() {
	return (
		<Background>
			<LoadingText>잠시만 기다려 주세요</LoadingText>
			<LoadingGif src={"../static/loading.gif"} alt="로딩이미지" />
		</Background>
	);
}

export default Loading;
