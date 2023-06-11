import { Component } from '@angular/core';

/* Angular-specific TS decorator (imported) that provides metadata to be interpretted by Angular when the exported Component is instantiated */
@Component({
  /* Essentially creates unique HTML tag (CSS selector) by this name that triggers Angular to render the component when instantiated in a component's HTML template */
  selector: 'app-root',
  /* path of the HTML template for this component; can also use 'template' property to write the template inline as a string (backticks for multi-line) */
  templateUrl: './app.component.html',
  /* path(s) of the style sheet(s) for this component; can also use 'styles' property to write the styling inline as a string (backticks for multi-line) */
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
