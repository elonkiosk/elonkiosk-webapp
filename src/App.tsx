import React from "react";
import AppRouter from "./Router";
import { css, Global } from "@emotion/react";
import { global } from "./style/global";

function App() {
	return (
		<div className="App">
			<Global styles={global} />
			<AppRouter />
		</div>
	);
}

export default App;
