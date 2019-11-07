let output = document.getElementById('text');

function toggle() {
    if (output.value === 'OFF') {
        output.value = 'ON';
    }
    else {
        output.value = 'OFF';
    }
}
function reset() {
    output.value = 'OFF';
}  