function bigger(){
    //alert("Hello, world!");
    document.getElementById("textBox").style.fontSize = "24pt";
}

function styles(){
    alert("Styles changed")

    if(document.getElementById("fancy").checked){
        document.getElementById("textBox").style.fontWeight = "bold";
        document.getElementById("textBox").style.color = "blue";
        document.getElementById("textBox").style.textDecoration = "underline";
    }

    if(document.getElementById("boring").checked){
        document.getElementById("textBox").style.fontWeight = "normal";
        document.getElementById("textBox").style.color = "black";
        document.getElementById("textBox").style.textDecoration = "none";
    }
}

function moo(){
    document.getElementById("textBox").value = document.getElementById("textBox").value.toUpperCase();
    const text = document.getElementById("textBox");
    const splittext = text.value.split(".");
    const mootext = splittext.join("-Moo");
    text.value = mootext;
}