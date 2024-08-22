/* eslint-disable no-shadow */
/* eslint-disable handle-callback-err */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */


export const GET = (url, props, token, dispatch, callBack) => {

    let header = (token == null) ?
        { "Accept-language": "en-US" } :
        {
            "Accept-language": "en-US",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "GET",
        headers: header,
    }).then(result => result.json()
        .then(response => {
            let responseData = response;
            if (result.status == 401) {
                callBack({ status_code: result.status, status: false, props });
            } else {
                if (responseData != null) {
                    callBack({ status_code: result.status, status: true, responseData });
                } else {
                    callBack({ status_code: result.status, status: false, responseData: { 'message': "Invalid Credential" } });
                }
            }

        }))
        .catch(err => {
            console.log("Error", err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}


export const GET_WITHOUT_LOAD = (url, props, token, dispatch, callBack) => {
    let header = (token == null) ?
        { "content-type": "application/json; charset=utf-8" } :
        {
            "content-type": "application/json; charset=utf-8",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "GET",
        headers: header,
    })
        .then(result => result.json()
            .then(response => {
                let responseData = response;
                if (result.status == 401) {
                    callBack({ status_code: result.status, status: false, props });

                } else {
                    if (responseData != null) {
                        callBack({ status_code: result.status, status: true, responseData });
                    } else {
                        callBack({ status_code: result.status, status: false, responseData: { 'message': "Invalid Credential" } });
                    }
                }
            }))
        .catch(err => {
            console.log(err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}



export const POST_MULTIPART_DATA = async (url, props, token, requestBody, dispatch, callBack) => {
    let header = (token == null) ?
        { "content-type": "application/json; charset=utf-8" } :
        {
            "content-type": "application/json; charset=utf-8",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "POST",
        body: requestBody,
        headers: header
    }).then(result => result.json()
        .then(response => {
            let responseData = response;
            if (result.status == 401) {
                callBack({ status_code: result.status, status: false, props });
            } else {
                callBack(responseData);
            }
        }))
        .catch(err => {
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}



export const POST = async (url, requestBody, callBack) => {
    fetch(url, {
        method: "POST",
        body: requestBody,
    }).then(response => response.json())
        .then(response => {
            let responseData = response;
            callBack({ status: response.status, responseData });
        })
        .catch(err => {
            console.log("Error", err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}


export const POST_WITHOUT_LOAD_MULTIPART_DATA = async (url, requestBody, callBack) => {
    fetch(url, {
        method: "POST",
        body: requestBody,
        headers: { "content-type": "application/json; charset=utf-8", }
    }).then(response => response.json())
        .then(response => {
            let responseData = response;
            callBack(responseData);
        })
        .catch(err => {
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}


export const GET_WITHOUT_LOAD_TEST = (url, token, callBack) => {
    let header = (token == null) ?
        { "content-type": "application/json; charset=utf-8" } :
        {
            "content-type": "application/json; charset=utf-8",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "GET",
        headers: header,
    })
        .then(result => result.json()
            .then(response => {
                let responseData = response;
                if (responseData != null) {
                    callBack({ status_code: result.status, status: true, responseData });
                } else {
                    callBack({ status_code: result.status, status: false, responseData: { 'message': "Invalid Credential" } });
                }
            }))
        .catch(err => {
            console.log(err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}


export const GET_WITHOUT_TOKEN = (url, dispatch, callBack) => {
    fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
        },
    })
        .then(result => result.json()
            .then(response => {
                let responseData = response;
                if (responseData != null) {
                    callBack({ status_code: result.status, status: true, responseData });
                } else {
                    callBack({ status_code: result.status, status: false, responseData: { 'message': "Invalid Credential" } });
                }
            }))
        .catch(err => {
            console.log(err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}


export const GET_WITHOUT_LOAD_AUTH = (url, token, callBack) => {
    let header = (token == null) ?
        { "content-type": "application/json; charset=utf-8" } :
        {
            "content-type": "application/json; charset=utf-8",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "GET",
        headers: header,
    })
        .then(result => result.json()
            .then(response => {
                let responseData = response;
                if (responseData != null) {
                    callBack({ status_code: result.status, status: true, responseData });
                } else {
                    callBack({ status_code: result.status, status: false, responseData: { 'message': "Invalid Credential" } });
                }
            }))
        .catch(err => {
            console.log(err)
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}

export const GET_NORMAL = async (url, callBack) => {
    fetch(url, {
        method: "GET",
        headers: {
            'accept': 'text/plain'
        }
    }).then(response => response.text()
        .then(response => {
            let responseData = response;
            callBack(responseData);
        }))
        .catch(err => {
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}

export const POST_MULTIPART_IMAGE_DATA = async (url, props, token, requestBody, dispatch, callBack) => {
    let header = (token == null) ?
        {
            "Content-type": "application/json",
            "Accept": "application/jpg"
        }
        :
        {
            "Content-type": "application/json",
            "Accept": "application/jpg",
            "Authorization": `bearer ${token}`
        }
    fetch(url, {
        method: "POST",
        body: requestBody,
        headers: header
    }).then(response => response.blob()
        .then(response => {
            let responseData = response;
            callBack(responseData);
        }))
        .catch(err => {
            callBack({ status: false, responseData: { 'message': 'Something went wrong..' } });
        });
}
