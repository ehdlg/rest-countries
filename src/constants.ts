import { AllRegions } from './interfaces';

export const API_URL = 'https://restcountries.com/v3.1/';

export const COUNTRY_FIELDS = [
  'name',
  'flags',
  'tld',
  'currencies',
  'capital',
  'region',
  'subregion',
  'languages',
  'population',
  'flags',
];

export const REGION_FILTERS: Record<AllRegions, string> = {
  All: 'all',
  Africa: 'region/africa',
  Americas: 'region/americas',
  Antarctic: 'region/antarctic',
  Asia: 'region/asia',
  Europe: 'region/europe',
  Oceania: 'region/oceania',
} as const;
