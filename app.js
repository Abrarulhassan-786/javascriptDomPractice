//------------------Reading and setting paragraph text--------------------
function addmyData(){
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore voluptatum, explicabo nostrum  repellendus voluptas facilis sapiente enim quaerat laborum maiores excepturi exercitationem placeat dignissimos et molestiae dolore quam voluptatibus."
    document.getElementById("para").innerHTML = text;
}
function showlist(){
    var listcreate = '<ul><li>Abrar</li><li>Zain</li><li>Khalid</li></ul>';
    document.getElementById("listcreate").innerHTML = listcreate;
}
function makeinvisiable(){
    document.getElementById("imag").className = "hidden" ;
}
function changeImageSize(){
    console.log("hi")
    document.getElementById("p").className = "big"
}
function swapimage(id,newimage){
    var image = document.getElementById(id);
    image.src = newimage;
}

function address(){
    console.log("hi")
    var linkA = document.getElementById("link");
    linkA.href;
}