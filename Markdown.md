<h1 align="center"> Markdown Guide</h1>
By: gmapdev

> A little guide to this text use a simple `>my text`




[Recommened read Reference syntax](https://www.markdownguide.org/basic-syntax/)

# :heavy_check_mark: Menu e.g section Heading IDs  

- <a href="#images">Images</a>
- [Header-auto-id](#header-auto-id)
- [Header custom Id](#custom-id)
- [Font Styles and Lists](#styles)
- [Codes](#codes)
- [syntax-highlighting](#syntax-highlighting)
- [Make Links](#make-links) (only local)
- [mark](#mark_text)
- [mark](#installing)
- [HTMLTags](#htmltags)
- <a href="https://www.markdownguide.org/extended-syntax/#:~:text=The%20basic%20Markdown%20syntax%20allows,and%20after%20the%20code%20block.">\_Task Lists</a>

# How Editor and browser preview

_Free Editor can be VS Code, Sublime and etc..._  
For browser preview install a extension [Chrome and EDGE](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk)

# header-auto-id

Todo header com # já se torna um id, dispensando o uso adicionais de names e ids.

# Head Custom

<a name="installing">html by name</a>
<a id="custom-id">html by id</a>

[ref](https://www.markdownguide.org/extended-syntax/#heading-ids)

HTML id: `<h2 id="custom-id">Header custom </h2>`
<br>
<br>
markdown: `My Great Heading{#custom-id}`

HTML name: `<a name="installing"></a>`

# Checkbox 
- [x] Earth (Orbit/Moon)
- [ ] -Earth (Orbit/Moon)

# Paragraph and break line

no space in left, to break just add **two or more spaces**

# Make links

#### [REF](https://www.markdownguide.org/extended-syntax/#:~:text=The%20basic%20Markdown%20syntax%20allows,and%20after%20the%20code%20block.)

| Markdown                      | html                                      |
| ----------------------------- | ----------------------------------------- |
| `[Heading IDs](#heading-ids)` | `<a href="#heading-ids">Heading IDs</a> ` |

# Mark Text

<a name="mark_text"></a>
`<mark style="background-color: lightblue">lolas</mark>`
<mark>Hello</mark>

# List

- Variveis

  - var, let e const
  - Destruction
    - Array e Objetos
      - [link](http://linkhere.com)

- Array, Objeto

  - Métodos -`.map`, `.filter`, `.reduce`

- <a id="styles">Font Styles</a>

  - Bold **text** `**text**`
  - Italic _text_
  - Strong **strong**
  - Bold and Italic**_text_**
  - Bold and Italic best practices
    - do it \*\*\*text

- My List
  - supermarket
    - Buy steak

# Codes

- ### how to
  ### block codes
  `add triple backticks before and after code ` ```
  ### example CSS
  ```css
  body {
    background: red;
  }
  ```
  ### example command:
  ```shell
  sudo apt-get update
  ```

#### Blockcode with space

##### add 4 spaces or 1 tab, not support add `-` before title

    apt-get install apache2

# Syntax Highlighting

    js, json

`add <lang> after first backticks` ```

```js
const response = await fetch(url);
const data = await response.json();
console.log(data);
```

# Images

```html
<img src="link" alt="new branche" style="zoom:30%;" />
```

    ![node img](assets/nodecmd.jpg)

# HTMLTags:

- del
- ins
