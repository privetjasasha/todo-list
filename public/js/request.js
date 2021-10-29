const request = {
    /**
     * @param {*} form
     * @param {function || false} callback() - function parameters (response_object, form)
     */
    post: function (form, callback = false) {
        let url = form.getAttribute('action'),
            data = new FormData(form);
    
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (callback !== false) {
                let response_object = JSON.parse(this.responseText);
                if (response_object.status == true) {
                    callback(response_object, form);
                }
            }
        };
        xhttp.open("POST", url);
    
        xhttp.send(data);
    },

    get: function (url, callback = false) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (callback !== false) {
                let response_object = JSON.parse(this.responseText);
                if (response_object.status == true) {
                    callback(response_object);
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    }
};