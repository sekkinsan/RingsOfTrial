"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Player_1 = require("./models/Player");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isLoggingIn = true;
        this.player = new Player_1.Player();
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.player.username);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <ActionBar title=\"Rings of Trial\" class=\"action-bar\"></ActionBar>\n\n    <StackLayout class=\"background-image\">\n    <TextField hint=\"username\" keyboardType=\"email\" [(ngModel)]=\"player.username\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"player.password\"></TextField>\n\n    <Button [text]=\"isLoggingIn ? 'Continue your journey' : 'Start your journey'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button [text]=\"isLoggingIn ? 'Start your journey' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
            styleUrls: ["pages/login/login-common.css"]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXdDO0FBb0J4QztJQUtFO1FBRkEsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBYlUsWUFBWTtRQWpCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxncEJBV1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOztPQUVXLFlBQVksQ0FjeEI7SUFBRCxtQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxzL1BsYXllclwiXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8QWN0aW9uQmFyIHRpdGxlPVwiUmluZ3Mgb2YgVHJpYWxcIiBjbGFzcz1cImFjdGlvbi1iYXJcIj48L0FjdGlvbkJhcj5cclxuXHJcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlXCI+XHJcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJ1c2VybmFtZVwiIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgWyhuZ01vZGVsKV09XCJwbGF5ZXIudXNlcm5hbWVcIlxyXG4gICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XHJcbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiBbKG5nTW9kZWwpXT1cInBsYXllci5wYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxyXG5cclxuICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnQ29udGludWUgeW91ciBqb3VybmV5JyA6ICdTdGFydCB5b3VyIGpvdXJuZXknXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTdGFydCB5b3VyIGpvdXJuZXknIDogJ0JhY2sgdG8gbG9naW4nXCIgKHRhcCk9XCJ0b2dnbGVEaXNwbGF5KClcIj48L0J1dHRvbj5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgfVxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5wbGF5ZXIudXNlcm5hbWUpO1xyXG4gIH1cclxuICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gIH1cclxufVxyXG4iXX0=