update()
function getAndUpdate() {
    if (title.value != "" || description.value != "") {
        console.log("Updating List...");
        if (localStorage.getItem('itemsJson') == null) {
            itemJsonArray = [];
            itemJsonArray.push([title.value, description.value]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
        else {
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([title.value, description.value]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
        update();
        title.value = "";
        description.value = "";
    }
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;
    });
    if (str == "") {
        str = `
        <tr>
        <th scope="row">1</th>
        <td>Empty Note</td>
        <td>Add some Notes by giving it title and description above... <br>And Also The Delete Button doesnt work for sample Notes</td> 
        <td><button class="btn btn-sm btn-primary">Delete</button></td> 
        </tr>`;
    }

    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}