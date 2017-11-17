/* tslint:disable:no-unused-variable */
import { Component } from "@angular/core";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AngularFittextDirective } from './angular-fittext.directive';

@Component({
    template: `
        <div style="align-content: center;">
            <div style="width: 20%; height: 20%; margin: 0 auto;">
                <div fittext>test</div>
            </div>
        </div>`
})

class TestFittextComponent {
}

describe('Ng4FittextDirective', () => {
    let fixture: ComponentFixture<TestFittextComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestFittextComponent, AngularFittextDirective]
        });
        fixture = TestBed.createComponent(TestFittextComponent);
    });

    it('should create an instance', () => {
        expect(fixture).toBeTruthy();
    });
});