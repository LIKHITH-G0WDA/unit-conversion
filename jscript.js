function tmpre()
{
    var cl= document.getElementById("c").value;
    var fn=(cl*9/5)+32;
    document.getElementById("f").value=fn;


}

function wght()
{
    var kilo=document.getElementById("kg").value;
    var pou=kilo*2.205;
    document.getElementById("lbs").value=pou;
}

function dist()
{
    var kilo=document.getElementById("km").value;
    var mil=kilo/1.609;
    document.getElementById("m").value=mil;
}