// let currentSelectedClassID;
// let quantity = localStorage.getItem("cartQuantity");
// let shoppingCart = localStorage.getItem("cart")==null ? [] : JSON.parse(localStorage.getItem("cart"));
// $("#quantity").html(quantity);

$(document).ready(function () {
    getAll();

    function getAll() {
        $("tbody").empty(); //xóa hết những nội dung trong thân tbody
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
            },
            url: "http://localhost:8080/room",
            success: function (data) {
                getRoomData(data);
            },
            error: function (err) {
                console.log(err) // lỗi
            }
        });
    }

    function getRoomData(arr) {
        let str = ``;
        for (let i = 0; i < arr.length; i++) {
            str += `

            <div class="col-4 block2" style="margin-top: 10px">
                    <div class="block2-pic hov-img0">
                        <img src="${arr[i].imageMain}" alt="IMG-PRODUCT" id="roomImg" width="350" height="300">
                        <a href="#"
                            class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            Quick View
                        </a>
                    </div>

                    <div class="block2-txt flex-w flex-t p-t-14">
                        <div class="block2-txt-child1 flex-col-l ">
                            <a href="" id="roomTitle"
                               class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6" style="font-size: 22px">${arr[i].title}</a>
                            <span class="stext-105 cl3" id="roomPrice" style="font-size: 22px">${arr[i].price}$</span>
                        </div>

                        <div class="block2-txt-child2 flex-r p-t-3">
                            <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png"
                                     alt="ICON">
                                <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png"
                                     alt="ICON">
                            </a>
                        </div>
                    </div>
                </div>
            `
            document.getElementById("body").innerHTML = str;
        }
    }
});






