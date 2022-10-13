import React from "react";
import AppRouter from "./Router";
import { css, Global } from "@emotion/react";
import { global } from "./style/global";
import { RecoilRoot } from "recoil";

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<Global styles={global} />
				<AppRouter />
			</RecoilRoot>
		</div>
	);
}

export default App;
