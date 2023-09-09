let tokenData = localStorage.getItem("token") //forgot to close

if (tokenData == null) { // neu tokenData == null thi chuyen huong sang trang login
    window.location.href = "http://localhost:8080/login" // chuyen huong sang trang login
} else {
    console.log(tokenData); // in ra tokenData
}

function show(arrDataArea) {
    let str = "";
    let i = 1;
    for (const area of arrDataArea) {
        let categoryName= `category-${i}.jpg`;
        str += ` 
                <!-- Block1 -->
            <div class="col-3">
                <div class="block1 wrap-pic-w">
                    <img src="${categoryName}" alt="IMG-BANNER" width="300" height="300">

                    <a href="product.html?id=${area.id}"                                   
                       class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div class="block1-txt-child1 flex-col-l">

								<span class="block1-name ltext-102 trans-04 p-b-8">
									${area.name}
								</span>                                                   
                        </div>                      
                    </a>
                </div>
            </div>`
        i++;
    }
    document.getElementById("showArea").innerHTML = str;
}

function getAll() {
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + tokenData
        },
        url:"http://localhost:8080/area",
        success: function (data) {
           console.log(data);
            show(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

getAll();
