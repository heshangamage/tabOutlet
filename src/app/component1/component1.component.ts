import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
  ElementRef
} from "@angular/core";
import { User } from "../User";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.scss"]
})
export class Component1Component {
  public user = new User();
  @Output() searchItem: EventEmitter<any> = new EventEmitter();

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.searchItem.emit(this.user);
  //   console.log(this.user);
  // }
  constructor(private eRef: ElementRef) {}

  // @HostListener("document:click", ["$event"])
  // clickout(event: MouseEvent): void {
  //   if (this.eRef.nativeElement.contains(event.target)) {
  //     console.log("inside");
  //   } else {
  //     this.searchItem.emit(this.user);
  //   }
  // }

  search() {
    this.searchItem.emit(this.user);
    console.log(this.user);
  }
}
