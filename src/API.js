const API = () => {
    const url = 'https://google.com';

    const fetchDataCallback = (callback) => {
        fetch(url).then(res => res).then(res => callback(res))
    }

    return {
        fetchData: fetchDataCallback
    }
}

export default API();