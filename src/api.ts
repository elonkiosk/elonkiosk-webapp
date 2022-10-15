import axios from "axios";

export interface ICategory {
	category: string[];
}

export const GetCategory = async () => {
	const storeid = sessionStorage.getItem("storeid");
	try {
		const response = await axios.get("/gets");
		return response.data.content.category;
	} catch (e) {
		return ["오류"];
	}
};
