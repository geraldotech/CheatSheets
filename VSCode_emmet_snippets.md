# emmet:

- create a custom Emmet snippets need to be defined in a json file named snippets.json  [...visualstudio.com/docs/editor/emmet](https://code.visualstudio.com/docs/editor/emmet)

```json
{
  "html": {
    "snippets": {
      "!": "{<!DOCTYPE html>}+html[lang=${1}${lang} style='color-scheme:dark']>(head>meta[charset='UTF-8']+meta:vp+title{${2:New document}})+body>(h1>{${3: New Document}})+{${0}}",
      "art": "article>header+section*2+footer",
      "img:l": "img[width height loading='lazy']",
      "page": "header>h1^main+footer{${0:©}}"
    }
  }
}
```

Open Settings or `CTRL + ,` then type `extensions path` and add Path to a folder containing Emmet profiles and snippets .json por se tratar de um arquivo externo, pode adicionar o caminho para o arquivo via OneDrive, Dropbox...

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/e7548951-1bd1-44ae-aea0-557ba77333ad)


<hr>

# User Snippets:

You can create a WorkSpace or Global snippets `best`

- <strong>Create new file:</strong> `File > Preferences > User Snippets`
  > e.g: javascript.json

#### Backup Global snippets

inside VS Code or Windows Explorer to `AppData > Roaming > Code > User > Snippets` | `%AppData%\Code\User\snippets`

```js
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "cl",
		"body": [
			"console.log($1);" //cl + tab next line
		],
		"description": "Log output to console"
	}
}
```

```js
👉tab stop empty
"console.log($1)"

👉default string
"console.log(`${1:Here}`)"

👉default variabels
"console.log(${1:Here})"

👉tab stop empty string
"console.log(`$1`)"

👉Edit string :tab to type a Variable :tab to go out
"console.warn(${2:`${1:Here}`});"

```

# keyboard shortcuts

- Criando um atalho para `console.log` escolhi CTRL + l
- Abrir `CTRL + K + S` e no top click em `Open Keyboard Shortcuts JSON`

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "ctrl+l",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "name": "console.log"
    }
  }
]
```

# Export your profile


Export Full profile

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/c971cd76-785c-4b2a-8f28-10182187de76)

![image](https://github.com/geraldotech/CheatSheets/assets/92253544/62182df0-0522-49fc-9ee4-a744401f7174)


- themes
- keyboards
- shortcuts
- extensions
- settings.json

        
### in new VSCode

- Import it and wait loading
- switch profile select your imported profile
- add emment paths


Download my profiles in: https://1drv.ms/f/s!Aol5qLKOISMz4hMS39bBOqHNcLrR?e=V3tfln



## 🌐Links:

- <a href="https://www.youtube.com/watch?v=TGh2NpCIDlc">Create Custom VSCode Snippets</a>
- [https://github.com/emmetio/snippets/blob/master/html.json](https://github.com/emmetio/snippets/blob/master/html.json)
- [https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/](https://github.com/emmetio/snippets/blob/master/html.json)
