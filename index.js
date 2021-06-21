// Add your code here

//Test 1 - Send Data
function submitData(userName, userEmail){  
    return fetch("http://localhost:3000/users", {   // Test 4 - Return the Fetch Chain
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
          })
    })

    // Test 2 - Handle the Response
    .then(resp => resp.json())
    .then(function(object) {
        const idNumber = document.createElement("p")
        idNumber.innerHTML =  object["id"]
        document.getElementsByTagName("body")[0].appendChild(idNumber)
    })

    // Test 3 - Handle Errors
    .catch(function(error){
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = error.message
        document.getElementsByTagName("body")[0].appendChild(errorMessage)
    })
  }
