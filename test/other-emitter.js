var EventEmitter = require('../index').EventEmitter;
var emitter = new EventEmitter({
  foreignOnly: true
});

try {
  emitter.emit('process', 'message');
} catch(e) {
  console.error(e);
}