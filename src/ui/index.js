const renderer = require('./jsx-renderer.cjs')(window);
const machine = require('./machine');
require('./machine.css');

module.exports = function(rootEl) { 
  rootEl.appendChild(machine(renderer));
  return {
    update: function(state) {
      // state should be a data structure that represents the ui state
    }
  }
}
