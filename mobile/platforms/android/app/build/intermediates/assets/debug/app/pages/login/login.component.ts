import { Component, OnInit } from "@angular/core";
import { Player } from "../../models/Player"
import { PlayerService } from "../../shared/player/player.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  providers: [PlayerService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"]
})

export class LoginComponent implements OnInit{
  // Your TypeScript logic goes here
  player: Player;
  isLoggingIn: Boolean;

  constructor(private router: Router, private playerService: PlayerService, private page: Page) {
    this.player = new Player();
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
    console.log(JSON.stringify(this.player));
    this.router.navigate(["/spell"]);
  }

  signUp() {
    alert(this.playerService.create(this.player));
    this.isLoggingIn = true;
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }
}
