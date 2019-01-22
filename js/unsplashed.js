$(document).ready(function() {
    //feed to parse
    //var feed = "https://api.unsplash.com/users/crisstauter/collections/3858845?client_id=67554b521283b042dbf1ca2fb73f5f783ab523a571ee81d44dcd0a18ff368bfb";
    var feed = "https://api.unsplash.com/collections/3858845/photos?client_id=67554b521283b042dbf1ca2fb73f5f783ab523a571ee81d44dcd0a18ff368bfb";
 
    $.ajax(feed, {
 
        dataType:"json",
        success:function(data) {
            console.log(data);
            //console.log(data[0].preview_photos[0].urls.full);
            $(data).each(function () {
                //console.log($(this)[0].description);
                //console.log($(this)[0].urls.full);
                var el = $(this);
                var mediaimage = "<div class='col-3-lg col-md-3 col-sm-6'><div class=''>";
                mediaimage += "<img class='blog_image' alt='' src='" + el.find($(this)[0].urls.full).text() + "'/>";
                mediaimage += "</div></div>";
        $(media_container).append(mediaimage);
 
            });
 
        }   
    }); 
});

 