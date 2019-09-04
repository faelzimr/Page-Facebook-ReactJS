import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <li>
      <img src={comment.author.avatar} alt={comment.author.name}/>
      <div className="comment">
        <p><strong>{comment.author.name}</strong> {comment.content}</p>
      </div>
    </li>
  );
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};