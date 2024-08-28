function submitNumber() {
  let valueWidth = document.querySelector(".width").value;
  let valueHeight = document.querySelector(".height").value;
  if (
    valueWidth >= 100 &&
    valueWidth <= 300 &&
    valueHeight >= 100 &&
    valueHeight <= 300
  ) {
    alert("пушка");
    getFunc(valueWidth, valueHeight);
  } else {
    alert(`Оба числа должны быть от 100 до 300`);
    return;
  }
}

const getFunc = (valueWidth, valueHeight) => {
  fetch(`https://dummyimage.com/${valueWidth}x${valueHeight}/`).then(
    (response) => {
      const responseURL = response.url;
      displayResult(responseURL);
    }
  );
};

function displayResult(responseURL) {
  const imgDiv = document.querySelector(".result");
  let resultImg = `<img src='${responseURL}'>`;

  imgDiv.innerHTML = resultImg;
}

const btn = document.querySelector("button");
btn.addEventListener("click", submitNumber);
