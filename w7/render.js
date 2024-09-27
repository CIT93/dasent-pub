const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");
import { carbonHousePoints } from "./addcarbonpts.js";
import { carbonHouseholdPts } from "./addcarbonpts.js";

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
        console.log(tr);
        
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const firstName = FORM.firstname.value;
const houseMembers = parseInt(FORM.housem.value);
const homeSize = FORM.houses.value;
const houseHoldPoints = carbonHouseholdPts(houseHoldMembers);
const carbonHouseSizePoints = carbonHousePoints(houseSize);
const total = houseHoldPoints + carbonHouseSizePoints;

function renderTbl(data) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = [firstName, houseMembers, homeSize, total]
    trTextArr.forEach(function (text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        
    })
    

    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    TBL.appendChild(table);
    
}

export { renderTbl };
