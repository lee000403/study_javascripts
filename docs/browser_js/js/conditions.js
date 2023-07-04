// if () {
// } else if() {
// } else {
// }

let first = 1;
let second = 4;

if (first < 10) {
    console.log("Mano");
} else if(first > second) {
    console.log(`${first} > ${second}`);
} else {
    console.log(`second : ${second}`);
}

// == or === (== : 값만 비교, === : 데이터 타입, 값 비교한다.)
let third = `4`;
first = 4;
// third === first
// false
// third == first
// true

// 삼항 연산자
// if () {

// } else {

// }

// 변수 = (조건) ? : ;
// 조건인 부분이 if, 참일땐 ? : 사이에 들어가고 else 부분은 : ; 사이에 들어간다
let result = (third === first) ? `true!` : `false !`;