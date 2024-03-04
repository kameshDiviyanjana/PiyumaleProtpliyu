import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigathionComponent } from "./navigathion/navigathion.component";
import { HomeComponent } from "./home/home.component";
import { SkillComponent } from "./skill/skill.component";
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavigathionComponent, HomeComponent, SkillComponent, AboutComponent]
})
export class AppComponent {
  title = 'piyumale';
}
