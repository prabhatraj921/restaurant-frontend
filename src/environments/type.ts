export interface EnvironmentUrls {
  api: string;
  app: string;
  cookieDomain: string | null;
  files: string;
}

export interface Environment {
  urls: EnvironmentUrls;
}
