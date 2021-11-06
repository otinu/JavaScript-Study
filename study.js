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
