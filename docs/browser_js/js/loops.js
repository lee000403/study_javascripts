// String - string
// 숫자 -  Number
// ArrayList = Array []
// HashMap = Object {}

// let animals = ["dog", "cat", "bird", "fish", "lizard"];

// console.log(`Done`);

// for (let i = 0; i<animals.length; i++) {
//     console.log(`${i+1} : ${animals[i]}`);
// }

// // of = java에서 for (? : ?) 에서 : 이랑 같다.
// for (let animal of animals) {
//     console.log(`${animal}`)
//     // dog
//     // cat
//     // bird
//     // fish
//     // lizard
// }

const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];

let outHtml = ``;
for (let animal_hashmap of animals_obj) {
    console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}`);
    outHtml = `${outHtml}<div>name : ${animal_hashmap.name}, species : ${animal_hashmap[`species`]}</div>`;
}
console.log(outHtml);
// browser 자원 중에 docs
let loops_source = document.querySelector('#loops')
// 자바스크립트는 html에서 id로 꼭 가져오기
// # 은 id를 칭하고 .은 클래스를 칭한다.
loops_source.innerHTML = outHtml