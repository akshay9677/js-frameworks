<script>
  import emoji from "node-emoji";
  import { onMount } from "svelte";
  import EmojiResult from "./components/EmojiResult.svelte";

  let randomEmoji = {};
  let searchText = "";
  let emojiList = [];
  onMount(() => {
    randomEmoji = emoji.random();
  });
  function searchTextChange() {
    let emojiSearch = searchText.toLowerCase();
    if (searchText !== "") {
      emojiList = emoji.search(emojiSearch);
    } else {
      emojiList = [];
    }
  }
</script>

<div class="App">
  <h1>Emoji Search App {randomEmoji.emoji}</h1>
  <div class="search-container">
    <input
      placeholder="Enter a emoji name to search"
      bind:value={searchText}
      on:input={searchTextChange}
    />
    <EmojiResult bind:emojiList />
  </div>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .App {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    height: 40px;
    font-size: 20px;
    width: 100%;
    padding-left: 10px;
  }

  .search-container {
    margin-top: 1rem;
    padding: 10px 30px 10px 10px;
  }
</style>
