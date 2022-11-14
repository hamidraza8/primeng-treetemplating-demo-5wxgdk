import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  grid: number[][];
  grid_cols_n: number;
  grid_rows_n: number;

  setGridSize(cols_n, rows_n) {
    this.grid_cols_n = cols_n;
    this.grid_rows_n = rows_n;
  }
  constructor() {}

  ngOnInit() {}

  bindGrid() {}
}
