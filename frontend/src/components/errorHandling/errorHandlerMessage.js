import React from 'react';

const errorHandlerMessage = (message) => {
  if (message === '') {
    return (
      <div id="message-error-empty">
        You need to type something if you want to grumble.
      </div>
    );
  } else if (!message.match(/^[a-zA-Z0-9~!@#()`;\-':,.?| ]*$/)) {
    return (
      <b>
        <div id="message-error-invalid">
          You have introduced some invalid special characters; better luck next
          time!
        </div>
      </b>
    );
  } else {
    return (
      <b>
        <div id="message-error-ok">That looks perfect!</div>
      </b>
    );
  }
};
export default errorHandlerMessage;
