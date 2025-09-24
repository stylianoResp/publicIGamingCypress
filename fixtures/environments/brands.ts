import {user} from "./users";
import {EnvironmentName,EnvironmentConfig} from "../../env.config";

export const environmentData: Record<EnvironmentName, EnvironmentConfig> = {
  production: {
    users:  Object.values(user),
    brands: [
      { name: 'madcasino', url: 'https://www.ecasino.com' },
      { name: 'slottio', url: 'https://www.elottio.com' },
    ],
  },
  staging: {
    users:  Object.values(user),
    brands: [
      { name: 'madcasino', url: 'https://staging.ecasino.com' },
      { name: 'slottio', url: 'https://staging.elottio.com' },
    ],
  },
  development: {
    users:  Object.values(user),
    brands: [
      { name: 'madcasino', url: 'https://dev.ecasino.com' },
      { name: 'slottio', url: 'https://dev.elottio.com' },
    ],
  },
};
