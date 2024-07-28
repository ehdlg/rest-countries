import { REGION_FILTERS } from './constants';

export interface Country {
  flags: Flags;
  name: Name;
  tld: string[];
  currencies: { [key: string]: Currency };
  capital: string[];
  region: Region;
  subregion: string;
  languages: { [key: string]: string };
  population: number;
  borders?: string[];
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export type AllRegions = keyof typeof Region | 'All';

export const isValidRegion = (r: string): r is AllRegions => {
  return r in REGION_FILTERS;
};
