//somma i valori assegnati agli elementi quando vengono selezionati
document.querySelector(".calc_btn").addEventListener("click", function () {
    //prezzo base
    var base = 2; 
    //prendi gli elem con checkbox input
    var check = document.querySelectorAll('input[type="checkbox"]'); 
    var addons = 0;

    for(var i=0; i<check.length; i++) {
        var elem = check[i]; 
        
        if (elem.checked) {
            addons += Number(elem.getAttribute("data-price"));  
        }
    }

    //calcola il prezzo
    var price = base + addons;
    console.log(price);
    document.getElementById("prezzo").innerHTML = "$ " + price;

});







