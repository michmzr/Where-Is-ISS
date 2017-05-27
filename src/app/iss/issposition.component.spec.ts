import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ISSPositionComponent} from "./issposition.component";

describe('ISSPositionComponent', () =>
{
    let component: ISSPositionComponent;
    let fixture: ComponentFixture<ISSPositionComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [ISSPositionComponent]
        })
        .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(ISSPositionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () =>
    {
        expect(component).toBeTruthy();
    });
});
