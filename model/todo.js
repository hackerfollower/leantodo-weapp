const AV = require('../utils/av-live-query-core-min');

class Todo extends AV.Object {
  get done() {
    return this.get('done');
  }
  set done(value) {
    this.set('done', value);
  }

  get content() {
    return this.get('content');
  }
  set content(value) {
    this.set('content', value);
  }

  // get updatedAt() {
  //   return this.get('updatedAt');
  // }
  // set updatedAt(value) {
  //   this.set('updatedAt', value);
  // }
}

AV.Object.register(Todo, 'Todo');
module.exports = Todo;