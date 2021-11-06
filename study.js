//  JavaScript 追加学習

//  const　===============================

//  プリミティブ型のデータは通常の定数として扱われる

const number = 1;
//  number = 2;　これはエラー発生

//  オブジェクト型は上書きや要素の追加が可能
const fish = {
  name: "tinu",
  classification: "tai",
  color: "black",
  fishingStyle: "fukase",
};

fish.name = "gure";
fish.cook = "kobujime";

// nameの変更もされ、新しい要素(cook)も追加されている
console.log(fish);

//  配列もオブジェクト型と同様に変更や追加が可能

const many_fish = ["tinu", "gure", "kiss", "bera"];

many_fish[0] = "tanago";
many_fish.push("tinu"); //pushメソッドで配列末尾に追加

console.log(many_fish);

// テンプレート文字列　===============================

const fish_name = "チヌ";
const fish_cook = "昆布締め";

//  テンプレート文字列はバッククォート(Shift + @)で囲む
const message = `${fish_name}は${fish_cook}だと臭みが和らいで美味しい`;

console.log(message);

//  オブジェクトの分割代入　===============================

const fishing = {
  style: "フカセ釣り",
  tool: "撒き餌",
};

/*  オブジェクトのプロパティを変数「style」「tool」「name」に代入。
　　⇒SpringのDIと似ている印象

  const { style, tool} = fishing;
  const { name } = fish;
*/

//  値を注入する際、プロパティ名から別名に変更可能
const { style: fishing_style, tool: fishing_bait } = fishing;
const { name: target } = fish;

//  2つのオブジェクトからの分割代入を経由しても、一つのテンプレート文字列から出力可能
const fishing_message = `${fishing_style}は${fishing_bait}によって、${target}が釣れるかが左右されます`;
console.log(fishing_message);

//  配列の分割代入　===============================

//  配列の分割代入では、変数名は任意
//  ただし、変数名の順番と配列の順番は一致させる必要がある

let [fish1, fish2, fish3, fish4] = many_fish; //26行目に宣言
let first_fishing = `初めて釣った魚は${fish3}でした`;

console.log(first_fishing);

/*  配列の途中までの注入で止めることも可能
    その他、スプレッド構文を用いて、途中～最後までの要素を一気にまとめて注入することも可能

let [fish5, fish6] = many_fish;
first_fishing = `初めて釣った魚は${fish5}でした`;
console.log(first_fishing);
*/

//  デフォルト値　===============================

const sayHello = (name = "ゲスト") => console.log(`Hello ${name}!!`);

sayHello();
sayHello("otinu");

//  オブジェクトから注入する際にもデフォルト値の設定が可能
//  const { child } = fish;
const { child = "チャリコ" } = fish;
const child_message = `${child}は真鯛の稚魚`;
console.log(child_message);

//  スプレッド構文  ===============================

console.log(many_fish);
console.log(...many_fish); //  配列の要素を展開して出力

//  map  ===============================

//  戻り値を受け取る必要がない場合にmapを使うと、for文よりもスリムに配列の全要素を渡すことができる

many_fish.map((fish_name) => console.log(fish_name));

//  filter  ===============================

const numberArray = [1, 2, 3, 4, 5];

//  配列の中から特定の条件に一致するものを取り出して処理をしたい場合に使用する
const newNumberArray = numberArray.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumberArray);
