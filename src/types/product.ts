/* eslint-disable no-shadow */
export interface DescriptionItem {
  title: string;
  text: string[];
}

export interface Product {
  id: string;
  namespaceId: string;
  name: string;
  category: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string | null;
  zoom: string | null;
  cell: string[];
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

export interface VariantOptions {
  color: string,
  capacity: string,
}

export interface TechSpecs {
  title: string,
  value: string | string[] | null,
}
