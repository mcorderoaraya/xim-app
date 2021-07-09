import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token = '';

    var changedReq;

    if (token) {

       changedReq = req.clone({
      //   setHeaders:{
      //     Authorization: `Bearer ${token}`
      //   },
       });

    } else {

      changedReq = req;

    }
    return next.handle(changedReq);
  }
}
