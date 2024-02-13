
var urlName = document.querySelector('#search-url');
var zipcode = document.querySelector('#zip-code'); 
var searchButton = document.querySelector('#search-button');
var returnTax = document.querySelector('#return-tax');
var returnZip = document.querySelector('#return-zip');
var tableRoot = document.querySelector('#table-root');

// function to grab tax information from urllookup api. 
var grabTax = function(event){
    event.preventDefault();
    console.log("button click successful");
    fetch('https://api.api-ninjas.com/v1/urllookup?url=' + urlName.value, {
        method: 'GET',
        headers: {
        'X-Api-Key': 'q4Zaxex+vW0+7EKi63fEIw==wDXzY9E7RwxLv6Ub',
        },
    })
        .then(function (response) {
            return response.json();
    })
        .then(function (data) {
            console.log(data)
            companyZip = data.zip;
            tableRoot.children[0].textContent = urlName.value;
            tableRoot.children[1].textContent = companyZip;
            localStorage.setItem('Company Zip ', companyZip)
            localStorage.setItem('URL ', urlName)       
// if zip not empty lookup sales tax based on returned zip 
            if(companyZip != ""){ 
                fetch('https://api.api-ninjas.com/v1/salestax?zip_code=' + companyZip, {
                    method: 'GET',
                    headers: {
                    'X-Api-Key': 'q4Zaxex+vW0+7EKi63fEIw==wDXzY9E7RwxLv6Ub',
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (data2) {
                    console.log(data2)
                    totalTaxRate = data2[0].total_rate;
                    tableRoot.children[2].textContent = totalTaxRate;
                });
            }else{
                tableRoot.children[1].textContent = "error finding zip code, redacted for privacy";
                tableRoot.children[2].textContent = "Null";
            }
        });
}
searchButton.addEventListener('click',grabTax)
