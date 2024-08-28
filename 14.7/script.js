const loading = document.querySelector(".loading");
const resultNode = document.querySelector(".result");

function submitNumber() {
  /* const page = document.querySelector(".page").value;
  const limit = document.querySelector(".limit").value; */
  const page = localStorage.getItem("page");
  const limit = localStorage.getItem("limit");

  if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
    const getResult = getFunc(page, limit);
    console.log("getResult", getResult);
    displayResult(getResult);
  } else {
    if ((page < 1 || page > 10) && (limit < 1 || limit > 10)) {
      alert("Номер страницы и лимит вне диапазона от 1 до 10");
      return;
    }
    if (page < 1 || page > 10) {
      alert("Номер страницы вне диапазона от 1 до 10");
      return;
    }
    if (limit < 1 || limit > 10) {
      alert("Лимит вне диапазона от 1 до 10");
      return;
    }
  }
}

const getFunc = (page, limit) => {
  loading.innerHTML = "Ждите! Идет загрузка ...";
  resultNode.innerHTML = "";
  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return response;
};

function displayResult(apiData) {
  setTimeout(() => {
    apiData.then((data) => {
      let cards = "";
      data.forEach((item) => {
        const cardBlock = `
  <div class="card">
    <img
      src="${item.url}"
      class="card-image"
    />
    <p>${item.title}</p>
  </div>
`;
        cards = cards + cardBlock;
      });

      resultNode.innerHTML = cards;
    });
    loading.innerHTML = "";
  }, 1000);
}

const btn = document.querySelector("button");
btn.addEventListener("click", submitNumber);

const inputPage = document.querySelector(".page");
const inputLimit = document.querySelector(".limit");

(function () {
  /*   localStorage.setItem('page', event.target.value) */
  const page = localStorage.getItem("page");
  const limit = localStorage.getItem("limit");
  inputPage.value = page;
  inputLimit.value = limit;
  if (!page || !limit) {
    return;
  }
  submitNumber();
})();

inputPage.addEventListener("input", (event) => {
  localStorage.setItem("page", event.target.value);
});
inputLimit.addEventListener("input", (event) => {
  localStorage.setItem("limit", event.target.value);
});
