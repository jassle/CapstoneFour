
var cart = [];

function addItem(n, p, c) {



    var item =

        {

            name: n,

            price: p,

            count: c,

        };

    cart.push(item);

    listCart(cart);

    Total(cart);

}



function listCart(cart) {


    var table = document.getElementById("cart");

    table.innerHTML = "";

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);

    var cell2 = row.insertCell(1);

    var cell3 = row.insertCell(2);

    cell1.innerHTML = "Item Name";

    cell2.innerHTML = "Item Price";

    cell3.innerHTML = "Quantity";

    for (var i = 0; i < cart.length; i++) {

        var row = table.insertRow(1);

        cell1 = row.insertCell(0);

        cell2 = row.insertCell(1);

        cell3 = row.insertCell(2);

        cell1.innerHTML = cart[i].name;

        cell2.innerHTML = cart[i].price;

        cell3.innerHTML = cart[i].count;

    }

}



function Total(cart) {

    var subtotal = 0;

    for (var i = 0; i < cart.length; i++) {

        subtotal += parseFloat(cart[i].price);

    }

    var total = subtotal * 1.06;

    var table = document.getElementById('total');

    table.innerHTML = "";

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);

    var cell2 = row.insertCell(1);

    cell1.innerHTML = "subtotal";

    cell2.innerHTML = "total";



    row = table.insertRow(1);

    cell1 = row.insertCell(0);

    cell2 = row.insertCell(1);

    cell1.innerHTML = subtotal.toFixed(2);

    cell2.innerHTML = total.toFixed(2);

}























