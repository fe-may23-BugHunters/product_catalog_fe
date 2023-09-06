/* eslint-disable no-shadow */
export interface Product {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  images: string[];
  createdAt: string;
}

export enum SortBy {
  NAME = 'name',
  PRICE = 'priceRegular',
  CAPACITY = 'capacity',
}

export enum Categories {
  PHONES = 'phones',
  TABLETS = 'tablets',
  ACCESSORIES = 'accessories',
}
