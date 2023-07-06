// carTableBody();

// add keydown Event
let keydownObject = document.querySelector('#keydownEnter')

keydownObject.addEventListener('keydown', (event) => { // keydown은 내가 하려는 것을 적는것이다 click 도 가능하다.
  if (event.code == 'Enter') { // enter 했을때만 작동하게 만드는 문법
    carTableBody();
  }
});

function carTableBody() {
  let url = 'http://192.168.0.35:8080/selectAll/CI002';
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let outHtml = `<table>`;
      for (let car_hashmap of data) {
        outHtml = `${outHtml}<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
      }
      outHtml += `</table>`;
      let carTableBodyElement = document.querySelector('#carTableBody');
      carTableBodyElement.innerHTML = outHtml;
    })
    .catch(error => {
      console.log(error);
    });
}
