import {environment as baseEnvironment} from './environment.custom';
import {Environment} from './type';

const environmentOverrides = {
    urls: Object.assign({}, baseEnvironment.urls, {
        app: 'http://localhost:4200/',
        cookieDomain: null,
        files: 'https://restro.s3-us-west-2.amazonaws.com',
    }),
} as Environment;

/**
 * Values specific to this environment.
 *
 * To override these values, duplicate this file into a new one called `environment.custom.ts`.
 *
 * The `/config/setup-environment.js` script will overwrite this file on build or serve so you can
 * always pull down the latest and take their environment file if there were changes.
 */
export const environment: Environment = Object.assign<{}, Environment, Environment>(
    {},
    baseEnvironment,
    environmentOverrides,
);
