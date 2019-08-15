import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from "@angular/core";
import { User } from "../User";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.scss"]
})
export class Component2Component implements OnInit {
  public user = new User();
  @Output() searchItem: EventEmitter<any> = new EventEmitter();
  constructor(private eRef: ElementRef) {}

  ngOnInit() {}
  @HostListener("document:click", ["$event"])
  clickout(event: MouseEvent): void {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.searchItem.emit(this.user);
    } else {
      console.log("outside");
    }
  }

  search(data) {
    // emit data to parent component
  }
}
