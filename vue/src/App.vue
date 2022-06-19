<script>
import emoji from "node-emoji";
import EmojiResult from "./components/EmojiResult.vue";
export default {
  components: { EmojiResult },
  data() {
    return {
      searchText: "",
      emojiList: [],
      randomEmoji: {},
    };
  },
  created() {
    this.randomEmoji = emoji.random();
  },
  methods: {
    searchTextChange() {
      let { searchText } = this || {};
      let emojiSearch = searchText.toLowerCase();
      if (searchText !== "") {
        this.emojiList = emoji.search(emojiSearch);
      } else {
        this.emojiList = [];
      }
    },
  },
};
</script>

<template>
  <div class="App">
    <h1>Emoji Search App {{ randomEmoji.emoji }}</h1>
    <div class="search-container">
      <input
        placeholder="Enter a emoji name to search"
        v-model="searchText"
        @input="searchTextChange"
      />
      <EmojiResult :emojiResult="emojiList" />
    </div>
  </div>
</template>

<style scoped>
@import "./assets/base.css";
.App {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
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
