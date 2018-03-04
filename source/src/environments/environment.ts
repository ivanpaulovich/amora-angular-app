// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  acerolaApiUrl: 'http://grape.westus2.cloudapp.azure.com:8000/api/',
  mangaApiUrl: 'http://grape.westus2.cloudapp.azure.com:8800/api/',
  castanhaApiUrl: 'http://grape.westus2.cloudapp.azure.com:8040/api/',
};
