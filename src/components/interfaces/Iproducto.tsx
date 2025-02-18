interface Iproducto {
  productName: string;
  quantity: number;
  status: string;
  price: number;
  foto: string | File;
}

export default Iproducto