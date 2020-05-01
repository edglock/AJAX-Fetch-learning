const requestUrl = 'https://jsonplaceholder.typicode.com/users';
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const parameter = {
      method: method,
      headers: headers,
    };
    if (method === 'POST') parameter.body = JSON.stringify(body);
    return fetch(url, parameter).then((response) => response.json());
}
const body = {
  name: 'Edward',
  age: 47,
};
sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err));