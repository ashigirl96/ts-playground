# TypeScript入門

![image-20200816193257223](/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200816193257223.png)

- `module`と`target` ってどう違う？
  - モジュールシステムってなに？

- `lib`に"dom"を追加するとブラウザ用TypeScriptがかける



## 3章：型について

<img src="/Users/reon.nishimura/Library/Application Support/typora-user-images/image-20200816194101343.png" alt="image-20200816194101343" style="zoom: 50%;" />

- unknownはanyに似ているが、本当に前持って型がわからないときはunknownを使う

- object型は、オブジェクトであることだけを伝え、値をもってない

- `[key: T]: U`はインデックスシグネチャで、オブジェクトがより多くのキーを含む可能性があることを伝える構文

- `key?: T`はkeyがundefinedも許容するという型

- `readonly key: T`はプロパティのconstみたいなもん

- `type AliasType = T`は型エイリアスと言われ、明示的に型を表現できる

- `key: T[]`はT型の配列を意味する

- `undefined`は、型であり値である。まだ定義されていないという意味

- `null`は、型であり値である。値が欠如していることを意味してる

- `void`は明示的に何も返さない関数の戻り値の型

- `never`は決して戻ることの無い関数の型
  
- 永久に実行されたり、例外をスローする関数
  
- `<T extends U>`とすることで、今まで任意の型`T`で良かったが、`U`のサブタイプでなければならなくなる

  - `U`に代入可能である任意の型`T`

- interfaceを使うと、インラインのように型エイリアスを使わなくて住む

  - ```typescript
    interface Food {
      name: string;
      calories: number;
    }
    
    interface Sushi extends Food {
      tasty: boolean;
    }
    
    const tamago: Sushi = {
      name: "tamago",
      calories: 0.1,
      tasty: true,
    };
    ```

  - 型エイリアスとの違いとして、「宣言マージ」があり、型が合体す（明示的じゃなくて好きじゃない）

    - ```typescript
      interface Sushi extends Food {
        tasty: boolean;
      }
      
      interface Sushi {
        age: number;
      }
      
      const tamago: Sushi = {
        name: "tamago",
        calories: 0.1,
        tasty: true,
        age: 100,
      };
      ```

- `as const` アサーションは、「宣言と共に型の拡大を抑えることができる」

  - すなわち、値にすべて`readonly` がつく

- ルックアップ型は、GraphQL APIのようにネストがある複雑な型の一部を型とする型

  - ```typescript
    type APIResponse = {
      user: {
        userId: string;
        friendList: {
          count: number;
          friends: {
            name: string;
            userId: string;
          }[];
        };
      };
    };
    
    type FriendList = APIResponse["user"]["friendList"];
    
    function renderFriendList(friendList: FriendList) {
      console.log(friendList.friends);
    }
    
    renderFriendList({
      count: 2,
      friends: [
        { name: "reon", userId: "0001" },
        { name: "hage", userId: "0002" },
      ],
    });
    ```

- `keyof` は、型のkeyを取り出す

  - ```typescript
    const obj = {
      foo: 'str',
      0: 'num',
    };
    
    // ObjType = 0 | 'foo'
    type ObjType = keyof (typeof obj)
    
    // typeof objの時点で
    interface Obj {
      foo: string;
      number: string;
    }
    // が得られる。そのObjのプロパティ名すべてをkeyofで取り出すので 0 | 'foo'となる
    ```

  - `keyof T`は配列じゃなくて、`T`のすべてのプロパティ名の一つを指す

  - 使い方として、`fieldName: keyof Values`として、引数の許容範囲を狭くする

  - 以下は、`T`のプロパティ名のどれか`K`

  - `keyof T`はTのすべてのプロパティ名の型

    ```typescript
    <T, K extends keyof T>
    ```

- `Record<T, U>`は辞書として使いたいオブジェクトの型に適している

  - ```typescript
    type Record2<K extends keyof any, T> = {
      [P in K]: T;
    };
    
    const dict: Record2<string, number> = {};
    dict.foo = 123;
    dict.bar = "hoge"; ← これはエラーになる
    ```

- `{[P in K]: T}`はmapped typesと呼ばれ、`P`は型変数、`K, T`は何らかの型である。`K`は`string`のsubtypeである必要がある

  - `P in 'A'|'B|'C'`のイメージ：`['A', 'B', 'C']`のforを回してそれぞれに同じ操作をするイメージ

    - `[P in 'foo' | 'bar']: number`: `{[P: number] for P in ['foo', 'bar'] }` みたいな
    
  - ```typescript
    type Obj1 = {[P in 'foo' | 'bar']: number};
    interface Obj2 {
      foo: number;
      bar: number;
    }
    
    const obj1: Obj1 = {foo: 3, bar: 5};
    const obj2: Obj2 = obj1;
    const obj3: Obj1 = obj2;
    ```

  - `Obj1`と`Obj2`は同じ意味

- `Partial<T>`は`T|undefined`な型

  - ```typescript
    interface Foo {
      bar: number
      baz: boolean
    }
    
    type PartialFoo = Partial<Foo>
    
    // PartialFoo {
    //   bar?: number
    //   baz?: boolean
    // }
    ```

- `Pick<T, K extends keyof T>`は型`T`の中から`K`に当てはまるプロパティのみ抜き取った新しい型

  - ```typescript
    
    ```

- 宣言空間内で `export`しないと、外に値は参照されない

- `declare global`スコープに宣言されていると、`interface`の`export`をせずにオーバーロードできるようになる

- 関数の `Generics`
  - arrow functionのGenerics: `const boxed = <T>(props: T) => ({ value: props })`
  
- `(...args: any[])=> any`: は任意の関数

- `type Exclude<T, U>`:型 T が型 U に代入可能であれば`never`、そうでなければ型 T を返す Conditional Type です。

  - ```typescript
    type A = Exclude<string, number> // string
    type B = Exclude<string, any> // never
    type C = Exclude<string | number | boolean, string | boolean> // number
    ```

- `type Extract<T, U>`: Excludeの逆

  - ```typescript
    type A = Extract<string, number> // never
    type B = Extract<string, any> // string
    type C = Extract<string | number | boolean, string | boolean> // string | boolean
    ```

- `infer`は、Conditional type `T extends U ? X : Y` の条件(Uのとこ)に `infer S` と書くと、Sに補足された型を X の部分で再利用可能になります。

  - 正規表現の`()` を想像してください。`/hoge(\d+)$/` に対して、hoge1の末尾数字部分をあとから参照可能になるじゃないですか、これと同じです。

- `T extends readonly any[]`任意の配列

- `typeof obj`: objの型が得られる

- `Omit<T, K extends keyof T>`: 型 T の中から、キー名が K に当てはまるプロパティを*除外した*新しい型を返します。

  - ```typescript
    interface Foo {
      foo: string
      bar: number
      baz: boolean
    }
    
    type FooWithoutBar = Omit<Foo, 'bar'>
    
    // FooWithoutBar {
    //   foo: string
    //   baz: boolean
    // }
    ```

  - ```typescript
    type MyExclude<A, B> = A extends B ? never : A
    type MyOmit<T, K extends keyof T> = { [S in MyExclude<keyof T, K>]: T[S] }
    ```

    - `never`って否定っぽいね

- 
