var mongoose = require('mongoose');

require('../mongodb_helper');
jest.mock();

var Comment = require('../../models/comment');

describe('Comment model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.comments.drop(() => {
      done();
    });
  });

  it('has a message', () => {
    var comment = new Comment({ message: 'some message' });
    expect(comment.message).toEqual('some message');
  });
})

it('can save a comment', (done) => {
  var comment = new Comment({ message: 'some message' });

  comment.save((err) => {
    expect(err).toBeNull();

    Comment.find((err, posts) => {
      expect(err).toBeNull();

      expect(posts[0]).toMatchObject({ message: 'some message' });
      done();
    });
  });
});


//   it('post has a timestamp', () => {
//     const currentDate = new Date('2022-05-14T11:01:58.135Z');
//     var post = new Post({ timestamp: currentDate });
//     expect(post.timestamp).toEqual(currentDate);
//   });

//   it("doesn't save a post if it contains invalid characters", (done) => {
//     var post = new Post({ message: 'some<> message' });

//     post.save((err) => {
//       expect(err).not.toBeNull();

//       Post.find((err, posts) => {
//         expect(err).toBeNull();

//         expect(posts.length).toBe(0);
//         done();
//       });
//     });
//   });
// });
