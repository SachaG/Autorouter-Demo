Posts = new Meteor.Collection("posts");

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (!Posts.find().count()) {
      for (var i = 0; i <=10; i++) {
        Posts.insert({
          title: Fake.sentence(5),
          body: Fake.sentence(20)
        });
      }
    }
  });
}
