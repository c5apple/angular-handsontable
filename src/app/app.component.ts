import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';
import 'handsontable/languages/ja-JP';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private hotRegisterer = new HotTableRegisterer();

  id = 'my-custom-id';

  hotSettings: Handsontable.GridSettings = {
    data: [],
    startRows: 5,
    startCols: 5,
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
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
    } as Handsontable.contextMenu.Settings
  };

  language = 'en-US';
  languages: Handsontable.I18n.LanguageDictionary[] = [
    { languageCode: 'en-US' },
    { languageCode: 'ja-JP' }
  ];

  showHotData() {
    console.log(this.hotRegisterer.getInstance(this.id).getData());
  }

  swapHotData() {
    this.hotRegisterer.getInstance(this.id).loadData([
      { id: 1, name: 'Ted Right', address: 'Wall Street' },
      { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
      { id: 3, name: 'Joan Well', address: 'Broadway' },
      { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
      { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
      { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
      { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
      { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    ]);
  }
}
