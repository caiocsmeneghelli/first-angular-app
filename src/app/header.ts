import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.css"],
  imports: [CommonModule],
  standalone: true
})
export class Header {
  menuLinks = [
    { label: 'Docs', url: 'https://angular.dev' },
    { label: 'Tutorials', url: 'https://angular.dev/tutorials' },
    { label: 'CLI', url: 'https://angular.dev/tools/cli' }
  ];
}