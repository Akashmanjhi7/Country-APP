const container =document.querySelector(".container");
qrInput= container.querySelector(".form input");
genrateBtn= container.querySelector(".form button");
qrimg= container.querySelector(".qr-code img");

genrateBtn= addEventListener("click",() => {
    let qrvalue = qrInput.value;
    if(!qrvalue) return;
    // genrateBtn.innertext ="Genrating QR Code...";
    
    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=140x140&data= ${qrvalue}`;
    qrimg.addEventListener("load",() =>{

        container.classList.add("active");
        // genrateBtn.innertext ="Genrating QR Code..."
    });
});