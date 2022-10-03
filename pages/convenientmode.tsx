import type { NextPage } from "next";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Box = styled.div`
	width: 70px;
	height: 70px;
`;

function ConvenientMode() {
	return <Loading />;
}

export default ConvenientMode;
