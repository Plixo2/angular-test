import { environment } from 'src/environments/environment';

import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  console.log(environment);
  return () =>
    keycloak.init({
      config: {
        url: environment.authBase,
        realm: 'festech',
        clientId: environment.clientId
      }
    });
}
