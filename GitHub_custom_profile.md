- [GitHub Readme Streak Stats](https://github-readme-streak-stats.herokuapp.com/demo/)

### SVG Custom GitHub

Create a file.sgv

```html
<svg
  fill="none"
  viewBox="0 0 600 300"
  width="600"
  height="300"
  xmlns="http://www.w3.org/2000/svg"
>
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        .container {
          color: red;
        }
      </style>

      <div class="container">
        <p>Hello</p>
      </div>
    </div>
  </foreignObject>
</svg>
```

Render SVG inside GitHub README

To show an SVG image in full width of a README on GitHub, you can render it like so:

```html
<div style="width: 100%;">
  <img src="animated.svg" style="width: 100%;" alt="Click to see the source" />
</div>
```

- [REF](https://pragmaticpineapple.com/adding-custom-html-and-css-to-github-readme/)
