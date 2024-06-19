import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { MsgsService } from "../../shared/services/msgs.service";

@Injectable({
  providedIn: "root",
})
export class BasicInterceptorService implements HttpInterceptor {


  constructor(private jwtHelper: JwtHelperService,
    private msgsService: MsgsService,
    private router: Router) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('SWBTokenNew');
    if (req.url.includes("Identity/login")
      || req.url.includes("AuthenticateByUserId")
      || req.url.includes("changePassword")
      || req.url.includes("Auth/Login")
    ) {
      return next.handle(req); //No Action
    }
    else if (req.url.includes("ChatHub")) {
      let jsonReq: HttpRequest<any> = req.clone();
      return next.handle(jsonReq);
    }
    else {
      if (token != null && !this.jwtHelper.isTokenExpired(token)) {
        return next.handle(this.mappedRequest(req, token));
      }
      else { 
        return next.handle(req); //No Action
        this.msgsService.msgError("Session has been ended", "Please Relogin", true)
        this.router.navigate(['/Auth/Login']);
      }
    }
  }

  mappedRequest(req: HttpRequest<any>, token: string): HttpRequest<any> {
    if (req.url.includes("setRolesOfSheet")) {
      return req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
      });
    }
    else {
      return req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          // 'SignalR-Hub-ConnectionId': BasicInterceptorService.signalRConnectionId != null ? BasicInterceptorService.signalRConnectionId : '',
        }
      })
    }
  }
}
