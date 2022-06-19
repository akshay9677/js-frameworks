import "./App.css"
import emoji from "node-emoji";
import {createSignal,onMount} from "solid-js"
import EmojiResult from "./components/EmojiResult";


function App() {
  const [search, setSearch] = createSignal("");
  const [emojiList, setEmojiList] = createSignal([]);
  const [randomEmoji, setRandomEmoji] = createSignal({});

  onMount(() => {
    setRandomEmoji(emoji.random());
  });
  
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
      <h1>Emoji Search App {randomEmoji().emoji}</h1>
      <div className="search-container">
        <input
          placeholder="Enter a emoji name to search"
          value={search()}
          onInput={onSearchTextChange}
        />
        <EmojiResult emojiList={emojiList} />
      </div>
    </div>
  );
}

export default App;
