let tokenData = localStorage.getItem("token") //forgot to close

if (tokenData == null) { // neu tokenData == null thi chuyen huong sang trang login
    window.location.href = "http://localhost:8080/login" // chuyen huong sang trang login
} else {
    console.log(tokenData); // in ra tokenData
}

let url = new URL(location.href); // la 1 doi tuong URL cua JS de lay du lieu tu url
let idRoom = url.searchParams.get("id"); // lay id tu url

function showRoomById(idRoom) {
    $.ajax({
        type: "GET", // gui du lieu theo kieu post
        headers: {
            'Accept': 'application/json', // Để chỉ định rằng client mong muốn nhận dữ liệu dưới dạng JSON.
            "Authorization": "Bearer " + tokenData
        },
        url: "http://localhost:8080/room/detailRoom/"+idRoom,
        success: function (data) {
            console.log(data);
            document.getElementById("titleRoom").innerHTML = data.title;
            document.getElementById("priceRoom").innerHTML = data.square;
            document.getElementById("detailRoom").innerHTML = data.detail;
        },
        error: function (err) {
            console.log(err)
        }
    });
}

showRoomById(idRoom);