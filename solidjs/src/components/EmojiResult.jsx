
const EmojiResult = ({ emojiList }) => {
  const getFormattedText = (str) => {
    str = str.split("_").join(" ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      {emojiList().map((emoji) => {
        return (
          <div className="emoji-result-container" key={emoji.key}>
            <div className="emoji-section">{emoji.emoji}</div>
            <div className="emoji-text">{getFormattedText(emoji.key)}</div>
          </div>
        );
      })}
    </>
  );
};

export default EmojiResult;
