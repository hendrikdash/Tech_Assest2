import querystring from 'querystring'


export const RequestGetApi = (url: string, data?: any) => {
    let responseData:object;
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
      return ({...responseData, data: data})
    });
}

export const RequestPostApi = (url: string, data?: any) => {
  return fetch(url, {
    method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  .then(response => response.json())
  .then(data => data);
}

