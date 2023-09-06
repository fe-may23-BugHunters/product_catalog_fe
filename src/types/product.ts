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
  image: string;
  createdAt: string;
}

export enum SortBy {
  NAME = 'name',
  YEAR = 'year',
  CAPACITY = 'capacity',
}

export enum Categories {
  PHONES = 'phones',
  TABLETS = 'tablets',
  ACCESSORIES = 'accessories',
}
