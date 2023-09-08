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
            window.location.href = "../admin/index.html";
        } else if (response.role.name === "ROLE_USER") {
            localStorage.setItem("token", response.token);
            window.location.href = "../cozastore-master/index.html";
        }
    }).fail(function (xhr, status, error) {
        alert("Sai Username/Password");
        window.location.href = "login-sign-up.html";
    });
}

let checkLogin = function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        login();
    } else {
        alert("ko");
    }
}

let signUp = function () {
    let usernameC = document.getElementById("usernameC").value;
    let passwordC = document.getElementById("passwordC").value;
    let roleId = 2;
    let accountC = {username: usernameC, password: passwordC, role: {id: roleId}};

    let settings = {
        "url": "http://localhost:8080/account/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(accountC),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert("tao thanh cong");
        window.location.href = "login-sign-up.html";
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
        alert("tao khong thanh cong");
        window.location.href = "login-sign-up.html";
    });
}

let checkSignUp = function () {
    let usernameT = document.getElementById("usernameC").value;
    let passwordT = document.getElementById("passwordC").value;

    if (usernameT !== "" && passwordT !== "") {
        checkSignUpAccount();
    } else {
        alert("ko");
    }
}

let checkSignUpAccount = function () {
    let usernameCheck = document.getElementById("usernameC").value;
    let flag = false;
    for (const a of JSON.parse(localStorage.getItem("accountList"))) {
        if (a.username === usernameCheck) {
            flag = true;
            break
        }
    }

    if (!flag) {
        signUp();
    } else {
        alert("Tai khoan da co");
    }
}
