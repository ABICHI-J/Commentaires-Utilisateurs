import React from 'react';
import "../styles/Comment.css";

const Comment = ({ name, country, image, post, company, comment }) => {
  const formattedComment = comment.replace(/_(.*?)_/g, '<strong>$1</strong>');

  return (
    <div className="container-comment">
      <img
        className="img-comment"
        src={require(`../img/comment-${image}.png`)}
        alt={`Photo ${image}`}
      />
      <div className="container-text-comment">
        <p className="name-comment">
          <strong>{name}</strong> en {country}
        </p>
        <p className="post-comment">
          {post} en <strong>{company}</strong>
        </p>
        <p className="text-comment" dangerouslySetInnerHTML={{ __html: formattedComment }}></p>
      </div>
    </div>
  );
};

export default Comment;
