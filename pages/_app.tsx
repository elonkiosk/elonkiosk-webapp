import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "../styles/global";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global styles={global} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
