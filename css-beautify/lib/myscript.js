$( document ).ready(function() {
		$('.out_clean_css_fld').hide();

		$('.css_formating_btn').click(function(e){
			var in_raw_css_fld = $('.in_raw_css_fld').val().trim();
			var error_log = '';
			if(in_raw_css_fld == '') error_log = 1;

			if(error_log == ''){
				ajax_call();
			}
		});

		$('.reset_btn').click(function(e){
			$('.out_clean_css_fld, .in_raw_css_fld').val('');
			$('.out_clean_css_fld, .copy_clean_css_btn').hide(300);
		})
	    
	    $('.css_upload_btn').click(function(e){
	    	$('#in_file_fld').trigger('click');
	    });

	    $('#in_raw_css_fld').keyup(function(e){	    	
			$('.out_clean_css_fld, .copy_clean_css_btn').hide(300);
	    });

	    $("#in_file_fld").change(function(e) {		    
		    ajax_call();
		});
		$(".copy_clean_css_btn").click(function (e){
			var copyTextarea = document.querySelector('.out_clean_css_fld');
	      	copyTextarea.focus();
	      	copyTextarea.select();
	     
	        var successful = document.execCommand('copy');        
	        jQuery(".copy_clean_css_btn").text("Copied");
	        setTimeout(function(){
	            jQuery(".copy_clean_css_btn").text("Copy");
	        },3000);	    
		});

	});

	function ajax_call() {
		var formData = new FormData(jQuery("#formater_form")[0]);
		$.ajax({
	     url : 'lib/formater.php',
	     type : 'POST',
	     data : formData,		     
		 processData: false,
		 contentType: false,
	     success : function (result) {
	        $('.out_clean_css_fld').val('');
	        $('.out_clean_css_fld').val(result);
	        $('.out_clean_css_fld, .copy_clean_css_btn').show(300);
	     },
	     error : function () {
	        console.log ('error');
	     }

	   });
	}