'use strict';

module.exports = {
  install: function install(Vue, options) {
    var pluralize = options && options.pluralize ? options.pluralize : require('pluralize');

    Object.defineProperties(Vue.prototype, {
      $pluralize: {
        get: function get() {
          return pluralize;
        }
      }
    });

    Vue.pluralize = pluralize;

    Vue.filter('pluralize', function () {
      return pluralize.apply(undefined, arguments);
    });
  }
};
