function dessiner(){
    var rows= document.getElementById('rows').value;
    var cols= document.getElementById('cols').value;
    var ecran = document.getElementById('ecran');
    ecran.innerHTML = makeTable(rows, cols);

}
var color = '';
function makeTable(r, c){
    var table = "<table border='1' >";
    for (var i = 0; i<r ; i++){
        table+= "<tr>";
        for (var j=0; j<c; j++){
            //table += "<td>"+i+","+j+"</td>";

            table+= "<td onclick='colorer(this, event)'></td>";
        }
        table+= "</tr>";
    }
    
    table += "</table>";
    return table;
}
function colorer(td, evt){
    td.style.backgroundColor= color;
    console.log(evt);
}