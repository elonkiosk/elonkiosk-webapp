import { atom, selector } from "recoil";

export interface IpickedMenu {
	no: number;
	image: string;
	name: string;
	price: number;
	quantity: number;
}

export const menuAtom = atom<IpickedMenu[]>({
	key: "pickedMenu",
	default: [],
});
