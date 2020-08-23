# CSS

- 大枠(display 系  block/inline , flex, grid)
-  見た目(overflow, visibility)
- 要素を形成するもの(width/height/margin/padding/border) • 背景(background/opacity)
- 色(color)
- テキスト(font/text-decoration/text-alien/vertical-align)
- リスト・コンテンツ(list-style/content)
- 動きをつける(transition/animation)
- px: 絶対指定
- em/rem: 相対指定

## SCSS

- 複数クラス

  ```scss
  .link {
    ...
    &.btn { // .link.btnというボタンになる
      ...
    }
  }
  
  .link { ... }
  .link.btn { ... }
  ```

  - ネスト元のcssは問答無用でスタイルはかかるが、ネストの複数スタイリングした場合は上記みたいにする

## ボタン

- `display: block;`要素をブロック要素にする
  - `block`: `div/p/h1~h6`など
  - 要素は横幅いっぱいに広がる
  - 高さ、幅が指定できる
  - 余白が上下左右に指定できる
  - <img src="/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200823225847973.png" alt="image-20200823225847973" style="zoom:50%;" />
- `display: inline`
  - 高さ、幅は指定できない
  - 余白が左右のみ指定できる
- `display: inline-block;`要素をインラインブロック要素にする
  - 要素の幅で留まる
  - 高さ、幅指定できる
  - 余白が上下左右に指定できる
- `box-sizing: border-box;`widthにpaddingやborderの長さを含める
- `margin`: 要素の外側の余白
- `padding`: 要素の内側の余白
- `cursor: pointer`: ホバーした時にカーソルマークを表示する。`a`タグの要素
- `text-decoration: none;`文字の装飾を無効にする. `a`タグの装飾を無効にする(よくある、`<a>`のアンダーバー)
- `:hover`: ホバーしたときの挙動が決められる

## 文字

- `font-size`: 文字の大きさ
- `font-style`: 文字のスタイル（`normal`通常、`italic`斜め, etc)
- `font-weight`: 文字の太さ
- `line-height`: 行間の広さ
- `letter-spacing`: 文字の感覚
- `text-align: center`横方向に中央寄せする
- `writing-mode: vertical-lr` :縦書き
- [GoogleFont](https://fonts.google.com/)
- `@import url("https://fonts.googleapis.com/css?family=Roboto");` : Google Fontを追加
- `@mixin font-Roboto {}`: 
- `@include  font-Roboto`: 

- `:before`: 要素の物理的直前に内容(`content`)を追加
  - 疑似要素はHTMLには書かれていない要素もどきをCSSで作ることができる
  - HTMLコードを汚すこと無く様々な表現ができる
- `:after`: 要素の物理的直後に内容(`content`)を追加
- `position`要素の配置する基準
- `relative`: 通常の表示位置からの配置
  - <img src="https://saruwakakun.com/wp-content/uploads/2017/02/bdrposition-14-min.png" alt="position:relativeとは？" style="zoom:50%;" />
- `absolute`: 親要素からの配置
  - <img src="https://saruwakakun.com/wp-content/uploads/2017/02/bdrposition-13-min.png" alt="position:absoluteとは" style="zoom:50%;" />
- `position: fixed`: 画面の決まった位置に要素を固定させたいときに使う
  - <img src="/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200823223810797.png" alt="image-20200823223810797" style="zoom:50%;" />
- Flexbox: レスポンシブデザインとかに使う
  - `display: flex;` FlexboxコンテナはFlexBoxモデルを使うために必要。Flexboxコンテナの子要素はFlexboxアイテム。
  - `flex-direction`: 子要素の配置方向。rowは左から右。columnは上から下
  - `flex-wrap`: 子要素の折り返し設定。`nowrap`:単一行。`wrap`: 複数行
  - `justify-content: center;`水平方向の揃え方
    - コンテナ内全体の主軸方向（初期値では横方向）の揃え位置を指定する際に使用
    - <img src="/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200824001038999.png" alt="image-20200824001038999" style="zoom:33%;" />
    - `flex-start`: 横配置の場合、「左揃え」、縦配置の場合、「上揃え」になります
  - `align-items: center;` 垂直方向の揃え方
    - **コンテナ内のアイテムの交差軸方向（初期値では縦方向）のデフォルト揃え位置を指定する**
    - <img src="/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200824001812598.png" alt="image-20200824001812598" style="zoom:33%;" />
  - `align-content`: 行の揃え方.
    - 複数行になったときの揃え方です。
- `display: grid`: `display:flex`が一次元な配置に対して、こちらは２次元的な配置に向いていると言われている
  - コンテナ：
    - grid-template-rows/grid-template-columns グリッドの幅, 高さ 
    - grid-row-gap/grid-column-gap  グリッド間の余白
    - grid-template-areas 
  - 子要素：
    - Grid-area



# 参考文献

- https://saruwakakun.com/html-css/basic/relative-absolute-fixed

