var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
});
NoteSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Note', NoteSchema);
