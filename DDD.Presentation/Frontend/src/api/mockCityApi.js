//import delay from './delay';
import { resolve } from 'url';
import Header from '../components/common/Header';
const fetch = require("node-fetch");


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CityApi {

    static getAllCities() {

        return new Promise((resolve, reject) => {
            fetch(window.location.origin + '/api/City')
                .then(response => response.json())
                .then(data => {
                    resolve(Object.assign([], data));
                });
        });
    }

    static loadCity(cityId) {

        const loadUrl = window.location.origin + '/api/City' + cityId;

        return new Promise((resolve, reject) => {
            fetch(loadUrl)
                .then(response => response.json())
                .then(data => {
                    resolve(Object.assign([], data));
                });
        });
    }

    static createCity(city) {
        city = Object.assign({}, city); // to avoid manipulating object passed in.

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(city)
        };

        const request = new Request(window.location.origin + '/api/City/', options);

        return new Promise((resolve, reject) => {
            fetch(request)
                .then(response => {
                    //console.log('response: ' + response + ']');
                    return response.json();
                })
                .then(data => {
                    resolve(Object.assign([], data));
                }).catch(error => {
                    reject(error);
                });
          
        });
    }

    static updateCity(city) {
        city = Object.assign({}, city); // to avoid manipulating object passed in.

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'PUT',
            headers,
            body: JSON.stringify(city)
        };

        const updateUrl = window.location.origin + '/api/City/' + city.cityId;

        const request = new Request(updateUrl, options);

        return new Promise((resolve, reject) => {
            fetch(request)
                .then(response => {
                    resolve(city);
                })
                .catch(error => {
                    reject(error);
                });

        });
    }

    static deleteCity(cityId) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'DELETE',
            headers
        };

        const deleteUrl = window.location.origin + '/api/City/' + cityId;

        const request = new Request(deleteUrl, options);

        return new Promise((resolve, reject) => {
            fetch(request)
                .then(response => {
                    resolve();
                }).catch(error => {
                    reject(error);
                });

        });
    }
}

export default CityApi;