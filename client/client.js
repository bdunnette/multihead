Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('about'); // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/', //overrides the default '/home'
  });
  this.route('slides', {
    data: function () {
      return Slides.find()
    } //set template data context
  });
  this.route('slide', {
    path: '/article/:_id',
    data: function () {
      return Slides.findOne({
        _id: this.params._id
      })
    },
    template: 'slideView'
  });
});