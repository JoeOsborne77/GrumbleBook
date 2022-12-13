import React, { useState, useEffect } from 'react';
import './NewComment.css';

const NewComment = ({ post_id, fetchComments }) => {
  const token = window.localStorage.getItem('token');
  const [message, setMessage] = useState('');

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    if (message === '') return;
    let response = await fetch('/comments', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: message, post_id: post_id }),
    });
    if (response.status !== 201) {
      console.log('fail');
    } else {
      let data = await response.json();
      window.localStorage.setItem('token', data.token);
      setMessage('');
      fetchComments();
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <form id="submit-comment-form" onSubmit={handleSubmitComment}>
        {/* <label id="comment-label">
          Feedback:
        </label> */}
        <textarea
          placeholder="Give feedback on this post"
          className="comments"
          id="message"
          value={message}
          onChange={handleMessageChange}
        />
        <div id="comment-button-container">
          <input
            class="comment-button"
            id="submit"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};
export default NewComment;
