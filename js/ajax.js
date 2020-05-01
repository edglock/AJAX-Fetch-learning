const requestUrl = 'https://jsonplaceholder.typicode.com/users';
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => reject(xhr.response);
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
  });
}
//for GET-method
sendRequest('GET', requestUrl)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//for Post method
const body = {
  name: 'Edward',
  age: 47,
};
sendRequest('GET', requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));