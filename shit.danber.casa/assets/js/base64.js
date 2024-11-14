function convertToBase64() {
    // Get the input string
    const inputString = document.getElementById('inputString').value;
    
    // Convert the string to Base64
    const base64String = btoa(inputString);
    
    // Display the Base64 result
    document.getElementById('base64String').value = base64String;
}

function convertFromBase64() {
    // Get the Base64 string
    const base64String = document.getElementById('base64String').value;
    
    // Decode the Base64 string back to the original string
    const decodedString = atob(base64String);
        
    // Display the decoded string
    document.getElementById('outputString').value = decodedString;
}