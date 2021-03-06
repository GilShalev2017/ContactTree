import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Contact} from '../../models/app.models';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

@Injectable()
export class ContactsService {

    private dataUrl: string;

    constructor(private http: Http) {
        this.dataUrl = 'contacts.json';
    }

    getContacts(): Observable<Contact[]> {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
