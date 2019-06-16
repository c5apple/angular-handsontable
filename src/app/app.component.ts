import { Component } from '@angular/core';
import 'handsontable/languages/ja-JP';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  id = 'my-custom-id';
  data: any[] = [];

  language = 'en-US';
  languages: Handsontable.I18n.LanguageDictionary[] = [
    { languageCode: 'en-US' },
    { languageCode: 'ja-JP' }
  ];

  showHotData() {
    console.log(this.data);
  }

  swapHotData() {
    this.data = [
      { id: 1, 'name.first': 'Ted', 'name.last': 'Right', ip: '0.0.0.1', email: 'Ted.Right@ex.com', address: 'Wall Street' },
      { id: 2, 'name.first': 'Frank', 'name.last': 'Honest', ip: '0.0.0.1', email: 'Frank.Honest@ex.com', address: 'Pennsylvania Avenue' },
      { id: 3, 'name.first': 'Joan', 'name.last': 'Well', ip: '0.0.0.1', email: 'Joan.Well@ex.com', address: 'Broadway' },
      { id: 4, 'name.first': 'Gail', 'name.last': 'Polite', ip: '0.0.0.1', email: 'Gail.Polite@ex.com', address: 'Bourbon Street' },
      { id: 5, 'name.first': 'Michael', 'name.last': 'Fair', ip: '0.0.0.1', email: 'Michael.Fair@ex.com', address: 'Lombard Street' },
      { id: 6, 'name.first': 'Mia', 'name.last': 'Fair', ip: '0.0.0.1', email: 'Mia.Fair@ex.com', address: 'Rodeo Drive' },
      { id: 7, 'name.first': 'Cora', 'name.last': 'Fair', ip: '0.0.0.1', email: 'Cora.Fair@ex.com', address: 'Sunset Boulevard' },
      { id: 8, 'name.first': 'Jack', 'name.last': 'Right', ip: '0.0.0.1', email: 'Jack.Right@ex.com', address: 'Michigan Avenue' },
    ];
  }
}
