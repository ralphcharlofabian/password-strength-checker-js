
export const request = {
  post: async (url, params) => {
    return await fetch(url, {method: 'POST', ...params})
    .then(response => response.json())
    .then(data => {return data});
  },
  get: async (url, params) => {
    return await fetch(url, {method: 'GET', ...params})
    .then(response => response.json())
    .then(data => {return data});
  },
  delete: async (url, params) => {
    return await fetch(url, {method: 'DELETE', ...params})
    .then(response => response.json())
    .then(data => {return data});
  },
  put: async (url, params) => {
    return await fetch(url, {method: 'PUT', ...params})
    .then(response => response.json())
    .then(data => {return data});
  },
}