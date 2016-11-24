import { environment } from '../environments/environment';

interface AuthConfiguration {
  clientID: string,
  domain: string,
  redirectUrl: string
}

export const myConfig: AuthConfiguration = {
  clientID: environment.auth0.clientID,
  domain: environment.auth0.domain,
  redirectUrl: environment.auth0.redirectUrl
};
