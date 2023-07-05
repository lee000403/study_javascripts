  const carinfor_obj = [
      {"YEAR":"2020","CAR_NAME":"Sonata","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
      {"YEAR":"2021","CAR_NAME":"Kona","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
      {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
      {"YEAR":"2022","CAR_NAME":"3 Series","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
      {"YEAR":"2020","CAR_NAME":"Camry","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
    ];
    function tablelist(startHtml, endHtml) {
        for (let car_hashmap of carinfor_obj) {   
          startHtml = startHtml + `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
        }
        startHtml += endHtml;
        return startHtml
    }
    let car = tablelist(`<table>`, `</table>`)
  
    let carTableBody = document.querySelector('#car');
    carTableBody.innerHTML = car; 