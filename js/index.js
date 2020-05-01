document.querySelector(
  '.local-time'
).innerText = new Date().toLocaleTimeString();

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector('.html-conteiner').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'client-data.html', true);
  xhr.send();
}

document
  .querySelector('.get-fetch-html')
  .addEventListener('click', getFetchHtml);

function getFetchHtml() {
  fetch('client-data.html')
    .then((response) => response.text())
    .then(
      (html) => (document.querySelector('.html-conteiner').innerHTML = html)
    );
}

document.querySelector('.get-ajax-json').addEventListener('click', getAjaxJson);

function getAjaxJson() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const clientData = JSON.parse(xhr.response);
      document.querySelector('.client-name').innerText = clientData.name;
      document.querySelector('.client-account').innerText = clientData.account;
    }
  };
  xhr.open('GET', 'client-data.json', true);
  xhr.send();
}

document
  .querySelector('.get-fetch-json')
  .addEventListener('click', getFetchJson);

function getFetchJson() {
  fetch('client-data.json')
    .then((response) => response.json())
    .then((clientData) => {
      document.querySelector('.client-name').innerText = clientData.name;
      document.querySelector('.client-account').innerText = clientData.account;
    });
}