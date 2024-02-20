const allBtn = document.getElementsByClassName("ticket");
let count = 0;
let deduct = 8;
let clas = "Economy";



for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        deduct = deduct - 1;
         clas = "Economy" 

         const selectTicket = e.target.innerText;
         const ticketClass = e .target.value = clas;
         const priceTicket = e .target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[5].childNodes[9].childNodes[3].childNodes[0].innerText;

         const selectInfo = document.getElementById("seat-info");
 
         const li = document.createElement("li");
 
         const p = document.createElement("p");
         p.innerText = selectTicket;
         const p2 = document.createElement("p");
         p2.innerText = ticketClass;
         const p3 = document.createElement("p");
         p3.innerText = priceTicket;
         
 
         li.appendChild(p);
         li.appendChild(p2);
         li.appendChild(p3);
        
         selectInfo.appendChild(li);

         const ttlPrice = document.getElementById("ttl-price").innerText;

         const convertedTtlPrice = parseInt(ttlPrice);
         const sum = convertedTtlPrice + parseInt(priceTicket);
         
         
       
       setInnerText("ttl-price", sum); 
       setInnerText("ttl-ticket", count) 
       setInnerText("rest-ticket", deduct)
    });
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



