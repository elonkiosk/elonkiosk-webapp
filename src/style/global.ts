import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const global = css`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	html {
		--color-white: #fff;
		--color-darkwhite: #eee;
		--color-black: #000000;
		--color-orange: #e69f00;
		--color-skyblue: #56b4e9;
		--color-green: #009e73;
		--color-yello: #f0e442;
		--color-blue: #0072b2;
		--color-red: #d55e00;
		--color-puple: #cc79a7;

		--primary-color: #2980b9;

		--border-color: 1px solid #dadce0;
		--border-active: 2px solid #2980b9;
	}
`;

export const Button = styled.button`
	background-color: var(--color-pink);
	border-radius: 9px;
	border: var(--border-color);
	color: #fff;
	span {
		font-size: 14px;
	}
	padding: 7px;
`;
