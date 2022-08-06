
### Install less


[https://lesscss.org/](https://lesscss.org/)

1. Push between header
 ```css
 <link rel="stylesheet/less" type="text/css" href="styles.less" />
 ```

 2. Create file styles.less

 3. Body script
 ```js
 <script src="https://cdn.jsdelivr.net/npm/less" ></script>
 ```

# Examples

```css
/*variaveis */
@primary-color: rgb(236, 61, 227);
@seconday-color: dodgerblue;
@bk-color: #181818;
@primary-font: sans-serif;


body{
    background-color: @bk-color;
    font-size: 2rem;
    
}

div{
    color: @primary-color;
    font-family: @primary-font;
}


//media queries
@smartphone: ~"(max-width: 700px)";

@media @smartphone {
    body{
        background-color: coral;
    }
    
}
 ```

## CSS vs Less
default:
```css
.card .card--content{
    color: @ft-color2;
}

.card .card--title{
    color: @seconday-color;
}

```

Less:
```css
.card {
    .card--title{
        color: red;
    }
    .card--content{
        font-size: 2rem;        
    }
    
}
```

Less &  `.card` same than `&`
```css
.card {
    &--title{
        color: red;
    }
    &--content{
        font-size: 2rem;        
    }
    &:after{
        content:"hello";
    }
}
```

## Mixins:

```css
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
```

call the custom

```css
.card {
    &--title{
        color: red;
        .center();
    }
}
```


