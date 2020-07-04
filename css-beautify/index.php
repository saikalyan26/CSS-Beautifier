<!DOCTYPE html>
<html>
<head>
	<title>Css Beautifier</title>
	<link rel="stylesheet" href="lib/bootstrap.min.css">
	<link rel="stylesheet" href="lib/styles.css">
	<link rel="shortcut icon" href="http://www.example.com/myicon.ico"/>
	<script src="lib/jquery.min.js"></script>
	<script src="lib/bootstrap.min.js"></script>
	<script src="lib/myscript.js"></script>

</head>
<body>
	<section>
		<div class="container">
			<div class="header">
				<h2><strong>CSS Beautifier</strong></h2>
			</div>
			<form name="formater_form" id="formater_form" class="formater_form" enctype="multipart/form-data"  method="POST">
				<div>
					<textarea rows="10" class="in_raw_css_fld" name="in_raw_css_fld" id="in_raw_css_fld"></textarea>
					<input type="file" name="in_file_fld" id="in_file_fld" style="display: none;" accept=".css">
				</div>
			</form>			
			<br>
			<div>
				<button class="btn btn-primary pull-right css_formating_btn">Beautify CSS</button>
				<button class="btn btn-primary pull-right css_upload_btn" >Upload CSS File</button>
				<button class="btn btn-default pull-right reset_btn" >Reset</button>
			</div>
			<br>
			<div>
				<textarea rows="15" class="out_clean_css_fld" readonly="readonly" ></textarea>
			</div>
			<br>
			<div>
				<button class="btn btn-primary pull-right copy_clean_css_btn">Copy</button>				
			</div>
		</div>
	</section>
</body>
</html>