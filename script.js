// Title: Junior-level JavaScript coding challenge
// Name: Nur Hidayah
// Created by: 13/6-19/6/2022
// Submitted by: 19/6/2022

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
        `<thead>
        <tr class="header">
            <th>Name <div>Name</div></th>
            <th>Capital <div>Capital</div></th>
            <th>Region <div>Region</div></th>
            <th>Flag <div>Flag</div></th>
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
                <td><img src="${r.flags.png}" id="flag" width="50" /></td>          
            </tr>
            </tbody>`;
    }

    // Setting innerHTML as table variable
    document.getElementById("countries").innerHTML = table;
}

// search filter source code from: https://www.delftstack.com/howto/javascript/javascript-filter-table/#:~:text=Use%20getElementsByTagName()%20and%20indexOf,root%20node%20in%20the%20search.
function searchFilter() {
    var input, filter, table, tr, td, cell, i, j;
    filter = document.getElementById("search").value.toLowerCase();
    table = document.getElementById("countries");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        const tdArray = tr[i].getElementsByTagName("td");
        for (var j = 0; j < tdArray.length; j++) {
            const cellValue = tdArray[j];
            if (cellValue && cellValue.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            }
        }
    }
}