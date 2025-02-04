function submitNumber() {
  let value = document.querySelector("input").value;
  if (value >= 1 && value <= 10) {
    useRequest(
      `https://jsonplaceholder.typicode.com/photos?_limit=${value}`,
      displayResult
    );
  } else {
    alert("Введите число от 1 до 10");
  }
}

function useRequest(url, callback) {
  console.log(url);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
  <div class="card">
    <img
      src="${item.thumbnailUrl}"
      class="card-image"
    />
    <p>${item.title}</p>
  </div>
`;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}

const btn = document.querySelector("button");
btn.addEventListener("click", submitNumber);
const resultNode = document.querySelector(".result");
