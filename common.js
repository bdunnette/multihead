Slides = new Meteor.Collection("slides", {
  schema: {
    title: {
      type: String,
      label: "Title",
      max: 200
    },
    author: {
      type: String,
      label: "Author"
    },
    addDate: {
      type: Date,
      optional: true
    },
    url: {
      type: String
    },
    maxZoom: {
      type: String
    }
  }
});