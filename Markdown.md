<h1 align="center"> Markdown Guide</h1>
By: GeralDev

> A little guide to this text use a simple `>my text`

[Recommened read Reference syntax](https://www.markdownguide.org/basic-syntax/)


# Menu e.g section Heading IDs 

- <a href="#images">Images</a>
-[Head Id](#custom-id)
-[Font Styles and Lists](#styles)
-[Codes](#codes)
-[syntax-highlighting](#syntax-highlighting)
-[Make Links](#make-links)
- <a href="https://www.markdownguide.org/extended-syntax/#:~:text=The%20basic%20Markdown%20syntax%20allows,and%20after%20the%20code%20block.">_Task Lists</a>


# How Editor and browser preview
*Free Editor can be VS Code, Sublime and etc...*  
For browser preview install a extension [Chrome and EDGE](https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk)  



# Head Custom 
<a id="custom-id">Head custom by html</a>
[ref](https://www.markdownguide.org/extended-syntax/#heading-ids) 

html: &lt;h2 id="custom-id">Header custom id&lt;/h2>  <br>
 markdown: 
My Great Heading{#custom-id}  

# Paragraph and break line
no space in left, to break just add **two or more spaces**

# Make links

#### [REF](https://www.markdownguide.org/extended-syntax/#:~:text=The%20basic%20Markdown%20syntax%20allows,and%20after%20the%20code%20block.)
| Markdown | html  |
|--- | -----    |
| ```[Heading IDs](#heading-ids)```  | ```<a href="#heading-ids">Heading IDs</a> ```  |




# List
- Variveis
    - var, let e const
    - Destruction
        - Array e Objetos
            - [link](http://linkhere.com)


- Array, Objeto
    - Métodos
        -`.map`, `.filter`, `.reduce`

- <a id="styles">Font Styles</a>

    - Bold **text** `**text**`
    - Italic *text*
    - Strong __strong__
    - Bold and Italic***text***
    - Bold and Italic best practices
        - do it ***text

- My List
    - supermarket
        - Buy steak
            

# Codes
- ### how to
    ### block codes
    ```add triple backticks before and after code ``` ```
    ### exemple CSS
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
```add <lang> after first backticks``` ```


```js
const response = await fetch(url);
const data = await response.json();
console.log(data) 
```


# Images
```html
<img src="link" alt="new branche" style="zoom:30%;" />   
```
    ![node img](assets/nodecmd.jpg)
