import axios from "axios";

export interface IGets {
	//error: null;
	content: {
		food_number: number;
		food_category: string;
		store_id: number;
		food_name: string;
		price: number;
		food_pic: string;
		food_explanation: string;
	}[];
}
