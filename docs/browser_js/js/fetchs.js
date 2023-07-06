// 데이터를 받기 위해서는 fetch 를 사용해야한다.
// 정부 데이터 포털 : 대구 의료기기 판매소
// function fetchdatagokr(){
// let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=%2Bjbfk%2BivyhwvjPY847gvpkHZ6tIKCwDaTvB81LvSH5fA6aDuZSqTAHRd93MVboh4YCcMBdGlwcHz6uUaQlGEGQ%3D%3D&currentPage=1&perPage=10&SN=1';
// let request = fetch(url) // fetch 어싱크를 동작시키는 function, fetch(url)은 url에 신호를 보내는 것
//     .then((response) => 
//     {response.json()
//     }) 
//     // .then 은function 이다. response로 결과 값을 받는 형태이다.(hashMap 형태가 response에 담겨서 온다.), response 는 json의 묶음 형태.
//     // data를 파라미터로 받아서 data를 json 형태로 출력 시킨다.
//     .then((data) => { 
//         console.log(data);
//     })
//     // 문제가 생겼을 시 catch로 들어간다.
//     .catch((errorMeg) => {
//         // 에러 내용 출력
//         console.log(errorMeg);
//     });
// }

// 자동차 정보 상세(자바 url 에서 정보를 받는 것)
function fetchCarInforDetail() {
    let url = 'http://192.168.0.35:8080/selectDetail/CI002'; // http 꼭 적어줘야함
    let request = fetch(url) // fetch 어싱크를 동작시키는 function, fetch(url)은 url에 신호를 보내는 것
        .then((response) => {
            return response.json()
        })
        // .then 은function 이다. response로 결과 값을 받는 형태이다.(hashMap 형태가 response에 담겨서 온다.), response 는 json의 묶음 형태.
        // data를 파라미터로 받아서 data를 json 형태로 출력 시킨다.
        .then((data) => {
            console.log(data);
        })
        // 문제가 생겼을 시 catch로 들어간다.
        .catch((errorMeg) => {
            // 에러 내용 출력
            console.log(errorMeg);
        });
}

// 자동차 정보 수정 (자바로 정보 보내는 것)
function fetchCarInforUpdate() {
    // 192.168.0.35:8080/update
    // 삭제 목록(body - json 파일 형태 가져오기)
    // { 
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR-02"
    // } 
    // headers -
    // content-type : application/json
    let url = 'http://127.0.0.1:8080/update'; // http 꼭 적어줘야함
    let option = {
        method : "PUT",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({
            "CAR_NAME": "요주랩",
            "CAR_INFOR_ID": "CI002"
        })
    }
    // 옵션에는 Params 등등 포스트맨에서 Body 까지 아무거나 사용이 가능하다.
    let request = fetch(url, option) // fetch 어싱크를 동작시키는 function, fetch(url)은 url에 신호를 보내는 것
        .then((response) => {
            return response.json()
        })
        // .then 은function 이다. response로 결과 값을 받는 형태이다.(hashMap 형태가 response에 담겨서 온다.), response 는 json의 묶음 형태.
        // data를 파라미터로 받아서 data를 json 형태로 출력 시킨다.
        .then((data) => {
            console.log(data);
        })
        // 문제가 생겼을 시 catch로 들어간다.
        .catch((errorMeg) => {
            // 에러 내용 출력
            console.log(errorMeg);
        });
}
