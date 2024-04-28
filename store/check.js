function checkForBlank(){
    if(
    document.getElementById('id').value == "" || document.getElementById('name').value == "" || 
    document.getElementById('email').value == "" || document.getElementById('number').value == "")
    {
        alert('Please fill required cells');

        document.getElementById("id").style.borderColor = "red";
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("number").style.borderColor = "red";

    }
}

function toggleDivAndNavigate() {
    var message = document.getElementById('message');
    var shadow = document.getElementById('shadow');
    var nav = document.getElementById('nav');
    var form = document.getElementById('form');
    var footer = document.getElementById('footer');
    var conf = document.getElementById('conf');
    var msgs = document.getElementById('msgs');

    // Check if the elements are currently blurred or not
    var isBlurred = message.style.display === 'block';

    if (isBlurred) {
        // If currently blurred, hide the elements and remove the blur effect
        message.style.display = 'none';
        shadow.style.display = 'none';
        nav.style.filter = "none";
        form.style.filter = "none";
        footer.style.filter = "none";
        msgs.style.filter = "none";
        conf.innerHTML = "End Shopping";
    } else {
        // If not blurred, show the elements and apply the blur effect
        message.style.display = 'block';
        message.style.filter = "blur(none)";
        shadow.style.display = 'block';
        nav.style.filter = "blur(5px)";
        form.style.filter = "blur(5px)";
        footer.style.filter = "blur(5px)";
        msgs.style.filter = "blur(5px)";
        conf.innerHTML = "Close";
    }
}

var rand = document.getElementById("p1");

function generateRandomNumber() {
    // Generate a random number between 100000 and 999999
    var randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    // Set the innerHTML after generating the random number
    rand.innerHTML = "Your order number is: " + randomNumber;

    // Return the generated random number if needed
    return randomNumber;
}

generateRandomNumber();


