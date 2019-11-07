const xhr = new XMLHttpRequest();
xhr.onload = () => output(xhr.responseText);
xhr.open('GET', "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json");
// xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

let data;
let searchKeyword = document.getElementById("searchIn");


function search(text) {
    data = JSON.parse(text);
    let el = document.createElement('p');
    

}

function printMembers(members) {
    members.map(m => {
        let p = document.createElement('p');
        x = m.powers.join(", ");
        p.innerText = "===============================================================" + "\n" + 
        "Member: " + m.name + "\n" + "Age: " + m.age + "\n" + 
        "Secret Identity: " + m.secretIdentity + "\n" + "Powers: " + x + "\n" + 
        "===============================================================";

        return p;
    }
    ).forEach(p => main.appendChild(p));
}