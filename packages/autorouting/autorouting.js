Router.route('/', function () {
  this.render('main', {
    data: function () {
      return {foo: "bar"}
      return Posts.findOne({_id: this.params._id});
    }
  });
});