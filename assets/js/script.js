
var urlName = document.querySelector('#search-url');
var zipcode = document.querySelector('#zip-code'); 
var searchButton = document.querySelector('#search-button');

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
            console.log(companyZip)
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
                    console.log(totalTaxRate);
                });
            }else{
                console.log("error finding zip code, redacted for privacy")
            }
        });
}
searchButton.addEventListener('click',grabTax)

/* if(company.tax > .09 ){
  company.tax.color= red
}else if(company.tax < .071){
  company.tax.color = green
}else{
  company.tax.color = yellow
}
'website.blahh?search=' + name+ "&tax" */
