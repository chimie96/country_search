// Title: Junior-level JavaScript coding challenge
// Name: Nur Hidayah
// Created by: 13/6-19/6/2022

// fetch from RESTful API. source from: restcountries.com
// display tabular data source code from: https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/

// api url
const api_url = "https://restcountries.com/v3.1/all";
  
// Defining async function
async function getCountry(api_url) {
    
    // Storing response
    const response = await fetch(api_url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

// Calling that async function
getCountry(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {

    let table = 
        `<thead class="header">
        <tr>
            <th class="header" scope="col">Name</th>
            <th class="header" scope="col">Capital</th>
            <th class="header" scope="col">Region</th>
            <th class="header" scope="col">Flag</th>
        </tr>
        </thead>`;
    
    // Loop to access all rows 
    for (let r of data) {
        table += 
            `<tbody>
            <tr> 
                <td>${r.name.common}</td>
                <td>${r.capital}</td>
                <td>${r.region}</td> 
                <td><center><img src="${r.flags.png}" id="flag" width="50" /></center></td>          
            </tr>
            </tbody>`;
    }

    // Setting innerHTML as table variable
    document.getElementById("countries").innerHTML = table;
}

// search filter name and capital. source code from: https://insidethediv.com/javascript-filter-table-row-single-and-multiple-columns
function searchFilter(){
    var filter, table, tr, i, name_column, capital_column, name_value, capital_value;
    filter = document.getElementById("search").value.toLowerCase();
    table = document.getElementById("countries");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++){
            name_column = tr[i].getElementsByTagName("td")[0];
            capital_column = tr[i].getElementsByTagName("td")[1];
            if(name_column && capital_column){
                name_value = name_column.textContent || name_column.innerText;
                capital_value = capital_column.textContent || capital_column.innerText;
                name_value = name_value.toLowerCase();
                capital_value = capital_value.toLowerCase();
                if((name_value.indexOf(filter) > -1) || (capital_value.indexOf(filter) > -1)){
                    tr[i].style.display = ""; // show
                }else{
                    tr[i].style.display = "none"; // hide
                }
            }
        }
}
