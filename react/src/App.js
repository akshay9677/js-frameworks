import "./App.css";
import emoji from "node-emoji";
import { useEffect, useState } from "react";
import EmojiResult from "./components/EmojiResult";

function App() {
  const [search, setSearch] = useState("");
  const [emojiList, setEmojiList] = useState([]);
  const [randomEmoji, setRandomEmoji] = useState({});

  useEffect(() => {
    setRandomEmoji(emoji.random());
  }, []);
  const onSearchTextChange = (newValue) => {
    let searchValue = newValue.target.value;
    let emojiSearch = searchValue.toLowerCase();
    setSearch(searchValue);
    if (searchValue !== "") {
      setEmojiList(emoji.search(emojiSearch));
    } else {
      setEmojiList([]);
    }
  };
  return (
    <div className="App">
      <h1>Emoji Search App {randomEmoji.emoji}</h1>
      <div className="search-container">
        <input
          placeholder="Enter a emoji name to search"
          value={search}
          onInput={onSearchTextChange}
        />
        <EmojiResult emojiList={emojiList} />
      </div>
    </div>
  );
}

export default App;
