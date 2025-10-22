
//alternative  OPTION is to use interface for the custom helper command  then types for the switch option
//using enum in this case

// Enum for sign-up form states to ensure type safety and autocompletion
export enum SignUpFormState {
  AreEmptyData = 'areEmptyData',
  IsInvalidPasswordAndEmail = 'isInvalidPasswordAndEmail',
  IsInvalidFirstNameLastName = 'isInvalidFirstNameLastName',
  AreAllFilled = 'areAllFilled'
}

//log in parameters addded to enum 
export  enum  LogInFromState { 
 AreCorrectCredentials = 'areCorrectCredentials',
 AreInvalidCredentials = 'areInvalidCredentials'
}

//enums for env type
export enum EnumEnvironmentTypes {
  production = 'production',
  staging = 'staging',
  development = 'development',
}

//enume will be export - will be used in config file for safety
export type EnumEnvironmentName = `${EnumEnvironmentTypes}`;

//enum for all brand names
export enum  EnumBrandsTypes {
  madcasino = 'madcasino',
  slottio = 'slottio',
  saucedemo = 'saucedemo',
  thinking = 'thinking'
}
//enume will be export - will be used in config file for safety
export type EnumBrands = `${EnumBrandsTypes}`;
