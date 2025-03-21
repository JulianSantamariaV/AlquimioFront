interface IProduct {
  productid: string; 
  name: string;
  description?: string;
  stock: number;
  status: number;
  price: number;
  image: string[];
  categoryid : number;
  sellerid : number;
  condition: string;
  productreview: string;
}

export default IProduct

export interface IProductWithId extends IProduct{
  productid: string; 
}