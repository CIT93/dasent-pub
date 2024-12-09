import {FORM,TBL} from "./global.js" 
import {saveLS} from "./storage.js"

const renderTblHeading = function () {
    const table = document.createElement("table");
    table.setAttribute("id", "table-id");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
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
        FORM.foodSource.value = obj.foodSource;
        FORM.water.value = obj.waterValue;
        FORM.dish_washer.checked = obj.both;
        FORM.houseItem.value = obj.houseItemPts;
        FORM.garbage.value = obj.garbagePts;
        FORM.glass.checked = obj.recycle.glass;
        FORM.plastic.checked = obj.recycle.plastic;
        FORM.steel.checked = obj.recycle.steel;
        FORM.paper.checked = obj.recycle.paper;
        FORM.food.checked = obj.recycle.food;
        FORM.aluminum.checked = obj.recycle.aluminum;
        FORM.myCar.value = obj.myCarPts;
        FORM.pubTrans.value= obj.pubTransPts;
        FORM.airplane.value= obj.airplanePts;
        onUpdate(index,data);

    })

    return td;
}

const renderTblBody = function(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj,index) {
        const tr = document.createElement("tr");
        const keys = ["first", "last", "total"]
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
    let newTR = tableRef.insertRow(-1);
    let newTD = newTR.insertCell(0);
    let newTD1 = newTR.insertCell(0);
    let newTD2 = newTR.insertCell(0);
    let newLabl = document.createTextNode('Average FootPrint');
    let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
    newTD1.appendChild(newLabl);
    newTD.appendChild(newText);
  
  }

export { renderTbl, renderTblHeading}
