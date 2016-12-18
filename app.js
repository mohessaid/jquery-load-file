(function($){
    $(document).ready(function(){
       
       $(document).on("click", "#loadcontent", function(){
          console.log("hello");
          $(document).load( "pages/main.html", function(resp, status, xhr){
              $("#loading").show();
              if (status == "success" && xhr.status == 200)
                $("#mainpage-load").prepend(resp);
              else{
                  console.log("something wrong happend!");
              }
              $("#loading").hide();
          });
           
       });
        
    });
})(window.jQuery);