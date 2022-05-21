import { Injectable, Injector } from "@angular/core";
import {
      HttpRequest,
      HttpHandler,
      HttpEvent,
      HttpInterceptor,
      HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
      constructor(private router: Router) {}

      intercept(
            request: HttpRequest<any>,
            next: HttpHandler
      ): Observable<HttpEvent<any>> {
            const accessToken = localStorage.getItem(
                  environment.AUTH_TOKEN_NAME
            );
            // if (accessToken) {
            //       request = request.clone({
            //             setHeaders: {
            //                   Authorization: `Bearer ${accessToken}`,
            //             },
            //       });
                 
            // }
            return next.handle(request).pipe(
                  tap(
                        () => {},
                        (err: any) => {
                              if (err instanceof HttpErrorResponse) {
                                    if (err.status !== 401) {
                                          return;
                                    }
                                    localStorage.removeItem(
                                          environment.AUTH_TOKEN_NAME
                                    );
                                    
                                    this.router.navigate(["/login"]);
                                    // window.location.href = "/login";
                              }
                        }
                  )
            );
      }
}

