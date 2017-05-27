import {inject, TestBed} from "@angular/core/testing";

import {WhereIsApiService} from "./where-is-api-service.service";

describe('WhereIsApiServiceService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [WhereIsApiService]
        });
    });

    it('should be created', inject([WhereIsApiService], (service: WhereIsApiService) =>
    {
        expect(service).toBeTruthy();
    }));
});
