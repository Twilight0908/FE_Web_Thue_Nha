// let token = localStorage.getItem("token");

let showRoom = function (arr) {
    let str = '';
    for (const a of arr) {
        str += `<tr>
                <td>${a.id}</td>
                <td>${a.title}</td>
                <td>${a.square}</td>
                <td>${a.numberOfRooms}</td>
                <td>${a.numberOfWcRooms}</td>
                <td>${a.price}</td>
                <td><img src="${a.imageMain}" alt="${a.imageMain}" width="250" height="250"></td>
                <td>${a.status}</td>
                <td>${a.detail}</td>
                <td>${a.address}</td>
                <td>${a.category.name}</td>
                <td>${a.area.name}</td>
                <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editModal"
                                onclick="showRoomEdit(${a.id})">Edit
                </button></td>               
            </tr>`
    }
    document.getElementById("show").innerHTML = str;
}

let getAllRoom = function () {
    let settings = {
        "url": "http://localhost:8080/room",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        showRoom(response);
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}


let showCategory = function (arr) {
    let str = '';
    for (const a of arr) {
        str += `<option value="${a.id}">${a.name}</option>`
    }
    document.getElementById("categoryId").innerHTML = str;
    document.getElementById("categoryIdE").innerHTML = str;
}

let getAllCategory = function () {
    let settings = {
        "url": "http://localhost:8080/category",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        showCategory(response);
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}
let showArea = function (arr) {
    let str = '';
    for (const a of arr) {
        str += `<option value="${a.id}">${a.name}</option>`
    }
    document.getElementById("areaId").innerHTML = str;
    document.getElementById("areaIdE").innerHTML = str;
}

let getAllArea = function () {
    let settings = {
        "url": "http://localhost:8080/area",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        showArea(response);
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let addRoom = function () {
    let title = document.getElementById("title").value;
    let square = document.getElementById("square").value;
    let numberOfRooms = document.getElementById("numberOfRooms").value;
    let numberOfWcRooms = document.getElementById("numberOfWcRooms").value;
    let price = document.getElementById("price").value;
    let imageMain = document.getElementById("imageMain").value;
    let status = document.getElementById("status").value;
    let detail = document.getElementById("detail").value;
    let address = document.getElementById("address").value;
    let categoryId = document.getElementById("categoryId").value;
    let areaId = document.getElementById("areaId").value;

    let room = {
        title,
        square,
        numberOfRooms,
        numberOfWcRooms,
        price,
        imageMain,
        status,
        detail,
        address,
        category: {id: categoryId},
        area: {id: areaId}
    };

    let settings = {
        "url": "http://localhost:8080/room/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        "data": JSON.stringify(room),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        getAllRoom();
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let showRoomEdit = function (id) {
    let settings = {
        "url": `http://localhost:8080/room/edit/${id}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + token
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        document.getElementById("idE").value = response.id;
        document.getElementById("titleE").value = response.title;
        document.getElementById("squareE").value = response.square;
        document.getElementById("numberOfRoomsE").value = response.numberOfRooms;
        document.getElementById("numberOfWcRoomsE").value = response.numberOfWcRooms;
        document.getElementById("priceE").value = response.price;
        document.getElementById("imageMainE").value = response.imageMain;
        document.getElementById("statusE").value = response.status;
        document.getElementById("detailE").value = response.detail;
        document.getElementById("addressE").value = response.address;
        document.getElementById("categoryIdE").value = response.category.id;
        document.getElementById("areaIdE").value = response.area.id;
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}

let editRoom = function () {
    let id = document.getElementById("idE").value;
    let title = document.getElementById("titleE").value;
    let square = document.getElementById("squareE").value;
    let numberOfRooms = document.getElementById("numberOfRoomsE").value;
    let numberOfWcRooms = document.getElementById("numberOfWcRoomsE").value;
    let price = document.getElementById("priceE").value;
    let imageMain = document.getElementById("imageMainE").value;
    let status = document.getElementById("statusE").value;
    let detail = document.getElementById("detailE").value;
    let address = document.getElementById("addressE").value;
    let categoryId = document.getElementById("categoryIdE").value;
    let areaId = document.getElementById("areaIdE").value;

    let room = {
        id,
        title,
        square,
        numberOfRooms,
        numberOfWcRooms,
        price,
        imageMain,
        status,
        detail,
        address,
        category: {id: categoryId},
        area: {id: areaId}
    };

    let settings = {
        "url": `http://localhost:8080/room/edit/${id}`,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        "data": JSON.stringify(room),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        getAllRoom();
    }).fail(function (xhr, status, error) {
        console.log("Error:", error);
    });
}
