/* tslint:disable:no-unused-variable */
import { Ng4FittextDirective } from './ng4fittext.directive';
import { Component } from "@angular/core";
import { TestBed, ComponentFixture } from '@angular/core/testing';


@Component({
    template: `
        <h1 [fittext]="true"
            [activateOnResize]="true"
            [container]="fittext"
            [maxFontSize]="160"
            [compression]="0.7">
            TEST ELEMENT TEXT
        </h1>`
})
class TestFittextComponent {
}

describe('Ng4FittextDirective', () => {
    let fixture: ComponentFixture<TestFittextComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestFittextComponent, Ng4FittextDirective]
        });
        fixture = TestBed.createComponent(TestFittextComponent);
    });

    it('should create an instance', () => {
        expect(fixture).toBeTruthy();
    });
});