import { Component } from "@angular/core";
import { Player } from "./models/Player"


@Component({
  selector: "my-app",
  template: `
  <ActionBar title="Rings of Trial" class="action-bar"></ActionBar>

    <StackLayout class="background-image">
    <TextField hint="username" keyboardType="email" [(ngModel)]="player.username"
    autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true" [(ngModel)]="player.password"></TextField>

    <Button [text]="isLoggingIn ? 'Continue your journey' : 'Start your journey'" class="submit-button" (tap)="submit()"></Button>
    <Button [text]="isLoggingIn ? 'Start your journey' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    </StackLayout>
  `,
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
