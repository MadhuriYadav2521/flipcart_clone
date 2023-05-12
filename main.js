function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var confirmPassword = document.getElementById("userConfirmPassword").value
    // console.log(name,"name here");
    // console.log(email,"email here");
    // console.log(password,"password here");
    // console.log(confirmPassword,"confirmPassword here");

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {

                var LS = JSON.parse(localStorage.getItem("flipcartUsers")) || []

                var flagForEmail = false;
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].useremail == email) {
                        flagForEmail = true;
                    }
                }
                if (!flagForEmail) {
                    var data = {
                        namee: name,
                        useremail: email,
                        password: password,
                        confirmPassword: confirmPassword
                    }
                    LS.push(data);
                    localStorage.setItem("flipcartUsers", JSON.stringify(LS));
                    alert("registration successful")
                    window.location.href = "./login.html"
                    document.getElementById("userName").value = "";
                    document.getElementById("userEmail").value = "";
                    document.getElementById("userPassword").value = "";
                    document.getElementById("userConfirmPassword").value = "";

                } else {
                    alert("email already exist");
                }

            } else {
                alert("password not matched");
            }
        } else {
            alert("password should be 8 or more digit");
        }
    } else {
        alert("fill all the fields");
    }

}


function login(event) {
    event.preventDefault();
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var currentUser;
    if (email && password) {
        var flag = false;
        var LS = JSON.parse(localStorage.getItem("flipcartUsers"));
        for (var i = 0; i < LS.length; i++) {
            if (LS[i].useremail == email && LS[i].password == password) {
                flag = true;
                currentUser = LS[i];
            }
        }
        if (flag == true) {
            localStorage.setItem("flipcartCurrentUser", JSON.stringify(currentUser))
            alert("login successful")
            window.location.href = "./index.html";
        } else {
            alert("credentials not matched")
        }
    } else {
        alert("fill all the fields");
    }

}

function logout() {
    alert("We will miss you..")
    localStorage.removeItem("flipcartCurrentUser");
    window.location.reload();
}


function addProduct(event) {
    event.preventDefault();
    // alert("Product adding....")
    var proName = document.getElementById("pname").value;
    var proPrice = document.getElementById("pprice").value;
    var proImage = document.getElementById("pimage").value;
    var proColor = document.getElementById("pcolor").value;
    var proBrand = document.getElementById("pbrand").value;
    var product = { proName, proPrice, proImage, proColor, proBrand};

    var LS = JSON.parse(localStorage.getItem("flipcartProducts")) || [];
    LS.push(product);
    localStorage.setItem("flipcartProducts", JSON.stringify(LS));

    alert("Product Added Successfully.")
    // document.getElementById("pname").value = "";
    // document.getElementById("pprice").value = "";
    // document.getElementById("pimage").value = "";
    // document.getElementById("pcolor").value = "";
    // document.getElementById("pbrand").value = "";
}

