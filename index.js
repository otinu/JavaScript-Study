//変数　===============================

// varは以前の書き方で、現在はletを使うことが主流
const kuroDai = "tinu";
let fish = kuroDai;

console.log(fish);

//配列・ループ・条件分岐　===============================

//ダブルクォーテーションでも可
let many_fish = ["tinu", "gure", "kyuusenn", "hobo", "kiss"];

console.log(many_fish[1]);

/*  関数で使用

let index = 0;
while (index < many_fish.length) {
  if (index == 0) {
    console.log("ループ開始");
  }

  console.log(many_fish[index]);

  if (index == 4) {
    console.log("ループ終了");
  }
  index++;
}
*/

//関数　===============================

/*
今回の例ではアロー演算子を使ったやり方で、
このやり方だと閉じる部分が「)};」ではなくなるため、読みやすい
*/

//関数宣言
const test = (arg) => {
  let index = 0;
  while (index < arg) {
    if (index == 0) {
      console.log("ループ開始");
    }

    console.log(many_fish[index]);

    if (index == 4) {
      console.log("ループ終了");
    }
    index++;
  }
};

//関数呼び出し
test(many_fish.length);

//オブジェクト　===============================

const tinu = {
  classification: "tai",
  color: "black",
  fishingStyle: "fukase",
  howMany: () => {
    let index = 0;
    let fishedCount = 0;
    while (index == 3) {
      fishedCount += index;
      index++;
    }
    return fishedCount;
  },
};

console.log("ここからオブジェクト");
console.log(tinu.classification);
console.log(tinu.color);
console.log(tinu.fishingStyle);

// オブジェクト(Javaでのクラス)内の関数を呼び出すことはできるものの、
// ブラウザのコンソールでは、fishedCountの数ではなく、関数全体のコードが出力されてしまった
console.log(tinu.howMany);

