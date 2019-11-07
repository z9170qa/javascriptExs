const xhr = new XMLHttpRequest();
xhr.onload = () => output(xhr.responseText);
xhr.open('GET', "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
// xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

let data;
let main = document.getElementById("main");

function output(text) {
    data = JSON.parse(text);
    let el = document.createElement('p');
    el.innerText = "===============================================================" + "\n" +
    "Active: " + data.active + "\n" + "Formed: " + data.formed
    + "\n" + "Home Town: " + data.homeTown + "\n" + "Secret Base: " + data.secretBase; 
    // document.getElementById("main").appendChild(el);
    main.appendChild(el);
    printMembers(data.members);
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



