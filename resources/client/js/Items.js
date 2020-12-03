"use strict";
function getItemsList() {
    //debugger;
    console.log("Invoked getItemsList");     //console.log your BFF for debugging client side - also use debugger statement
    const url = "/items/list";    		// API method on web server will be in Users class, method list
    fetch(url, {
        method: "GET",				//Get method
    }).then(response => {
        return response.json();                 //return response as JSON
}).then(response => {
        if (response.hasOwnProperty("Error")) { //checks if response from the web server has an "Error"
        alert(JSON.stringify(response));    // if it does, convert JSON object to string and alert (pop up window)
    } else {
        formatItemsList(response);          //this function will create an HTML table of the data (as per previous lesson)
    }
});
}


function formatItemsList(myJSONArray){
    let dataHTML = "";
    for (let item of myJSONArray) {
        dataHTML += "<tr><td>" + "<a href='itempage.html'>" + item.ItemName +"</a>" + "<tr><td>";
    }
    document.getElementById("ItemsTable").innerHTML = dataHTML;
}



function getArmourList() {
    //debugger;
    console.log("Invoked getArmourList");     //console.log your BFF for debugging client side - also use debugger statement
    const url = "/items/specificlist/Armour";    		// API method on web server will be in Users class, method list
    fetch(url, {
        method: "GET",				//Get method
    }).then(response => {
        return response.json();                 //return response as JSON
    }).then(response => {
        if (response.hasOwnProperty("Error")) { //checks if response from the web server has an "Error"
            alert(JSON.stringify(response));    // if it does, convert JSON object to string and alert (pop up window)
        } else {
            formatArmourList(response);
        }
    });
}

function formatArmourList(myJSONArray){
    let dataHTML = "";
    for (let item of myJSONArray) {
        dataHTML += "<tr><td>" + "<a href='itempage.html'>" + item.ItemName +"</a>" + "<tr><td>";
    }
    document.getElementById("ItemsTable").innerHTML = dataHTML;

}




function getWeaponsList() {
    //debugger;
    String
    let searchValue;
    searchValue = 'Weapon';
    console.log("Invoked getWeaponsList");     //console.log your BFF for debugging client side - also use debugger statement
    const url = "/items/specificlist/Weapon";    		// API method on web server will be in Users class, method list
    fetch(url, {
        method: "GET",				//Get method
    }).then(response => {
        return response.json();                 //return response as JSON
    }).then(response => {
        if (response.hasOwnProperty("Error")) { //checks if response from the web server has an "Error"
            alert(JSON.stringify(response));    // if it does, convert JSON object to string and alert (pop up window)
        } else {
            formatWeaponsList(response);          //this function will create an HTML table of the data (as per previous lesson)
        }
    });
}

function formatWeaponsList(myJSONArray){
    let dataHTML = "";
    for (let item of myJSONArray) {
        dataHTML += "<tr><td>" + "<button onclick='clearTable(); setItemStats(" + JSON.stringify(item.ItemName) + ")'>" + item.ItemName +"</button>" + "<tr><td>";
    }
    document.getElementById("ItemsTable").innerHTML = dataHTML;
}

function setItemStats(Name){
    let dataHTML = "";
    let Table = document.getElementById("StatName");
    dataHTML = "<tr><td>" + Name +"<tr><td>";
    Table.innerHTML = dataHTML;
    getItemStats(Name);
}
function getItemStats(Name){
    //debugger;
    console.log("Invoked getItemStats()");     //console.log your BFF for debugging client side - also use debugger statement
    const url = "/items/get/" + Name;    		// API method on web server will be in Users class, method list
    fetch(url, {
        method: "GET",				//Get method
    }).then(response => {
        return response.json();                 //return response as JSON
    }).then(response => {
        if (response.hasOwnProperty("Error")) { //checks if response from the web server has an "Error"
            alert(JSON.stringify(response));    // if it does, convert JSON object to string and alert (pop up window)
        } else {
            formatItemStats(response);          //this function will create an HTML table of the data (as per previous lesson)
        }
    });

}
function formatItemStats(stats){
    let dataHTML = "";
    dataHTML += "<tr><td>" + stats.ItemType + "<tr><td>";

    document.getElementById("ItemType").innerHTML = dataHTML;

}

                              //paste in fetch from lesson 5 or 6, make the website look pretty and create/get/itemName api

function clearTable(){
    let Table = document.getElementById("ItemsTable");
    Table.innerHTML = "";
}