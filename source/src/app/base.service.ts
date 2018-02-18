import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {
    private _endPoint: string;

    public get url() {
        return localStorage.getItem('back-end') + this._endPoint;
    }

    constructor(protected http: HttpClient, protected endPoint: string) {
        this._endPoint = endPoint;
    }
}
