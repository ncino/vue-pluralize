import Vue from 'vue/dist/vue';
import VuePluralize from '../vue-pluralize';
import pluralize from 'pluralize'

Vue.use(VuePluralize);

const text = 'item';

const vm = new Vue({
  template: '<div>{{ text | pluralize(...args) }}</div>',
  data() {
    return {
      text,
      args: [
        1,
      ],
    };
  },
}).$mount();

describe('VuePluralize', () => {
  describe('installing plugin', () => {
    it('loads prototype', () => {
      expect(typeof vm.$pluralize).toEqual('function');
    });

    it('prototype works', () => {
      expect(vm.$pluralize(text, 2)).toEqual('items');
    });
  });

  describe('using filter', () => {
    it('formats singular', () => {
      expect(vm.$el.textContent).toContain(pluralize(text, 1));
    });
  });

  describe('handle inputs', () => {
    beforeEach(() => {
      global.console.warn = jest.fn();
    });

    it('handles singular', (done) => {
      vm.text = 'item';
      vm.args = [1];
      vm.$nextTick(() => {
        expect(console.warn).not.toBeCalled();
        expect(vm.$el.textContent).toContain('item');
        done();
      });
    });

    it('handles plural', (done) => {
      vm.text = 'item';
      vm.args = [2];
      vm.$nextTick(() => {
        expect(console.warn).not.toBeCalled();
        expect(vm.$el.textContent).toContain('items');
        done();
      });
    });

    it('handles plural with count', (done) => {
      vm.text = 'item';
      vm.args = [2, true];
      vm.$nextTick(() => {
        expect(console.warn).not.toBeCalled();
        expect(vm.$el.textContent).toContain('2 items');
        done();
      });
    });
  });
});
