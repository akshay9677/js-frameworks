<template>
  <div>
    <div
      v-for="emoji in emojiResult"
      :key="emoji.key"
      class="emoji-result-container"
    >
      <div class="emoji-section">{{ emoji.emoji }}</div>
      <div class="emoji-text">{{ getFormattedText(emoji.key) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["emojiResult"],
  methods: {
    getFormattedText(str) {
      str = str.split("_").join(" ");
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.emoji-result-container {
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-bottom: solid 1px #ccc;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

.emoji-section {
  font-size: 30px;
}

.emoji-text {
  font-size: 16px;
  margin-left: 10px;
}
</style>
