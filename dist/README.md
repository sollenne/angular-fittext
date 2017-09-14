# ng4-fittext

Angular4 directive (typescript) to do what fittext.js did when jquery was cool.

Basically, This auto-scales the font size to fit the width of it's container. 


### Demo

coming soon

### Installation

Install the library
```sh
$ npm install --save ng4-fittext
```

### Usage

Import it in your Angular4 project like a module

1) Declare it in your module
    ```sh
    import {Ng4FittextModule} from 'ng4-fittext';
    @NgModule({
      imports: [
        Ng4FittextModule
      ]
    })
    
    ```
    
2) Use it in your components
    
    **The element that contains this directive should have a CSS width!**
    ```sh
   import {Component} from '@angular/core';
   
    @Component({
      selector: 'hero',
      template: `<div #heroContainer class="hero">
                    <h1 [fittext]
                        [activateOnResize]="true" 
                        [container]="heroContainer"
                        [minFontSize]="16"
                        [maxFontSize]="200"
                        [compression]="1.2">
                        RESIZE THIS TEXT
                    </h1>
                </div>`
    })
    
    export class HeroComponent {}
    ```

   Parameters:
    
  | Parameter | Description | Values |
  | --- | --- | --- |
  | `[fittext]` (required) | Selector for the directive. It accepts a boolean value but defaults `true`. You can disable the directive for this element by passing in `false`. But why? just remove it to disable. | boolean (default `true`)
  | `[container]` (required) | Your fittext elements parent. Must be a `div` | ElementRef (`<div>`)
  | `[activateOnResize]` (optional) | enable/disable the auto-scale in case of window resize | boolean (default `true`)
  | `[compression]` (optional) | compression rate. How fast should the text resize | number (default `1`)
  | `[minFontSize]` (optional) | minimum font size allowed on element | number (default -infinity)
  | `[minFontSize]` (optional) | maximum font size allowed on element | number (default bitSize limit)


### Development

Want to contribute? Great!
Simply, clone the repository!

fittext.js was pretty useful up until nobody liked jquery anymore. There was an existing ng-1 lib and a sketchy ng-2 directive. This should take care of ng-4+.

### Todos

 - Write tests

License
----

ISC


**- Rich**
  