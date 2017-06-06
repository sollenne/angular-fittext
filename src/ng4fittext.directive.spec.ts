/* tslint:disable:no-unused-variable */
import { Ng4FittextDirective } from './ng4fittext.directive';
import { Component } from "@angular/core";
import { TestBed, ComponentFixture } from '@angular/core/testing';


@Component({
    template: `
        <div #container>
            <h1 [fittext]
                [activateOnResize]="true"
                [container]="container"
                [maxFontSize]="160"
                [compression]="0.7">
                TEST ELEMENT TEXT
            </h1>
        </div>`
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