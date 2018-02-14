
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServerMessageInterceptor implements HttpInterceptor {
    constructor(public snackBar: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((error, caught) => {
                this.snackBar.open('Warning!',
                    '<span style="word-wrap: break-word; overflow-wrap: break-word; word-break: break-word;">' +
                        error.error ? error.error : 'Try again later!' + '<span>', {
                        duration: 2000,
                    });
                return Observable.throw(error);
            }) as any;
    }
}
