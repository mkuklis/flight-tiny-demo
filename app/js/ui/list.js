'use strict';

define(

  [
    'component'
  ],

  function (defineComponent) {

    return defineComponent(list);

    function list() {

      this.renderItem = function (e, data) {
        this.$node.append('<li>' + data.data + '</li>');
      }

      this.after('initialize', function () {

        // incoming events from other components
        this.on(document, 'uiBoxSubmit', this.renderItem);

      });
    }
  }
);
