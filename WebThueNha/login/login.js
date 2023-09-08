let login = function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let account = {username, password};

    let settings = {
        "url": "http://localhost:8080/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(account),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.role.name === "ROLE_ADMIN") {
            localStorage.setItem("token", response.token);
            // window.location.href = "admin.html";
            window.location.href = "../cozastore-master/index.html";
            // window.location.href = "../cozastore-master/product.html";
        } else if (response.role.name === "ROLE_USER") {
            localStorage.setItem("token", response.token);
            window.location.href = "user.html";
        }
    }).fail(function (xhr, status, error) {
        alert("Sai Username/Password");
        window.location.href = "login-sign-up.html";
    });
}