# &lt;pager-nav&gt;

`<pager-nav>` is a custom element that displays typical previous and next buttons in a pagination.
If `previous-url` attribute or `next-url` attribute is ommitted, the corresponding button is disabled.
The buttons can contain text or an icon (an iconset is required) or both. The button text can be hidden visually (not for screen readers) by adding the `hide-button-text` attribute.
By default, clicking a button doesn't navigate. You can override this behavior by adding the `navigate` attribute.

Additional content, as a numerical navigation, can be placed inside the element.

Example:

```html
<pager-nav
  previous-text="Go to previous page"
  next-text="Go to next page"
  next-url="#/next"
  previous-url="#/previous"
  navigate
  hide-button-text>
</pager-nav>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --pager-nav  | Mixin applied to :host     | {} |
| --pager-nav-button  | Mixin applied to the buttons    | {} |
| --pager-nav-button-prev  | Mixin applied to the previous button    | {} |
| --pager-nav-button-next  | Mixin applied to the next button    | {} |
| --pager-nav-icon-prev  | Mixin applied to the previous icon    | {} |
| --pager-nav-icon-next  | Mixin applied to the next icon    | {} |
| --pager-nav-button-text  | Mixin applied to the button text    | {} |
| --pager-nav-icon-text-margin  | Space between icon and text    | 0.4em |
