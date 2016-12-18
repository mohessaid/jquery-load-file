(function($){
    $(document).ready(function(){
       
       $(document).on("click", "#loadcontent", function(){
          console.log("hello");
          $(document).load( "content/main.html", function(resp, status, xhr){
              if (status == "success" && xhr.status == 200)
                $("#mainpage-load").prepend(resp);
              else{
                  console.log("something wrong happend!");
              }
          });
           
       });
        
    });
})(window.jQuery);