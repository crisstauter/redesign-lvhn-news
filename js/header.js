$(document).ready(function() {
	<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	//feed to parse
	var feed = "https://news.lvhn.org/tagfeed/en-us/tags/blog";
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			$(data).find("item").each(function (index) { 
        if (index > 0) {
          return false;
        }
				var el = $(this);
        var myblogheader = "<div class='container'><div class='col-sm-12 col-md-12 col-lg-12'>";
        myblogheader += "<img class='blog_image' alt='' src='" + el.find("pp\\:image" ).text() + "'/>";

        myblogheader += "<div class='header_blog_text'><a href='"+ el.find("link").text()+"'><h2 class='header_blog_title'>" + el.find("title").text() +"</h2></a>";
        myblogheader += "<div class='header_blog_date'><p>" + moment(el.find("pubDate").text()).format("MMMM Do YYYY") +"</p>";
        //removed description because HTML might get mangled. SHould use Summary with text
       // myblogpost += "<div class=''>" + el.find("description").text().substring(0, 100) +"</div>";
        
        myblogheader += "</div></div>";
        $(header_post).append(myblogheader);
        
			});
		}	
	});	
});