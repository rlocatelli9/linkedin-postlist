import React from "react";
import "./styles.css";

export default function Comment({ data }) {
  const { author, date, content } = data;
  return (
    <>
      <div id="info_comment">
        <img src={author.avatar} />
        <div id="comment">
          <p id="author">{author.name}</p>
          <span id="date">{date}</span>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
