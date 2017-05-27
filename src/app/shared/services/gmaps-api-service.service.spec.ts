import {inject, TestBed} from "@angular/core/testing";
import {GoogleMapsApiService} from "./gmaps-api-service.service";

describe('GMapsApiService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [GoogleMapsApiService]
        });
    });

    it('should be created', inject([GoogleMapsApiService], (service: GoogleMapsApiService) =>
    {
        expect(service).toBeTruthy();
    }));
});
