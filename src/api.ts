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
	//const storeid = sessionStorage.getItem("storeid");

	try {
		const response = await axios.get("/gets");
		return response.data.content.category;
	} catch (e) {
		//return ["오류"];
		throw e;
	}
};

//type QueryKey = string | readonly unknown[];
interface QueryKey {
	queryKey: string | readonly unknown[];
}

export const getMenu = async ({ queryKey }: QueryKey) => {
	//const storeid = sessionStorage.getItem("storeid");
	//const category = queryKey[1];

	try {
		const response = await axios.get("/gets/cate");
		//console.log(response.data.content);
		return response.data.content;
	} catch (e) {
		//return [];
		throw e;
	}
};
