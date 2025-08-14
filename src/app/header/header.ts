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
}