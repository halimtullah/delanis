$(document).ready(function() {
    $(".design_icon").click(function) {
        $(".show1").toggle();
    });
});

$(document).ready(function(){
    $(".dev_icon").click(function) {
        $(".show2").toggle();
    });
})
$(document).ready(function(){
    $(".product_icon").click(function(){
        $(".show3").toggle();
    });
});
$(document).ready(function(){
    $("form").submit(function(event){
        var name=$("input#name").val();
        var email=$("input#email").val();
        var message=$("input#message").val();
        alert("Thank you for reaching to us.");
        event.preventDefault();
    });
});
