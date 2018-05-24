//var cart = [];

//function addItem(n, p, c) {
//    var item =
//        {
//            name: n,
//            price: p,
//            count: c
//        };
//    cart.push(item);
//    printCart(cart);
//    TotalCost(price);
//}



//function printCart(cart) {

//    // Find a <table> element with id="myTable":

//    var table = document.getElementById("cart");

//    table.innerHTML = "";

//    for (var i = 0; i < cart.length; i++) {

//        var row = table.insertRow(0);



//        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:

//        var cell1 = row.insertCell(0);

//        var cell2 = row.insertCell(1);

//        var cell3 = row.insertCell(2);

//        //table.

//        // Add some text to the new cells:

//        cell1.innerHTML = cart[i].name;

//        cell2.innerHTML = cart[i].price;
//        cell3.innerHTML = cart[i].count;



//    }

//}

//function TotalCost(price) {

//    total = 0;

//    for (var i in cart) {

//        total += cart[i].price;

//    }



//    document.getElementById('TotalCost').innerHTML += `<tr><td></td><td>$${total}</td></tr>`;

//}

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
}

function listCart(cart) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("cart");
    table.innerHTML = "";

    for (var i = 0; i < cart.length; i++) {
        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = cart[i].name;
        cell2.innerHTML = cart[i].price;
        cell3.innerHTML = cart[i].count;
    }
}

function Total(cart) {
    var subtotal = 0;
    for (var i = 0; i <= cart.length; i++) {

        subtotal = item.price++;
    }
    var total = subtotal * 1.06;
    
    var table = document.getElementById('total');
    table.innerHTML = ""; {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = subtotal;
        cell2.innerHTML = total;
    }
}
























