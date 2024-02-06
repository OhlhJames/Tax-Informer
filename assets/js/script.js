
var urlName = document.querySelector('#search-url');
var zipcode = document.querySelector('#zip-code'); 
var searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click',grabTax)
var grabTax = function(){
    console.log("button click successful")
    fetch('https://api.api-ninjas.com/v1/urllookup?url=' + urlName, {
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
        fetch('https://api.api-ninjas.com/v1/salestax?zip_code=' + companyZip, {
            method: 'GET',
            headers: {
            'X-Api-Key': 'q4Zaxex+vW0+7EKi63fEIw==wDXzY9E7RwxLv6Ub',
        },
        })
            .then(function (response) {
            return response.json();
        })
            .then(function (data2) {
            console.log(data2)
            totalTaxRate = data2[0].total_rate;
            console.log(totalTaxRate);
        });
});
}

/* if(company.tax > .09 ){
  company.tax.color= red
}else if(company.tax < .071){
  company.tax.color = green
}else{
  company.tax.color = yellow
}
'website.blahh?search=' + name+ "&tax" */
