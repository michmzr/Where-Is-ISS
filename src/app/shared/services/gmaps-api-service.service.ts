import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class GoogleMapsApiService implements OnInit
{
    private serverUrl: string = "https://maps.googleapis.com/maps/api/";

    private lastResponse = null;
    private loading: boolean = false;

    constructor(private http: Http)
    {
    }

    ngOnInit(): void
    {
    }

    getGoogleMapsApi(): string
    {
        return environment.api.gmaps;
    }

    getReversedGeoCoding(lat: number, lng: number): Observable<Object>
    {
        let service = this.serverUrl + "geocode/json";

        let params = {
            "latlng": lat + `,` + lng,
            "key": this.getGoogleMapsApi()
        };

        return this.callApi(service, params);
    }

    callApi(url: string, data?: Object): Observable<Object>
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

        console.debug(this.lastResponse);

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
