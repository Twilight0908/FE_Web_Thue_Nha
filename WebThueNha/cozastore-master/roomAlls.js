function showRoom(arrDataRoom) {
    let str = "";
    for (const room of arrDataRoom) {
        str += ` 
                <!-- Block1 -->
            <div class="col-3">
					<!-- Block2 -->
					<div class="block2">
						<div class="block2-pic hov-img0">

							<img src="${room.imageMain}" alt="IMG-PRODUCT" width="300" height="250">


							
					
							 <a href="product-detail.html?id=${room.id}" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								Chi tiết
							
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
							
								<a href="#" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
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

function getAllRoom() {
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': "Bearer " + tokenData
        },
        url:"http://localhost:8080/room",
        success: function (data) {
            console.log(data);
            showRoom(data);
        },
        error: function (err) {
            console.log(err);
        }
    })

}

getAllRoom();


function getAllByCategory(idCategory){
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + tokenData
        },
        url:"http://localhost:8080/room/findAllByCategory/"+idCategory,
        success: function (data) {
            console.log(data);
            showRoom(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}


getAllByCategory(0);