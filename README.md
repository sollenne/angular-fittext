# angular-fittext 
[Change Log](https://github.com/sollenne/angular-fittext/releases)

### [Heres the demo!](http://sollenne.com/angular-fittext-demo/)

Angular directive (typescript) to do what fittext.js did when jquery was cool.
This auto-scales the font size to fit the width of it's container. 

### Versioning & What heppened to ng4-fittext?
This package was renamed angular-fittext to get rid of the ng version binding. This will follow the updates for angular and will not need to be bound specifically to a version of angular. We have kept the same github repo, but renamed it to angular-fittext. 

### Installation

Install the library
```sh
$ npm install --save angular-fittext
```

### Usage

Import it in your Angular project as a module

1) Declare it in your module
    ```sh
    import {AngularFittextModule} from 'angular-fittext';
    
    @NgModule({
      imports: [
        AngularFittextModule,
        ...
      ]
    })
    
    ```
    
2) Use it in a component
    
    **The element that contains this directive should have a CSS width!**
    ```sh
   import {Component} from '@angular/core';
   
    @Component({
      selector: 'hero',
      template: `
        <div style="align-content: center;">
            <div style="width: 20%; height: 20%; margin: 0 auto;">
                <div fittext>test</div>
            </div>
         </div>`
    })
    
    export class AppComponent {}
    ```

   Parameters:
    
  | Parameter | Description | Values |
  | --- | --- | --- |
  | `fittext` (required) | Selector for the directive. | boolean (defaults to `true`)
  | `[activateOnResize]` (optional) | enable/disable the auto-scale in case of window resize | boolean (defaults to `true`)
  | `[compression]` (optional) | compression rate. How fast should the text resize? *As of v1.2.0, this can receive a dynamic value. | number (defaults to `1`)
  | `[minFontSize]` (optional) | minimum font size allowed on element | number (defaults to `0`)
  | `[maxFontSize]` (optional) | maximum font size allowed on element | number (defaults to `infinity`)
  | `[delay]` (optional) | time to delay resize (in nanoseconds) | number (defaults to `100`)


### Development
Want to contribute? Great!
Simply, clone the repository!

License
----
ISC


**- Rich**
  
