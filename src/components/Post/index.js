import PropTypes from "prop-types";
import React, { useState } from "react";
import Comment from "../Comment";
import "./styles.css";

export default function Post({ data }) {
  const [comment, setComment] = useState("");

  const { author, date, content } = data;

  function handleSubmit(event) {
    event.preventDefault(); //evita que atualize a tela
    localStorage.setItem("comentario", comment);
    setComment("");
  }

  function handleTextareaChange(event) {
    //console.log(event.target.value);
    setComment(event.target.value);
  }

  return (
    <>
      <div className="post">
        <div className="post_header">
          <img src={author.avatar} />
          <div id="info">
            <p>{author.name}</p>
            <span>{date}</span>
          </div>
        </div>
        <div className="post_content">{content}</div>
        <div className="to_comment">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE7Hiwojo4jdQ/profile-displayphoto-shrink_100_100/0?e=1589414400&v=beta&t=-NNeYG0tpfXpV6c1BWyg883M5HWnlxuPJfaMZLHRxYE" />
          <form onSubmit={handleSubmit}>
            <textarea
              id="msg"
              placeholder="Comente aqui ..."
              onChange={handleTextareaChange}
              value={comment}
            />
            <button type="submit" id="submit_comment">
              Publicar
            </button>
          </form>
        </div>
        <div className="post_comments">
          {data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    </>
  );
}

Post.defaultProps = {
  data: {
    msg: "nenhum post"
  }
};

Post.propTypes = {
  data: PropTypes.object
};
