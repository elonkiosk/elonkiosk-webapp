import axios from "axios";

export interface ICategory {
	category: string[];
}

export interface IMenu {
	number: number;
	category: string;
	store: number;
	name: string;
	price: number;
	pic: string;
	explanation: string;
}

export const getCategory = async () => {
	const storeid = sessionStorage.getItem("storeid");

	try {
		const response = await axios.get(
			`https://qr-ufo.com/api/store/${storeid}/category`,
		);

		return response.data.category;
	} catch (e) {
		throw e;
	}
};

interface QueryKey {
	queryKey: string | readonly unknown[];
}

//export const getMenu = async () => {
export const getMenu = async ({ queryKey }: QueryKey) => {
	const storeid = sessionStorage.getItem("storeid");
	const category = queryKey[1];

	try {
		const response = await axios.get(
			`https://qr-ufo.com/api/store/${storeid}/menus/${category}`,
		);
		return response.data;
	} catch (e) {
		throw e;
	}
};

/*
interface IOrderMenu {
	number: number;
}

export const postOrder = async () => {
	try {
		//console.log(menu);
		const response = await axios.post("/api", {
			store: Number(sessionStorage.getItem("storeid")),
			menu: calMenus(),
			total: calTotalPrice(),
		});

		return response;
	} catch (e) {
		throw e;
	}
};
*/
