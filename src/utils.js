async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    credentials: 'include',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}
  
export const httpGet = async function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

export const httpPost = async function (endpoint, body, customConfig = {}) {
  return client(endpoint, {body, ...customConfig, method: 'POST'})
}

export const httpPut = async function (endpoint, body, customConfig = {}) {
  return client(endpoint, {body, ...customConfig, method: 'PUT'})
}

export const httpDelete = async function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'DELETE' })
}

export const formatData = function(date) {
  var data = new Date(date),
  dia  = (data.getDate()).toString(),
  diaF = (dia.length === 1) ? '0'+dia : dia,
  mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
  mesF = (mes.length === 1) ? '0'+mes : mes,
  anoF = data.getFullYear();

  return diaF+"/"+mesF+"/"+anoF;
}

export function adiarData(dataString, diasDeAcrescimo) {
  let dataArr = dataString.split("/");
  let data = new Date(dataArr[2], (dataArr[1] - 1), dataArr[0]);
  data.setDate(data.getDate() + diasDeAcrescimo);

  return  formatData(data);
}