My Understanding of Code

We set the break point at renderTbl(cfpData) on the main.js file, this allows us to debug and see the code at certain lines in real time.

const table = renderTblHeading(); here we are declaring table is equal to the function of renderTBLHeading. 

TBL.innerHTML = "" , im not sure about this code and what it does for the function renderTBLHeading()

const table = document.createElement("table"); this is telling the function to create a table in the dom when table is used in the code

const thead = document.createElement("thead"); this is telling the function to create a head in the dom when thead is used in the code

const tr = document.createElement("tr"); this is telling the function to create a row in the dom when tr is used in the code

const headingTextArr = ["Name", "Footprint"]; this is establishing the text header in the dom when headingTXTArr is used in the code

   headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);

This is in the function to append the text and that text is append to the head and that head is apend to the row and display onto the DOM. It repeats itself until the array heading is complete. 

thead.appendChild(tr);
table.appendChild(thead);
return table;
}
these codes append the head to the table, and the row to the head in the DOM and return the table. (Not too sure.)


 const tbody = document.createElement("tbody"); this declare tbody value is to create a body in the DOM

 data.forEach(function (obj) {
        const tr = document.createElement("tr"); the value in tr is to create a row in the dom

        const tdName = document.createElement("td"); the value in tdName is to create a td in the dom

        tdName.textContent = obj.firstN; this is to get the object firstN and display it in the text content

        const tdTotal = document.createElement("td"); not sure what this does
        tdTotal.textContent = obj.carbTotal; get the total carbon footprint and display it in the text content

        tr.appendChild(tdName); append the name in the row
        tr.appendChild(tdTotal); append the total in the row
        tbody.appendChild(tr);     append the row to the body of the dom

  table.appendChild(tbody); append the body to the table

TBL.appendChild(table); append the table to TBL which is the tab data section  in the DOM


Response to Professor's Video.

This is a very helpful video and I appreciate you walk us throught the codes line by line and explain to us how it works. I will have to save this walk thru code video for future reviews. If there is any questions that arises, I will reach out.


Response to how to repopulate the value with the edit button

Professor, I am not sure how but I guess we can find a code that will repopulate the client's current input back to the DOM to allow edit. 
