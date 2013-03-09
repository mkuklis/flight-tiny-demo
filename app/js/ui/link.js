'use strict';

define(

  [
    'component'
  ],

  function (defineComponent) {

    return defineComponent(link);

    function link() {

      this.handleClick = function (e) {
        this.trigger('uiLinkClicked');
        e.preventDefault();
      }

      this.after('initialize', function () {
        this.on('click', this.handleClick);
      });
    }
  }
);
