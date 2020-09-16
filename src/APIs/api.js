import urls from '../data/urls.json'
import axios from 'axios'

const api = () => {


    const post = (endPoint = '', params = {}, header = {}, body = {}) => {
        return axios({method: 'POST', url: `${urls.apiBaseUrl}/${endPoint}/`, params: params, headers: header, data: body })
    }
    const get = (endPoint = '', params = {}, header = {}, body = {}) => {
        return axios({method: 'GET', url: `${urls.apiBaseUrl}/${endPoint}/`, params: params, headers: header, data: body})
    }
    const put = (endPoint = '', params = {}, header = {}, body = {}) => {
        return axios({method: 'PUT', url: `${urls.apiBaseUrl}/${endPoint}/`, params: params, headers: header, data: body})
    }
    const del = (endPoint = '', params = {}, header = {}, body = {}) => {
        return axios({method: 'DELETE', url: `${urls.apiBaseUrl}/${endPoint}/`, params: params, headers: header, data: body})
    }
    const patch = (endPoint = '', params = {}, header = {}, body = {}) => {
        return axios({method: 'PATCH', url: `${urls.apiBaseUrl}/${endPoint}/`, params: params, headers: header, data: body})
    }

    return {
        post,
        get,
        put,
        del,
        patch

    }

}

export default api