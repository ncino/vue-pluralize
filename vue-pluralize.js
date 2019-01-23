
module.exports = {
  install(Vue, options) {
    const pluralize = options && options.pluralize ? options.pluralize : require('pluralize');

    Object.defineProperties(Vue.prototype, {
      $pluralize: {
        get() {
          return pluralize;
        },
      },
    });

    Vue.pluralize = pluralize;

    Vue.filter('pluralize', (...args) => pluralize(...args));
  },
};
