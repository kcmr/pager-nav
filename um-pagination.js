(function() {

  'use strict';

  Polymer({

    is: 'um-pagination',

    properties: {
      /**
       * Previous URL.
       */
      previousUrl: {
        type: String,
        value: ''
      },

      /**
       * Text for the previous button.
       */
      previousText: {
        type: String,
        value: ''
      },

      /**
       * Next URL.
       */
      nextUrl: {
        type: String,
        value: ''
      },

      /**
       * Text for the next button.
       */
      nextText: {
        type: String,
        value: ''
      }
    },

    _onTap: function(e) {
      this.fire('pagination-click', {
        url: e.currentTarget.dataset.url,
        item: e.currentTarget.dataset.btn
      });
    }
  });

}());
