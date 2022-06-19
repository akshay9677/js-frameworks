import { Component } from '@angular/core';
// @ts-ignore
import emoji from "node-emoji"
import EmojiTs from "./Emoji"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'angular-app';
  randomEmoji:EmojiTs
  searchText:String = ''
  emojiList:Array<EmojiTs> = []
  constructor() {
    this.randomEmoji = (emoji.random())
   }
   searchTextChange(){
    let { searchText } = this || {};
    let emojiSearch = searchText.toLowerCase();
    if (searchText !== "") {
      this.emojiList = emoji.search(emojiSearch);
    } else {
      this.emojiList = [];
    }
    console.log(this.emojiList)
   }
}
