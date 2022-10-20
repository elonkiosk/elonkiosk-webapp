import React from "react";
import AppRouter from "./Router";
import { Global } from "@emotion/react";
import { global } from "./style/global";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
	const queryClient = new QueryClient();

	return (
		<div className="App">
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<Global styles={global} />
					<AppRouter />
					<ReactQueryDevtools initialIsOpen={true} />
				</QueryClientProvider>
			</RecoilRoot>
		</div>
	);
}

export default App;
