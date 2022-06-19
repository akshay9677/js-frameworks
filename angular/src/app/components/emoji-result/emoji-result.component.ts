import { Component, OnInit,Input } from '@angular/core';
import EmojiInterface from "../../Emoji"

@Component({
  selector: 'app-emoji-result',
  templateUrl: './emoji-result.component.html',
  styleUrls: ['./emoji-result.component.css']
})
export class EmojiResultComponent implements OnInit {
  @Input() emojiList:Array<EmojiInterface> = []

  constructor() { }

  ngOnInit(): void {
  }

  
  getFormattedText(str:String) {
    str = str.split("_").join(" ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
