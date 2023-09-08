
function showC(arrDataCategory) {

    let str = '<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" onclick="getAllRoom()">\n' +
        '                    Tất cả các phòng\n' +
        '                </button>';

    for (const category of arrDataCategory) {
        str += ` 
                <!-- Block1 -->
                
                <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" onclick="getAllByCategory(${category.id})">
                    ${category.name}
                </button>
           `
    }
    document.getElementById("showCategory").innerHTML = str;
}

function getAllC() {
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + tokenData
        },
        url:"http://localhost:8080/category",
        success: function (data) {
            console.log(data);
            showC(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

getAllC();