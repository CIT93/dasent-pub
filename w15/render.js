import {FORM,TBL} from "./global.js" 
import {saveLS} from "./storage.js"

const renderTblHeading = function () {
    const table = document.createElement("table");
    table.setAttribute("id", "table-id");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Food Choice", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);

    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = function(index, data){
    data.splice(index,1);
    saveLS(data); 
    renderTbl(data);
}
const renderTblBtn = function (obj,index,data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e){
        onUpdate(index,data);

    })

    btnEdit.addEventListener('click', function(e){
        FORM.firstName.value = obj.first;
        FORM.lastName.value = obj.last;
        FORM.housem.value = obj.houseMembers;
        FORM.houses.value = obj.houseSize;
        FORM.foodChoice.value = obj.foodChoice;
        onUpdate(index,data);


    })

    return td;
}

const renderTblBody = function(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj,index) {
        const tr = document.createElement("tr");
        const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
                keys.forEach(key => {
                    const td = document.createElement("td");
                    td.textContent = obj[key];
                    tr.appendChild(td);
                })
                
        const td = renderTblBtn(obj,index,data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}
const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0) {  
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
        calculateAvg(data);
    } 
}

const calculateAvg = (data) => {
    const reduceTotal = data.reduce ((sum,ea) => sum + ea.total,0);
    const tableRef = document.getElementById("table-id");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(0);
    let newCell3 = newRow.insertCell(0);
    let newCell4 = newRow.insertCell(0);
    let newLabl = document.createTextNode('Average FootPrint');
    let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
    newCell1.appendChild(newLabl);
    newCell.appendChild(newText);
  
  }

export { renderTbl, renderTblHeading}
