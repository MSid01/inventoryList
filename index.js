var inventory_list = [{ item_name: "item", price: 89 }];
function addItem(item, price) {
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var item_name = newRow.insertCell();
    var itemText = document.createTextNode(item);
    item_name.appendChild(itemText);
    var item_price = newRow.insertCell();
    var priceText = document.createTextNode(price.toString());
    item_price.appendChild(priceText);
    var del_btn_cell = newRow.insertCell();
    var del_btn = document.createElement("button");
    var btnText = document.createTextNode("❌");
    del_btn.appendChild(btnText);
    del_btn.setAttribute("onclick", "deleteItem(this)");
    del_btn_cell.appendChild(del_btn);
}
function deleteItem(index) {
    var i = index.parentNode.parentNode.rowIndex;
    console.log(i);
    inventory_list.splice(i - 1, 1);
    var tbodyRef = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    tbodyRef.deleteRow(i);
}
function fillList() {
    inventory_list.map(function (item, index) {
        addItem(item.item_name, item.price);
    });
}
function addNewItem() {
    var item_name = document.getElementById("item_name");
    var item_price = document.getElementById("item_price");
    if (item_name.value.trim() === "" || isNaN(parseInt(item_price.value))) {
        alert("Please fill all the fields");
        return;
    }
    addItem(item_name.value, parseInt(item_price.value));
    inventory_list.push({ item_name: item_name.value, price: parseInt(item_price.value) });
}
fillList();
