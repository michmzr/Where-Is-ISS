import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class WhereIsApiService implements OnInit
{
    private serverUrl: string = "https://api.wheretheiss.at/";

    private lastResponse = null;
    private loading: boolean = false;

    constructor(private http: Http)
    {
    }

    ngOnInit(): void
    {
        this.loading = false;
    }

    getIssPosition(): Observable<Object>
    {
        let service = this.serverUrl + "v1/satellites/25544";

        return this._callApi(service, {units: "kilometers"});
    }

    _callApi(url: string, data?: Object): Observable<Object>
    {
        let params: URLSearchParams = new URLSearchParams();

        if (data) {
            for (let name in data) {
                params.set(name, data[name] as string);
            }

            url = url + "?" + params.toString();
        }

        this.lastResponse = null;
        this.loading = true;

        return this.http.get(url)
        .map(this.onHttpResponse)
        .catch(this.onHttpError);
    }

    onHttpResponse(res: Response): Object
    {
        this.loading = false;
        this.lastResponse = res.json();

        return this.lastResponse;
    }

    onHttpError(error: any): any
    {
        console.info(`error: ${error}`);

        this.loading = false;
        this.lastResponse = error.json();

        return Observable.throw(error.json().error || 'Server error');
    }
}
