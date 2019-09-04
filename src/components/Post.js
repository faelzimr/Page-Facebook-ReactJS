import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default function Post( { post }) {
  return (
    <>
      <li>
            <div className="profile">
              <img src={post.author.avatar} alt={post.author.name}/>
              <div className="info">
                <strong>{post.author.name}</strong>
                <span>{post.date}</span>
              </div>
            </div>
            <p>{post.content}</p>
            <ul>
              { post.comments.map(comment => <Comment key={String(comment.id)} comment={comment}/> ) }              
            </ul>
          </li>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};