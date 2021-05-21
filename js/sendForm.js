const server = "https://jsonplaceholder.typicode.com/posts";
const formElems = document.querySelectorAll(".form");

const sendData = (data, callBack, falseCallback) => {
  const request = new XMLHttpRequest();

  request.open("POST", server);

  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    }
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      callBack(response.id);
    } else {
      falseCallback(request.status);
      throw new Error(request.status);
    }
  });

  request.send(data);
};

const formHandler = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {};

    for (const { name, value } of form.elements) {
      if (name) {
        data[name] = value;
      }
    }

    const smallElem = document.createElement("small");

    sendData(
      JSON.stringify(data),
      (id) => {
        smallElem.innerHTML = `Ваша заявка №${id}!<br>В ближайшее время с вами свяжемся!`;
        smallElem.style.color = "green";
      },
      (error) => {
        smallElem.textContent =
          "К сожалению технические неполадки, попробуйте отправить заявку позже";
        smallElem.style.color = "red";
      }
    );

    smallElem.style.marginTop = "10px";
    form.append(smallElem);
    form.reset();
  });
};

formElems.forEach(formHandler);
