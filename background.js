// document.getElementById('status').innerHTML = "Content changed by background.js";

// fetch('http://www.softomate.net/ext/employees/list.json')
//   .then(result => result.json())
//   .then(result => {
//     console.log('The remote data is fetched!');
//     console.log(result);
//     dispatch(getRemoteDataEndSuccess(result));        
//   })
//   .catch(error => dispatch(getRemoteDataEndFail(error)));

fetch('http://www.softomate.net/ext/employees/list.json').then(function (result) {
  return result.json();
}).then(function (result) {
  console.log('The remote data is fetched!');
  console.log(result);
  myObj = result[0];
  document.getElementById('status').innerHTML = "name: " + myObj.name + ", domain: " + myObj.domain;
  dispatch(getRemoteDataEndSuccess(result));
}).catch(function (error) {
  return dispatch(getRemoteDataEndFail(error));
});