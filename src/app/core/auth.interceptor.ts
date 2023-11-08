import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SessionService } from './services/session.service';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const modifiedReq = this.modifyRequest(request);

    return next
      .handle(modifiedReq)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  modifyRequest(req: HttpRequest<any>): HttpRequest<any> {
    let headers = {};
    const isEndpointException = this.getExceptionEndpoints().includes(req.url);

    if (!isEndpointException) headers = this.updateHeaders(req);

    return req.clone({ setHeaders: headers });
  }

  getExceptionEndpoints(): string[] {
    const endpointsWithException = [environment.base_url + '/authenticate'];
    return endpointsWithException;
  }

  updateHeaders(req: HttpRequest<any>) {
    const existingHeaders = req.headers;
    let newHeaders = {};

    existingHeaders.keys().forEach((key) => {
      newHeaders[key] = existingHeaders.get(key);
    });

    if (!existingHeaders.has('Content-Type')) {
      newHeaders['Content-Type'] = 'application/json';
    }

    if (!existingHeaders.has('Authorization')) {
      const token = this.sessionService.getToken();
      newHeaders['Authorization'] = `Bearer ${token}`;
    }

    return newHeaders;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.router.navigate(['login']);
      this.sessionService.destroySession();
    }

    return throwError(error);
  }
}
