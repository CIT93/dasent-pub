import {FORM,TBL} from "./global.js" 
import {saveLS} from "./storage.js"

const renderTblHeading = function () {
    const table = document.createElement("table");
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
        console.log(index)
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "last" && key !== "houseHoldPoints" && key !== "carbonHouseSizePoints" && key !== "foodCarbonTotal") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }

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
    } 
}

export { renderTbl, renderTblHeading }
