jquery-heading-list.js
====
html内のhタグを調べて、自動的に見出しの一覧を生成するjqueryプラグインです。  
This jquery plugin can create heading list on automatically.


## Demo

下のリンクで動作が確認できます。  
if you want to show this demo, please click the URL below.  
[DEMO](http://shota-yoshida.github.io/jquery-heading-list/test/index.html "DEMO")  

## Usage

#### headタグでjqueryを読み込みます。

```html:index.html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
```

#### headタグでjquery-heading-list.jsを読み込みます。

```html:index.html
<link rel="stylesheet" type="text/css" href="../src/jquery-heading-list.css" />
```

#### headタグでjquery-heading-list.cssを読み込みます。
cssはソースを見ればわかりますが、最低限の記述等のみになっています。
用途にあわせて適宜書き換えて使用してください。

```html:index.html
<script type="text/javascript" src="../src/jquery-heading-list.js"></script>
```

#### headタグでプラグインを使用します。

```html:index.html
<script type="text/javascript">
  $(function(){
    $("#heading-list").headingList();
  });
</script>
```

#### bodyタグ内の一覧を表示したい箇所にid要素の「heading-list」を設定します。

```html:index.html
<div id="heading-list"></div>
```

#### オプションが設定できます。

| オプション   | デフォルト値  | 説明                                                |
|:-------------|:--------------|:----------------------------------------------------|
| target       | body          | hタグを探す対象の要素を指定します。                 |
| scrollSpeed  | 500           | リンクを押下した際のスクロールスピードを指定します。|
| prefix       | &nbsp;&nbsp;  | 作成した一覧のインデントを指定します。              |

```html:index.html
<script type="text/javascript">
  $(function(){
    $("#heading-list").headingList(
      {
        target: 'body',
        scrollSpeed: 500,
        prefix: '&nbsp;&nbsp;'
      }
    );
  });
</script>
```

## Licence

MIT

## Author

[Shota Yoshida](http://error-reporting.com)


