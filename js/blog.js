$(document).ready(function () {
    //feed to parse
    var feed = "https://news.lvhn.org/tagfeed/en-us/tags/blog";
    $.ajax(feed, {
        accepts: {
            xml: "application/rss+xml"
        },
        dataType: "xml",
        success: function (data) {
            $(data).find("item").each(function (index) {
                if (index > 4) {
                    return false;
                }
 
                if (index == 1) {
                    var el = $(this);
                    var myblogheader = "<div class='container'><div class='col-sm-12 col-md-12 col-lg-12'>";
                    myblogheader += "<img class='blog_image' alt='' src='" + el.find("pp\\:image").text() + "'/>";
                    myblogheader += "<div class='header_blog_text'><a href='" + el.find("link").text() + "'><h2 class='header_blog_title'>" + el.find("title").text() + "</h2></a>";
                    myblogheader += "<div class='header_blog_date'><p>" + moment(el.find("pubDate").text()).format("MMMM Do YYYY") + "</p>";
                    myblogheader += "</div></div>";
 
                    $(header_post).append(myblogheader);
                } else {
                    var el = $(this);
                    var myblogpost = "<div class='col-3-lg col-md-3 col-sm-6'><div class=''>";
                    myblogpost += "<img class='blog_image' alt='' src='" + el.find("pp\\:image").text() + "'/>";
                    myblogpost += "<div class='sub_blog_title'><a href='" + el.find("link").text() + "'><h2 class='blog_title'>" + el.find("title").text() + "</h2></a>";
                    myblogpost += "<div class='blog_date'><p>" + moment(el.find("pubDate").text()).format("MMMM Do YYYY") + "</p>";
                    //removed description because HTML might get mangled. SHould use Summary with text
                    // myblogpost += "<div class=''>" + el.find("description").text().substring(0, 100) +"</div>";
                    myblogpost += "</div></div>";
 
                    $(blogcontainer).append(myblogpost);
                }
                 
            });
        }
    });

});