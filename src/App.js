import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Happy Face",
  "👈": "attract intention towards left",
  "👉": "attract intention towards right",
  "☝": "pointing upwards",
  "😱": "Shocked",
  "👆": "I m available",
  "👇": "pointing downwards",
  "👻 ": "ghost",
  "✌": "victory",
  "😭": "Crying Face",
  "🤞": "wishing good luck",
  "🖖": "live long",
  "🤙": "call me",
  "🖐": "stop",
  "🤒 ": "Sick face",
  "👌": "looking good",
  "👍": "thumbs up",
  "👎": "thumbs down",
  "🤬": "Angry"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Emoji meaning are shown here!");
  var [emoji, setEmoji] = useState("");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("this emoji is not available in our database");
    }
  }
  function clickEmojiHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter your emojis here"
      ></input>
      <div className="emoji-output">{emoji}</div>
      <div className="meaning">{meaning}</div>
      <h2>Emogis we know</h2>
      <div>
        {emojiList.map((emoji) => {
          return (
            <span onClick={() => clickEmojiHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
