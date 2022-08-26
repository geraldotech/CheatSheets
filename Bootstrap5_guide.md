# Bootstrap 5 

>> By: Geraldo Filho

## <ins>*Getting Started*</ins>

Adicionar o CSS entre <head> ou baixar o pacote no site oficial:  
[https://getbootstrap.com/docs/5.1/getting-started/download](https://getbootstrap.com/docs/5.1/getting-started/download)

CSS

```css
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

JavaScript

```js
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

Jumbotron

```html
<div class="jumbotron text-center">
    <div class="container">
    <h1 class="display-4">
          welcome
      </h1>
      <p class="lead">this a test</p>
    </div> 
  </div>
```
fluid-jumbotron

```css
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
```

Jumbotron add-ons:  
`<div class="jumpbotron bg-success text-white">`

Change colors (see colors available):  
`<div class="jumpbotron bg-success text-white">`

### Container

```html
<div class="container">
<h1>My First Bootstrap Page</h1>
<p>This part is inside a .container class.</p>
<p>The .container class provides a responsive fixed width container.</p>
<p>Resize the browser window to see that the container <br>
      width will change at different breakpoints.
      </p>
   </div>

```

- Container com text-justify  
`&lt;div class="container text-justify"&gt;`

- Container Padding 

By default, containers have left and right padding, with no top or bottom padding. Therefore, we often use spacing utilities, such as extra padding and margins to make them look even better. For example:   
`pt-5` - means "add a large top padding":

`container-fluid` => width is always 100% 

### Rows:  
`<div class="row">`

### Grid - Col:
```html
 <div class="row">
        <div class="col">
            Column
        </div>
        <div class="col">
            Column
        </div>
        <div class="col">
            Column
        </div>
    </div>
```

Exemplo de 3 colunas
Variar de acordo com o content: `md-auto`

Colors: [https://getbootstrap.com/docs/5.0/utilities/colors/](https://getbootstrap.com/docs/5.0/utilities/colors/)

Grid

```html
<!-- Control the column width, and how they should appear on different devices -->
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>

<!-- Or let Bootstrap automatically handle the layout -->
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>

```
Images responsive: `img-fluid`

Responsive column with sidebar

```html
<div class="container text-justify">
<div class="row">
<div class="col-md-8 bg-light p-3 border ms-md-auto">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>

</div>
<div class="col-md-3 bg-light p-3 border ms-md-auto">
<div class="row justify-content-around">

<br>
<h5 style="text-align:center;color:black">My Side barIMG with links</h5>
<div align="center">
<br>
<a href="http://blog.com"target="_blank"> <img src="[https://technotesbr.files.wordpress.com/2018/01/images.png](https://technotesbr.files.wordpress.com/2018/01/images.png) class="img-fluid"

target="blank" class="img-fluid" width="300" height="300" alt="ChalkArtes logo" /></a>
</div>
</div>
</div>

```

code reviewed 1.2

```html
<div class="container text-justify">
        <div class="row">
            <div class="col-md-8 bg-light p-3 border ms-md-auto">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
iam, quis nostrud exercitation ullam </p>    
            </div>
            <div class="col-md-3 bg-info p-3 border ms-md-auto">
               <div class="row justify-content-around">
                   <h2>Sidebar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam </p>
                <a href="http://blog.com"target="_blank"> <img src="https://technotesbr.files.wordpress.com/2018/01/images.png" 
                    target="blank" class="img-fluid" alt="ChalkArtes logo" /></a>
               </div>   
            </div>
        </div><!--row-->
    </div><!--container-->
```
Footer e.g 1

```html
 <footer class="pt-3 mt-4 text-muted border-top">
                    &copy; 2021
</footer>

```
Example 2 with custom CSS:

```html
<footer class="blog-footer">
<p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
<p><a href="#">Back to top</a></p>
</footer>
```
```css
.blog-footer {
padding: 2.5rem 0;
color: #727272;
text-align: center;
background-color: #f9f9f9;
border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
margin-bottom: 0;
}
```

# [Accordion](https://getbootstrap.com/docs/5.1/components/accordion/) 
CSS change button:
```css
.accordion-button{
background-color: #326ec4;
}
```

# [Navbar dropdown](https://getbootstrap.com/docs/5.0/components/navbar/) 

```html
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
```

Mudar a cor dos links create a style:
```css
 .nav-link {
    color: white !important; 
    }
```

Propriedades universais:

bg-light - [background-color](https://getbootstrap.com/docs/5.1/utilities/background/#background-color) - choose colors like: .bg-primary .bg-secondary .bg-success .bg.danger .bg.warning .bg-info


border - add border  
p-3 - padding  
m - margin  
ms - margin-left  
me - margin-right  
mx - margin left and right  
md - medium  
sm - small  
pt - padding top  
pt-5 - means "add a large top padding":  
mt-2 -margin-top  
display-1  -6 (h1,h2,h3,h4,h5,h6)  

More in [https://www.w3schools.com/bootstrap5/bootstrap_utilities.php](https://www.w3schools.com/bootstrap5/bootstrap_utilities.php)


List Group


```html
<div class="container">
       <div class="row">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading 2</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="http://google.com" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
            </a>
          </div>
       </div>
   </div>
</div>
</div>
</div> 

```

Add custom CSS :hover 

```css
   .list-group-item:hover , .list-group-item-action:hover{
        background-color: #0d6efd;
        color: white;
    }
```

# Table Example:

```html

<table class="table table-bordered">
  <thead>
  <tr>
  <th>Nº</th>
  <th>Name</th>
  <th>Resets</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1</td>
  <td>Geraldo</td>
  <td>30</td>
  </tr>
  <tr>
  <td>2</td>
  <td>x</td>
  <td>20</td>
  </tr>
  <tr>
  <td>3</td>
  <td>Rani-demo.com</td>
  <td>19</td>
  </tr>
  </tbody>
  </table>

```

## Useful links:
- [Text - start-center-end](https://getbootstrap.com/docs/5.1/utilities/text/) text-left - text-right- text-center - fw-bold - fs-1-6, font-size
- [Text](https://getbootstrap.com/docs/5.1/utilities/text/?) - text bold
- [Buttons](https://getbootstrap.com/docs/5.1/components/buttons/) - text bold
- [Grid](https://getbootstrap.com/docs/5.1/layout/grid/) 
- [Background-Colors](https://getbootstrap.com/docs/5.1/utilities/background/#background-color) 
- [Images](https://getbootstrap.com/docs/5.1/content/images/#responsive-images) 
- [Nav](https://getbootstrap.com/docs/5.1/components/navs-tabs/) 
- [Alerts](https://getbootstrap.com/docs/5.0/components/alerts/) 
- [Flex](https://getbootstrap.com/docs/5.1/utilities/flex/) 
- [Margin and Space](https://getbootstrap.com/docs/5.1/utilities/spacing/) 
- [Typography](https://getbootstrap.com/docs/5.0/content/typography/) display



### REFS:
[https://www.w3schools.com/bootstrap5/bootstrap_containers.php
](https://www.w3schools.com/bootstrap5/bootstrap_containers.php
)  
[https://getbootstrap.com/docs/5.1/
](https://getbootstrap.com/docs/5.1/
)
