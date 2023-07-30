$(document).ready(function(){
	$('#sname,#sclass,#scountry').focus(function(){
		$(this).css('background-color','lime');
	});

	$('#sname,#sclass,#scountry').blur(function(){
		$(this).css('background-color','');
	});
	$('#scountry').change(function(){
		$(this).css('background-color','pink');
	});
// RESULT OF SELECT BOX
	$('#scountry').change(function(){
	var a =	$(this).val();
	$("#result").html(a)

	});

// INPUT TYPE COPY COLOR OF SELECT

	// $('#sform').submit(function(){
	// 	alert("Form Submited.");
	// });

	// GET FUNCTION
	$('#sform').submit(function(){
	var a = $('#sname').val();
	var b = $('#sclass').val();
	var c = $('#scountry').val();

	alert("Hello " + a + " class " + b + " country " + c);

	});

});