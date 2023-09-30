const URL = 'https://dog.ceo/api/breeds/image/random/10'


fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let htmlContentToAppend = "";
    data.message.forEach((elm) => {
      htmlContentToAppend +=
        `
        <img src="${elm}">
        `;
    });
    document.getElementsByClassName("contenedor")[0].innerHTML = htmlContentToAppend.innerHTML = htmlContentToAppend; 
  })