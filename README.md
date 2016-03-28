jquery-heading-list.js
====
html内のhタグを調べて、自動的に見出しの一覧を生成するjqueryプラグインです。  
This jquery plugin can create heading list on automatically.


## Demo

下のリンクで動作が確認できます。  
if you want to show this demo, please click the URL below.  
[DEMO](http://shota-yoshida.github.io/jquery-heading-list/test/index.html "DEMO")  

## Usage

### headタグでjqueryを読み込みます。

```html:index.html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
```

### headタグでjquery-heading-list.jsを読み込みます。

```html:index.html
<link rel="stylesheet" type="text/css" href="../src/jquery-heading-list.css" />
```

### headタグでjquery-heading-list.cssを読み込みます。
cssはソースを見ればわかりますが、最低限の記述等のみになっています。
用途にあわせて適宜書き換えて使用してください。

```html:index.html
<script type="text/javascript" src="../src/jquery-heading-list.js"></script>
```

### headタグでプラグインを使用します。

```html:index.html
<script type="text/javascript">
  $(function(){
    $("#heading-list").headingList();
  });
</script>
```

## Licence

MIT

## Author

[Shota Yoshida](http://error-reporting.com)


