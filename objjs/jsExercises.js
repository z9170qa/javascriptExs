let output = document.getElementById('currentAge');


const person = {
    name: "Zak",
    age: 22,
    occupation: "Professional Shower Singer"};

    function ageUp() {
        output.value = (Number(output.value) + 1);
        alert("You made Zak older. His age is now: " + output.value);
    }

