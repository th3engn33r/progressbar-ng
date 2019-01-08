import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = { buttons: [33, 28, -42, -7], bars: [82, 74], limit: 160 };
  size = 0;
  isActive = false;
  barId = 0;
  barClass = "progress-bar progress-bar-striped progress-bar-animated";

  onClick(num) {
    this.data.bars[this.barId] += num;
    if (this.data.bars[this.barId] < 0) {
      this.data.bars[this.barId] = 0;
    }
    if (this.data.bars[this.barId] >= this.data.limit) {
      this.barClass = "progress-bar progress-bar-striped progress-bar-animated";
    }

    if (this.data.bars[this.barId] < this.data.limit) {
      this.barClass = "progress-bar progress-bar-striped progress-bar-animated";
    }
  }

  selectBar(id) {
    this.barId = id;
  }
}
