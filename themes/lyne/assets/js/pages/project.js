$(document).ready(function () {
    $('#gallery').imagesGrid({
        images: [
            '/themes/lyne/assets/images/project/1.png',
            '/themes/lyne/assets/images/project/2.png',
            '/themes/lyne/assets/images/project/3.png',
            '/themes/lyne/assets/images/project/4.png'
        ]
    });

    $('.imgs-grid .imgs-grid-image .image-wrap img').each(function () {
        const url = $(this).attr('src');
        const img = new Image();
        img.onload = () => {
            console.log("Intrinsic size: " + img.width + "x" + img.height);
            if (img.width >= 1024) {
                $(this).parent().parent().addClass('full-width')
            }
        };
        img.src = url;
    })
})
