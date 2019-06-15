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
      { id: 1, name: 'Ted Right', address: 'Wall Street' },
      { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
      { id: 3, name: 'Joan Well', address: 'Broadway' },
      { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
      { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
      { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
      { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
      { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    ];
  }
}
