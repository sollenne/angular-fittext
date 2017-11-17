
import { NgModule } from '@angular/core';
import { AngularFittextDirective } from "./angular-fittext.directive";

@NgModule({
    declarations: [
        AngularFittextDirective
    ],
    exports: [AngularFittextDirective]
})

export class AngularFittextModule {}