import { useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="content">
      <textarea
        className="text-area"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text..."
      />
      <button className="button" onClick={handleButtonClick}>
        Display Text
      </button>
      {displayedText && (
        <p className="displayed-text">Your Text: {displayedText}</p>
      )}
    </div>
  );
};

export default Content;
