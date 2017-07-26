
$( document ).ready(function() {

//when you either click submit or hit return,
//add the value of the form field as an li
  $("form").on("submit", function (e){
      e.preventDefault();

      //add item to list
      var t = $("#task").val();
  		$("ul").append("<li><span class='item'>" + t + "</span><p class='extra hidden'><span class='edit'>edit</span> <span class='delete'>delete</span></p></li>");

      //update count
      $("#count").text($("li").not(".done").length);
      //clear entry box
      $("#task").val("");
  });

  //when you clik on the clear list button, remove all lis from the ul
  $("#clearList").on("click", function (){
      $("ul").empty();
      $("#count").text($("li").not(".done").length);
  });

  //When an individual list item is clicked...
	$("ul").on("click", ".item", function(){
		if($(this).attr("contenteditable") != "true"){
		//Line-through styling
		$(this).parent().toggleClass("done");
		$(this).toggleClass("doneStyle");
    //update count
      $("#count").text($("li").not(".done").length);
    }
  });


//when you clik on the clear complete button, remove all lis with class done from the ul
$("#clearCompleted").on("click", function (){
    $("li.done").remove();
    $("#count").text($("li").not(".done").length);
});

//When you click delete on an individual item...
	$("ul").on("click", ".delete", function(){
		//Remove item
		$(this).closest("li").remove();
		//Update count
    $("#count").text($("li").not(".done").length);
	});

  //When you click edit on an individual item, make it editable..
	$("ul").on("click", ".edit", function(){
		$(this).closest("li").find(".item").attr('contenteditable', 'true').focus();
		$(this).closest(".extra").prepend("<span class='save'>save</span>");
		$(this).remove();
	});

  //SAVE edits to an item
$("ul").on("click", ".save", function(){
  $(this).closest("li").find(".item").attr("contenteditable", "false");
  $(this).closest(".extra").prepend("<span class='edit'>edit</span>");
  $(this).remove();
});


//when you hover over a to do item, make Edit and Delete appear
$("ul").on("mouseenter mouseleave", "li", function (e) {
  //when you are hovering over the li
  if (e.type == "mouseenter") {
    		$(this).children(".extra").removeClass("hidden");
  		} else {
    		$(this).children(".extra").addClass("hidden");
  		}
  });


});
