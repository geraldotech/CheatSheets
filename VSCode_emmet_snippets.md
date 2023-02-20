# emmet

- create a .json file

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

### CTRL + , then Extensions Path adicionar a pasta que está localizando o json

## Links

- https://github.com/emmetio/snippets/blob/master/html.json
- https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/

# custom snipped

### Default file:

> > File > Preferences > User Snippets

### Global snippets?

inside VS Code go to AppDAta > Roaming > Code > User > Snippets

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
			"console.log($1);"
		],
		"description": "Log output to console"
	}
}
```

- <a href="https://www.youtube.com/watch?v=TGh2NpCIDlc">Create Custom VSCode Snippets</a>
