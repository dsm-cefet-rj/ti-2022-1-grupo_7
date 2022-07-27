import { store } from './store';
import { logout } from "./UserSlice";

async function client(endpoint, { body, ...customConfig } = {}) {
    const headers = { 'Content-Type': 'application/json' }
    const { user: { token } } = store.getState();

    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
        'Authorization': token && `Bearer ${token}`
      }
    }

    if (body) {
      config.body = JSON.stringify(body)
    }

    let data, response
    try {
      response = await window.fetch(endpoint, config)
      data = await response.json()
      if (response.ok) {
        return data
      }
      throw new Error(response.statusText)
    } catch (err) {
      if (response.status == 401) {
        store.dispatch(logout());
      }
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