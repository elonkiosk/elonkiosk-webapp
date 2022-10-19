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
// 문제재시 솔류션 기대효과 + 추후 계획

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
