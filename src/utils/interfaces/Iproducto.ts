export interface IProduct {
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


export interface ICartItem extends Pick<IProduct, 'productid' | 'name' | 'price' | 'image'> {
  quantity: number;
}
