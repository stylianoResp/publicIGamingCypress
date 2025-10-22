import { EnumEnvironmentName, EnumBrands } from '../support/safety-type-enum-parameters';
// Define the possible environment names for the app
export type EnvironmentName = EnumEnvironmentName;

// Configuration interface for the environment
export interface EnvironmentConfig { 
  users: User[];         // Array of user definitions
  brands: BrandConfig[]; // Array of brand configurations
}

// Configuration interface for a brand
export interface BrandConfig {
  name: EnumBrands; // Brand name
  url: string;  // Brand URL
}

//Configuration for types User
export type User =
  | { role: 'depositor' | 'vip' | 'nondepositor' ; email: string; password: string }
  | { role: 'guest' ; email?: never; password?: never };

