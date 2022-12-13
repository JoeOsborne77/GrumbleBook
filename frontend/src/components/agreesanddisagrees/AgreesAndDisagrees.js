import './AgreesAndDisagrees.css';

const AgreesAndDisagrees = ({ post_id, fetchPosts }) => {
  const token = window.localStorage.getItem('token');

  const addAgree = () => {
    let agreeOrDisagree = 'agree';
    fetch('/posts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        _id: post_id,
        agree_or_disagree: agreeOrDisagree,
      }),
    }).then((responseJSON) => {
      if (responseJSON.status !== 204) {
        console.log(responseJSON);
        console.log('There has been an error on the patch request');
      } else {
        fetchPosts();
      }
    });
  };

  const addDisagree = () => {
    let agreeOrDisagree = 'disagree';
    let responseDisagree = fetch('/posts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        _id: post_id,
        agree_or_disagree: agreeOrDisagree,
      }),
    }).then((responseJSON) => {
      if (responseJSON.status !== 204) {
        console.log(responseJSON);
        console.log('There has been an error on the patch request');
      } else {
        fetchPosts();
      }
    });
  };

  return (
    <>
      <div id="agree-disagree-buttons">
        <button
          onClick={addAgree}
          className="agree-button"
          type="submit"
          value="Agree"
        >
          {' '}
          👍🏽 Agree
        </button>

        <button
          onClick={addDisagree}
          className="disagree-button"
          type="submit"
          value="Disagree"
        >
          {' '}
          👎🏽 Disagree
        </button>
      </div>
    </>
  );
};

export default AgreesAndDisagrees;
