import { Component } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "TabAppOutlet";
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: "First",
        link: "./first",
        index: 0
      },
      {
        label: "Second",
        link: "./second",
        index: 1
      },
      {
        label: "Third",
        link: "./third",
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === "." + this.router.url)
      );
    });
  }

  onActivate(componentReference) {
    if (this.activeLinkIndex === 0) {
      componentReference.search();
      console.log(componentReference);
      console.log(this.activeLinkIndex);
      componentReference.searchItem.subscribe(data => {
        // Will receive the data from child here
        console.log(data);
      });
    }
  }
}
