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
    
    var coupon = ["ABCDE12345", "ABCDE67890", "FGHIL12345", "FGHIL67890"];
    var c_utente = document.getElementById("cpn").value;

    
        if (coupon.includes(c_utente)) {
            var new_price = Math.round(((price - ((price / 100) * 20))) * 100) / 100.0;
            document.getElementById("prezzo").innerHTML = "$ " + new_price;
            console.log(new_price);
        } else{
            document.getElementById("prezzo").innerHTML = "$ " + price;
            console.log(price);
        }

});








