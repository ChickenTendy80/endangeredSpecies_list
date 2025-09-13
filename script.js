// Form reading?

const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", function(event){
    event.preventDefault();
    const addressInput = document.getElementById("address");
    const radiusInput = document.getElementById("radius");

    addressValue = addressInput.value;
    radiusValue = radiusInput.value;

    console.log(addressValue + " " + radiusValue); 

    inputForm.reset();
})