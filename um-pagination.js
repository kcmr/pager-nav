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
        value: null
      },

      /**
       * Next URL.
       */
      nextUrl: {
        type: String,
        value: null
      },

      /**
       * Text for the previous button.
       */
      previousText: {
        type: String,
        value: 'Previous'
      },

      /**
       * Text for the next button.
       */
      nextText: {
        type: String,
        value: 'Next'
      },

      /**
       * Icon ID for the previous button.
       */
      previousIcon: String,

      /**
       * Icon ID for the next button.
       */
      nextIcon: String,

      /**
       * Size (width and height) for the previous and next icons.
       */
      iconSize: {
        type: Number,
        value: 24
      },

      /**
       * Hide button text (not icon) visually but keep it readable for screen readers.
       */
      hideButtonText: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to navigate to nextUrl or previousUrl when the user clicks a button.
       */
      navigate: {
        type: Boolean,
        value: false
      },

      _btnTextClass: {
        type: String,
        computed: '_computeBtnTextClass(hideButtonText)'
      }
    },

    _onTap: function(e) {
      this.fire('pagination-click', {
        url: e.currentTarget.dataset.url,
        item: e.currentTarget.dataset.btn
      });

      if (this.navigate) {
        document.location.href = e.currentTarget.dataset.url;
      }
    },

    _computeDisabled: function(url) {
      return url ? false : true;
    },

    _computeBtnTextClass: function(hideButtonText) {
      return hideButtonText ? 'sr-only' : '';
    }
  });

}());
