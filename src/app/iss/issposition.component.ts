import {Component, OnDestroy, OnInit} from "@angular/core";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {SatelitePosition} from "../shared/models/satelite-position.model";
import {GoogleMapsApiService} from "../shared/services/gmaps-api-service.service";
import {WhereIsApiService} from "../shared/services/where-is-api-service.service";

@Component({
    selector: 'app-issposition',
    templateUrl: './issposition.component.html',
    styleUrls: ['./issposition.component.css'],
    providers: [
        GoogleMapsApiService,
        WhereIsApiService,
    ]
})
export class ISSPositionComponent implements OnInit, OnDestroy
{
    position: SatelitePosition;
    positionName: string;
    reversedPositionGeocode: Object;

    posListener;
    reversedGeoCodeListener;

    constructor(private whereIsApiService: WhereIsApiService,
                private gMapsApiService: GoogleMapsApiService)
    {
    }

    ngOnInit()
    {
        this.position = null;
        this.reversedPositionGeocode = null;
        this.positionName = null;

        this.trackPosition();
    }

    trackPosition()
    {
        this.posListener = IntervalObservable.create(1800).subscribe(() =>
        {
            this.whereIsApiService.getIssPosition().subscribe(position => this.onPositionLoaded(position))
        });
    }

    onPositionLoaded(position: Object)
    {
        console.debug(position);

        this.position = position as SatelitePosition;
        this.positionName = null;

        let lat = this.position.latitude;
        let lng = this.position.longitude;

        this.reversedPositionGeocode = this.gMapsApiService.getReversedGeoCoding(lat, lng).subscribe(
            subscribeToResult => this.onLoadedReversedGeoCde(subscribeToResult)
        )
    }

    private onLoadedReversedGeoCde(subscribeToResult)
    {
        this.reversedPositionGeocode = subscribeToResult;

        if (this.reversedPositionGeocode && subscribeToResult.status !== 'ZERO_RESULTS') {
            this.positionName = subscribeToResult.results[0].formatted_address;
        }
    }

    ngOnDestroy()
    {
        this.posListener.unsubscribe();
        this.reversedGeoCodeListener.unsubscribe();
    }
}
