<?php 
print_r($_POST);
/*    ***********************  start   ***********************      */
     
	if(isset($_POST['m_submit'])){
		$name = isset($_POST['m_name'])?$_POST['m_name']:"";
		$email = isset($_POST['m_email'])?$_POST['m_email']:"";
		$number = isset($_POST['m_number'])?$_POST['m_number']:"";

		$to  = 'leads@domycourseonline.com';
		
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$subject = "Get 50% ";
		$message = "PopUP Form.
					<table border='2'>
				    	<tr><td>First Name:</td><td>".$name."</td></tr>
						<tr><td>Email:</td><td>".$email."</td></tr>
						<tr><td>Phone No:</td><td>".$number."</td></tr>
					</table>";
		$message = nl2br($message);
		mail($to, $subject, $message, $headers);
	}

        	/*    ***********************  end   ***********************      */

/*    ***********************  start   ***********************      */
	if(isset($_POST['sf_submit'])){
		$name = isset($_POST['sf_name'])?$_POST['sf_name']:"";
		$email = isset($_POST['sf_email'])?$_POST['sf_email']:"";
		$number = isset($_POST['sf_number'])?$_POST['sf_number']:"";
		
		$to  = 'leads@domycourseonline.com';
		
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$subject = "GET OUR SERVICE TODAY AND AVAIL 50% DISCOUNT!";
		$message = "Banner Form.
					<table border='2'>
						<tr><td>Name:</td><td>".$name."</td></tr>
						<tr><td>Email:</td><td>".$email."</td></tr>
						<tr><td>Phone Number:</td><td>".$number."</td></tr>
					</table>";
		$message = nl2br($message);
		mail($to, $subject, $message, $headers);
	}
   	/*    ***********************  end   ***********************      */


  


/*    ***********************  start***********************      */
if(isset($_POST['c_submit'])){
		$name = isset($_POST['c_name'])?$_POST['c_name']:"";
		$email = isset($_POST['c_email'])?$_POST['c_email']:"";
		$number = isset($_POST['c_number'])?$_POST['c_number']:"";
		$contact_msg = isset($_POST['c_msg'])?$_POST['c_msg']:"";

		$to  = 'leads@domycourseonline.com';

		
	    $headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$subject = "Contact Page Form";
		$message = "'".$contact_msg."'.
					<table border='2'>
				    	<tr><td>Name:</td><td>".$name."</td></tr>
						<tr><td>Email:</td><td>".$email."</td></tr>
						<tr><td>Phone Number:</td><td>".$number."</td></tr>
						<tr><td>Message:</td><td>".$contact_msg."</td></tr>
					</table>";
		$message = nl2br($message);
	    mail($to, $subject, $message, $headers);
	}
	echo "Thank You!!";
    // echo "<script>window.location.href = 'https://domycourseonline.com/' </script>";	
?>
