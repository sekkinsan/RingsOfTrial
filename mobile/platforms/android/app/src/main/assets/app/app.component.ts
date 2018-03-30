import { Component } from "@angular/core";
import { SaveManager } from "./saver";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>",
  providers: [SaveManager]
})
export class AppComponent {}