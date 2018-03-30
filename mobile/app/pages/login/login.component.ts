import { Component } from "@angular/core";
import { Player } from "../../models/Player"
import { PlayerService } from "../../shared/player/player.service";
import { Router } from "@angular/router";


@Component({
  selector: "my-app",
  providers: [PlayerService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"]
})

export class LoginComponent {
  // Your TypeScript logic goes here
  player: Player;
  isLoggingIn = true;

  constructor(private router: Router, private playerService: PlayerService) {
    this.player = new Player();
    this.player.username = "username";
    this.player.password = "password";
  }
  
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    this.playerService.getPlayer();
    this.router.navigate(["/map"]);
  }
  signUp() {
    alert(this.playerService.create(this.player));
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
