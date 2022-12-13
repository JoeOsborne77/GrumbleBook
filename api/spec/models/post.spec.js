var mongoose = require('mongoose');

require('../mongodb_helper');
jest.mock();

var Post = require('../../models/post');

describe('Post model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it('has a message', () => {
    var post = new Post({ message: 'some message' });
    expect(post.message).toEqual('some message');
  });

  it('can list all posts', (done) => {
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    });
  });

  it('can save a post', (done) => {
    var post = new Post({ message: 'some message' });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: 'some message' });
        done();
      });
    });
  });

  // it('post can include an image', () => {
  //   const img = jest.mock('../../../assets/images/apples.png');
  //   var post = new Post({ image: img });
  //   expect(post.image).toEqual(img);
  // });

  it("doesn't save a post if it contains invalid characters", (done) => {
    var post = new Post({ message: 'some<> message' });

    post.save((err) => {
      expect(err).not.toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts.length).toBe(0);
        done();
      });
    });
  });
});
