import React from 'react';

const errorHandlerEmail = (email) => {
  if (email === '') {
    return <div id="email-error-empty">Email can't be empty!</div>;
  } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return (
      <div id="email-error-invalid">
        That doesn't look like an email to me. :/
      </div>
    );
  } else {
    return (
      <div id="email-error-ok">That is a what I call a good email address.</div>
    );
  }
};

export default errorHandlerEmail;
