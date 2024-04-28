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