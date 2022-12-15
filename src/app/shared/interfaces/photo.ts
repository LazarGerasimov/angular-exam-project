import { IUser } from "./user";

export interface IPhoto {
    _id: string,
    title: string,
    description: string,
    price: number,
    img: string,
    _ownerId: IUser,
    likes: []
}