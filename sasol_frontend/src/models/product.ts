export interface Product {
  id: number;
  active: boolean;
  price: string;
  temp_price: string;
  picture: string;
  name: string;
  description: string;
  tags?: string[];
}

export interface ProductResponse {
  id: number;
  active: boolean;
  price: string;
  picture: string;
  name: string;
}
