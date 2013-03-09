'use strict';

define(

  [
    './ui/Link',
    './ui/box',
    './ui/list'
  ],

  function (LinkUI, BoxUI, ListUI) {

    var initialize = function () {
      LinkUI.attachTo('#link');
      BoxUI.attachTo('#box');
      ListUI.attachTo('#list');
    }

    return {
      initialize: initialize
    };
  }
);
