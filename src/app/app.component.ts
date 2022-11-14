import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  grid: any[][];
  grid_cols_n: number;
  grid_rows_n: number;
  isMouseDown = false;
  setGridSize(cols_n, rows_n) {
    this.grid_cols_n = cols_n;
    this.grid_rows_n = rows_n;
  }
  constructor() {
    this.bindGrid();
  }

  ngOnInit() {}
  setMouseDown(mouseDown, id) {
    this.fillBlock(id);
    this.isMouseDown = mouseDown;
  }
  fillBlock(id) {
    if (this.isMouseDown) {
      var element = document.getElementById(id);
      if (element != undefined) {
        console.log(id);
        element.style.backgroundColor = 'red';
      }
    }
  }
  bindGrid() {
    this.setGridSize(30, 30);
    this.grid = [[]];
    for (var y = 0; y < this.grid_rows_n; y++) {
      this.grid.push([]);
      for (var x = 0; x < this.grid_cols_n; x++) {
        this.grid[y].push([y, x]);
      }
    }
  }
}
