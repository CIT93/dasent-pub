import {FORM, TBL} from "./globally.js"
import {saveLS} from "./storage.js"
const renderTblHeading = function () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Energy", "Budget", "Dinner Meal", "Remaining Balance", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);

    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const renderTblBody = function(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj,index) {
        const tr = document.createElement("tr");
        for(const [key,value] of Object.entries(obj)) {
            if (key !=='dinnerPrep' && key !== 'dinnerCost') {   
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
                 
            }
        
        }
        const td = renderTblBtn(obj,index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
})
return tbody;

};

function onUpdate(index,data){
    data.splice(index, 1)
        saveLS(data)
        renderTbl(data)

}
function renderTblBtn(obj, index, data){
    console.log(data)
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    
    btnDel.addEventListener('click', function(e){
        onUpdate(index,data)

    })
    btnEdit.addEventListener('click', function(e){
        FORM[1].value = obj.energyLvl
        FORM[2].value = obj.budget
        FORM[3].value = obj.dinnerPrep
        onUpdate(index,data)
    })
    
    return td;
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

export {renderTbl}
