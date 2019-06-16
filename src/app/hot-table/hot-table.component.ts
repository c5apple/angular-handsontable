import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HotTableRegisterer } from '@handsontable/angular';

const ipValidatorRegexp = /^(?:\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b|null)$/;
const emailValidator = function (value, callback) {
  setTimeout(function () {
    if (/.+@.+/.test(value)) {
      callback(true);
    }
    else {
      callback(false);
    }
  }, 1000);
};

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
    columns: [
      { data: 'id', title: 'ID', type: 'numeric' },
      { data: 'name.first', title: 'First name' },
      { data: 'name.last', title: 'Last name' },
      { data: 'ip', title: 'IP', validator: ipValidatorRegexp, allowInvalid: true },
      { data: 'email', title: 'E-mail', validator: emailValidator, allowInvalid: false }
    ],
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
    fillHandle: true, // possible values: true, false, "horizontal", "vertical"
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
