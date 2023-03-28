
async function preuzmi(){
    let drzave = await fetch("https://restcountries.com/v3.1/all");
    let resp = await drzave.json();
    let rs = "";
    
    let name;

    resp.map((el)=>{
        name = el.name;
    })

    for( i in resp){
        rs+= "<tr>";
        rs+= "<td>"+ i + "</td>"
        rs+= "<td>"+ resp[i].name.common + "</td>"
        // console.log(resp[i].name.common)
        rs+= "<td>"+ resp[i].capital + "</td>"
        rs+= "<td>"+ resp[i].population + "</td>"

        rs+= "<td><img src='"+ resp[i].flags.png+"' style ='height:120px;width:100%'</td>"
        rs+= "</tr>";
    }
    console.log(resp[0])
    
    console.log(name);
    document.getElementById("result").innerHTML = rs;
}
preuzmi()
