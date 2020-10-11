import querystring from 'querystring'



export const RequestGetApi = (url: string, data?: any) => {
  let responseData:object;
  return new Promise(function(resolve, reject) {
    return fetch(url+'?'+querystring.stringify(data), {
      method: "GET",
        headers: {
          'Accept' : '*'
        },
      }
    )
    .then(response => {
      responseData = {status: response.status};
      return response.json()
    })
    .then(data => {
      resolve({...responseData, data: data});
    })
    .catch((e) => {
      reject(e)
    });
  });
}

export const RequestPostApi = (url: string, data?: any) => {
  let responseData:object;
  return new Promise(function(resolve, reject) {
    return fetch(url, {
        method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      .then(response => {
        responseData = {status: response.status};
        return response.json()
      })
      .then(data => {
        resolve({...responseData, data: data});
      })
      .catch((e) => {
        reject(e)
      });
  });
}

