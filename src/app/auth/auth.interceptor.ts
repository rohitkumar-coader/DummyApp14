import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Example: Add a custom header 'Authorization': `Bearer 'your Token'`,
    let headers = {};
    headers = {
      'Authorization' : `Bearer your Token`,
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
        };

        req = req.clone({
          setHeaders: headers
        });
        return next.handle(req);
  }
  
}
