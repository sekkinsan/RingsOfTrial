import { Component } from "@angular/core";
import { Player } from "./models/Player"


@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"]
})

export class AppComponent {
  // Your TypeScript logic goes here
  player: Player;
  isLoggingIn = true;

  constructor() {
    this.player = new Player();
  }
  submit() {
    alert("You’re using: " + this.player.username);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
