interface Iproducto {
  name: string;
  description: string;
  stock: number;
  status: number;
  price: number;
  foto: string | File;
  categoryid : number;
  sellerid : number;

}

export default Iproducto