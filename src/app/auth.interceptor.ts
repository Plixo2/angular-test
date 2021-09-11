import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {KeycloakService} from "keycloak-angular";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private kcService: KeycloakService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    if (await this.kcService.isLoggedIn()) {
      const authToken = (await this.kcService.getToken()) || '';
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });
    }

    return next.handle(req).toPromise();
  }
}
