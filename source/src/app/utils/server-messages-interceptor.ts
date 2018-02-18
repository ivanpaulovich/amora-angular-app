
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ServerMessageInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((error, caught) => {
                if (error.error && typeof error.error === 'object') {
                    Object.getOwnPropertyNames(error.error)
                        .forEach(e => {
                            this.toastr.error(error.error[e], 'Invalid operation!');
                        });
                } else {
                    this.toastr.error(error.error ? error.error : 'Try again later!', 'Invalid operation!');
                }

                return Observable.throw(error);
            }) as any;
    }
}
