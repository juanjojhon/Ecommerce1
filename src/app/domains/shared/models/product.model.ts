import { CategoryM } from "./category.model";

export interface ProductM{
    id: number;
    title:string;
    description:string;
    price:number;
    images:string[];
    creationAt: string;
    category:CategoryM;
}