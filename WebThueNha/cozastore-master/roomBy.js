let url = new URL(location.href);
let idArea = url.searchParams.get("id");
let tokenData = localStorage.getItem("token") //forgot to close
if (tokenData == null) { // neu tokenData == null thi chuyen huong sang trang login
    window.location.href = "http://localhost:8080/login" // chuyen huong sang trang login
} else {
    console.log(tokenData); // in ra tokenData
}

// viet function show theo area bang ajax

function showRoom(arrDataRoom) {
    let str = "";
    for (const room of arrDataRoom) {
        str += ` 
                <!-- Block1 -->
            <div class="col-3">
					<!-- Block2 -->
					<div class="block2">
						<div class="block2-pic hov-img0">

							<img src="${room.imageMain}" alt="IMG-PRODUCT" width="250" height="300">


							<a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Chi tiết
							</a>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									${room.title}
								</a>

								<span class="stext-105 cl3" >
									$ ${room.price}
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
								</a>
							</div>
						</div>
					</div>
				</div>`
    }
    document.getElementById("showRoom").innerHTML = str;
}

function getAllByArea(idArea) {
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + tokenData
        },
        url:"http://localhost:8080/room/findAllByArea/"+idArea,
        success: function (data) {
            console.log(data);
            showRoom(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

getAllByArea(idArea);


