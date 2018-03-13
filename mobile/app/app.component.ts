import { Component } from "@angular/core";
import { Player } from '../../shared/Player';


@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  player: Player;
}
