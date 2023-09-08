let token = localStorage.getItem("token");

let logout = function () {
    localStorage.removeItem("token");
    window.location.href = "../login/login-sign-up.html";
}

let showAccount = function (arr) {
    let str = '';
    for (const a of arr) {
        str += `<tr>
                <td>${a.id}</td>
                <td>${a.username}</td>
                <td>${a.password}</td>
                <td>${a.role.name}</td>
                <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editModal"
                                onclick="showEdit(${a.id})">Edit
                </button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal" 
                            onclick="getId(${a.id})">Delete
                </button></td>
            </tr>`
    }
    document.getElementById("show").innerHTML = str;
}

let getAllAccount = function () {
    let settings = {
        "url": "http://localhost:8080/account",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem("accountList", JSON.stringify(response));
        showAccount(response);
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let showRole = function (arr) {
    let str = '';
    for (const a of arr) {
        str += `<option value="${a.id}">${a.name}</option>`
    }
    document.getElementById("roleId").innerHTML = str;
    document.getElementById("roleIdE").innerHTML = str;
}

let getAllRole = function () {
    let settings = {
        "url": "http://localhost:8080/role",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        showRole(response);
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let addAccount = function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let roleId = document.getElementById("roleId").value;

    let account = {username, password, role: {id: roleId}};

    let settings = {
        "url": "http://localhost:8080/account/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        "data": JSON.stringify(account),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        getAllAccount();
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let checkAccount = function () {
    let usernameCheck = document.getElementById("username").value;
    let flag = false;
    for (const a of JSON.parse(localStorage.getItem("accountList"))) {
        if (a.username === usernameCheck) {
            flag = true;
            break
        }
    }

    if (!flag) {
        addAccount();
    } else {
        alert("Tai khoan da co");
    }
}

let showEdit = function (id) {
    let settings = {
        "url": `http://localhost:8080/account/edit/${id}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById("idE").value = response.id;
        document.getElementById("usernameE").value = response.username;
        document.getElementById("passwordE").value = response.password;
        document.getElementById("roleIdE").value = response.role.id;
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let editAccount = function () {
    let id = document.getElementById("idE").value;
    let username = document.getElementById("usernameE").value;
    let password = document.getElementById("passwordE").value;
    let roleId = document.getElementById("roleIdE").value;

    let account = {id, username, password, role: {id: roleId}};

    let settings = {
        "url": `http://localhost:8080/account/edit/${id}`,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        "data": JSON.stringify(account),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        getAllAccount();
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let deleteId;

let getId = function (id) {
    deleteId = id;
    document.getElementById("idToDelete").innerHTML = deleteId;
}

let deleteAccount = function (id) {
    let settings = {
        "url": `http://localhost:8080/account/delete/${id}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        getAllAccount();
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}
