var formyForm = document.getElementById("formyForm");

formyForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

function convertTemp() {
    let tempInput = document.getElementById("tempValue").value,
        tempType = document.getElementsByName("tempType"),
        finalResult = document.getElementById("resultingTemp"),
        tLen = tempType.length,
        i = 0,
        output = "",
        scaleTemp = "",
        newTemp = 0;

    for (i; i < tLen; i += 1) {

        if (tempType[i].checked) {
            scaleTemp = tempType[i].value;
        } 

    }

    if (scaleTemp === "f") {
        newTemp = (tempInput - 32) / 1.8;
        output = Math.round(newTemp) + " C&deg;";        
    } else if (scaleTemp === "c") {
        newTemp = (tempInput * 1.8) + 32;
        output = Math.round(newTemp) + " F&deg;";
    } else {
        output = "Please choose temperature scale.";
    }

    finalResult.innerHTML = output;

}






