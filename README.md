# &lt;um-pagination&gt;

`<um-pagination>` is a custom element that displays typical previous and next buttons in a pagination.
If `previous-url` attribute or `next-url` attribute is ommitted, the corresponding button is disabled.
The buttons can contain text or an icon (an iconset is required) or both. The button text can be hidden visually (not for screen readers) by adding the `hide-button-text` attribute.
By default, clicking a button doesn't navigate. You can override this behavior by adding the `navigate` attribute.

Example:

```html
<um-pagination
  previous-text="Go to previous page"
  next-text="Go to next page"
  next-url="#/next"
  previous-url="#/previous"
  navigate
  hide-button-text>
</um-pagination>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --um-pagination  | Mixin applied to :host     | {} |
| --um-pagination-button  | Mixin applied to the buttons    | {} |
| --um-pagination-button-prev  | Mixin applied to the previous button    | {} |
| --um-pagination-button-next  | Mixin applied to the next button    | {} |
