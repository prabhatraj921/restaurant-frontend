/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  urls: {
    access: 'https://access.pod1.planhub.com/',
    api: 'https://api.pod1.planhub.com',
    app: 'https://app.pod1.planhub.com/',
    cookieDomain: 'pod1.planhub.com',
    files: 'https://pod1-planhubdev.s3-us-west-2.amazonaws.com',
    hubspotTrial: 'https://meetings.hubspot.com/jay-woolley/subcontractor-demo-from-website',
    socketAddress: 'https://api.pod1.planhub.com:8890/',
    subcontractor: 'https://subcontractor.pod1.planhub.com/',
    supplier: 'https://supplier.pod1.planhub.com/',
    generalcontractor: 'https://generalcontractor.pod1.planhub.com/',
    zipDocs: 'https://api.pod1.planhub.com/',
    chargeBee: 'planhub-test',
  },
};
