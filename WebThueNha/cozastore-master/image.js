
function showImage(arrDataImage) {
    let str = "";
    for (const image of arrDataImage) {
        str += `
<div class="wrap-slick3 flex-sb flex-w">
<div class="wrap-slick3-dots"></div>
<div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

<div class="slick3 gallery-lb">
<div class="item-slick3" data-thumb="${image.name}">
<div class="wrap-pic-w pos-relative">
<img src="${image.name}" width="250" height="400">

<a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${image.name}">
<i class="fa fa-expand"></i>
</a>
</div>
</div>

</div>
</div>`
    }
    document.getElementById("showImage").innerHTML = str;
}

function getAllImageByID(idRoom) {
    $.ajax({
        type:"GET",
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + tokenData
        },
        url:"http://localhost:8080/image/findAllByRoom/"+idRoom,
        success: function (data) {
            console.log(data);
            showImage(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}
getAllImageByID(idRoom)