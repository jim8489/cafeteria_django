var nam = document.querySelector('#name')
var size = document.querySelector('#size')
var price = document.querySelector('#price')
var bill = document.querySelector('#total')

function shoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;

    nam.innerHTML = '<h3>Name</h3>';
    size.innerHTML = '<h3>Size</h3>';
    price.innerHTML = '<h3>Price</h3>';
    
    for(let i = 0; i < cartSize; i++) {
        //butt = '<div class="del" onclick="removePizza(' + i + ')">x</div>';
        nam.innerHTML += '<h4>' + orders[i][0] + '</h4>'
        size.innerHTML += '<h4>' + orders[i][1] + '</h4>'
        price.innerHTML += '<h4>' + orders[i][2] + '</h4>'
    }
    bill.innerHTML = 'Total: ' + total + ' $'; 
}

shoppingCart();