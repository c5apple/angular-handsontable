import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-hot-table',
  templateUrl: './hot-table.component.html',
  styleUrls: ['./hot-table.component.scss']
})
export class HotTableComponent implements OnInit, OnChanges {

  private hotRegisterer = new HotTableRegisterer();

  @Input() id: string;

  @Input() language: string;

  @Input() data: any[] = [];

  hotSettings: Handsontable.GridSettings = {
    data: [],
    height: 320,
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    columnSorting: true,
    contextMenu: {
      items: {
        'row_above': {
          name: 'Insert row above this one (custom name)'
        },
        'row_below': {},
        'clear_custom': {
          name: 'Clear all cells (custom)',
          callback: function () {
            this.clear();
          }
        }
      }
    } as Handsontable.contextMenu.Settings,
    manualColumnResize: true,
    manualRowResize: true
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.swapHotData();
    }
  }

  swapHotData() {
    const hot = this.hotRegisterer.getInstance(this.id);
    if (hot) {
      hot.loadData(this.data);
    }
  }
}
