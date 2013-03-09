'use strict';

define(

  [
    'component'
  ],

  function (defineComponent) {

    return defineComponent(box);

    function box() {

      var ENTER_KEY = 13;

      this.toggle = function () {
        this.$node.toggle();
      }

      this.sumbitOnEnter = function (e) {
        if (e.which === ENTER_KEY) {
          this.trigger('uiBoxSubmit', { data: this.$node.val() });
          this.$node.val('');
        }
      }

      this.after('initialize', function () {

        // incoming events from other components
        this.on(document, 'uiLinkClicked', this.toggle);

        // handlers
        this.on('keyup', this.sumbitOnEnter);
      });
    }
  }
);
