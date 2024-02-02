
fetch('https://whoisjsonapi.com/v1/{domain}', {
    method: 'GET',
    mode: 'no-cors',
})
    .then(function (response) {
        return response
    })
    .then(function (data) {
        console.log(data);
    });
