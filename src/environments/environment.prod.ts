import {Environment} from './type';

/**
 * This is created separately from @see environment to allow additional properties
 * that @see Environment does not have.
 */
const env = {
    urls: {
        api: 'http://localhost:8000',
        app: 'https://app.restro.com/',
        cookieDomain: 'restro.com',
        files: 'https://restro.s3-us-west-2.amazonaws.com',
    }
};

/**
 * Values specific to this environment.
 *
 * To override these values, duplicate this file into a new one called `environment.custom.ts`.
 *
 * The `/config/setup-environment.js` script will overwrite this file on build or serve so you can
 * always pull down the latest and take their environment file if there were changes.
 */
export const environment: Environment = env;
