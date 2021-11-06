//  JavaScript 追加学習

//  オブジェクト　===============================

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
