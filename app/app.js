var app=angular.module('ecojobs', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/home', {
		templateUrl : "templates/home.html"
	})
	.when('/about-us', {
		templateUrl:"templates/about-us.html"
	})
	.when('/account-forgot-password-page', {
		templateUrl:"templates/account-forgot-password-page.html"

	})
	.when('/employer-post-job', {
		templateUrl:"templates/employer-post-job.html"
	})
	.when('/employer-edit', {
		templateUrl:"templates/employer-edit.html"
	})
	.when('/employer-create', {
		templateUrl:"templates/employer-create.html"
	})
	.when('/account-login-page', {
		templateUrl:"templates/account-login-page.html",
			

	})
	.when('/account-register-page', {
		templateUrl:"templates/account-register-page.html"

	})
	.when('/admin-change-pass', {
		templateUrl:"templates/admin-change-pass.html"
	})
	.when('/admin-empty', {
		templateUrl:"templates/admin-empty.html"
	})
	.when('/admin-profile', {
		templateUrl:"templates/admin-profile.html"
	})
	.when('/admin-saved-job', {
		templateUrl:"templates/admin-saved-job.html"
	})
	.when('/admin', {
		templateUrl:"templates/admin.html"
	})
	.when('/blog-single', {
		templateUrl:"templates/blog-single.html"
	})
	.when('/blog', {
		templateUrl:"templates/blog.html"
	})
	.when('/contact', {
		templateUrl:"templates/contact.html",
		controller:"contactcntrl"
	})
	.when('/employee-create-resume', {
		templateUrl:"templates/employee-create-resume.html"
	})
	.when('/employee-detail', {
		templateUrl:"templates/employee-detail.html"
	})
	.when('/employee', {
		templateUrl:"templates/employee.html"
	})
	.when('/employer', {
		templateUrl:"templates/employer.html"
	})
	.when('/employer-detail', {
		templateUrl:"templates/employer-detail.html"
	})
	.when('/account-forgot-password-page', {
		templateUrl:"templates/account-forgot-password-page.html"
	})
	.when('/faq', {
		templateUrl:"templates/faq.html"
	})
	.when('/job-browse-job', {
		templateUrl:"templates/job-browse-job.html"
	})
	.when('/job-category', {
		templateUrl:"templates/job-category.html"
	})
	.when('/job-detail', {
		templateUrl:"templates/job-detail.html"
	})
	.when('/job-location', {
		templateUrl:"templates/job-location.html"
	})
	.when('/job-result', {
		templateUrl:"templates/job-result.html"
	})
	.otherwise({
		templateUrl:"templates/404-error-page.html"
	});

 	$locationProvider.html5Mode(true).hashPrefix('#!');
});

// Login Controller Started

app.controller('loginCtrl',function($scope){
	$scope.loginData={};
	$scope.rememberMe=false;

	$scope.userLogin=function(){
		if($scope.usernamelogin==null && $scope.passwordlogin==null && $scope.rememberme==null)
		{
			alertify.log("Fill Details before Login");
		}
		else
		{
			if($scope.usernamelogin==null || $scope.passwordlogin==null || $scope.rememberme==null)
			{
				alertify.error("Check the Remaining Fields");
			}
			else
			{		
					alertify.success("Login Successfully!!");
					$scope.loginData = {
                    		Name: $scope.usernamelogin,
                    		Password: $scope.passwordlogin,
        				};
        console.log($scope.loginData);
			}
		 					$scope.usernamelogin=null;
                    		$scope.passwordlogin=null;
                    		$scope.rememberme=null;

		}
		
	}


});
// Login Controller Ended

// Registration Controller Started

app.controller('registerCtrl',function($scope){
	$scope.regData={};
	$scope.regJsonArray=[];
	$scope.terms=false;
	$scope.password = null;
 	$scope.passwordConfirmation = null;
	
	// Email Validation
	$scope.emlvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	$scope.userReg=function(){
		if ($scope.regUser==null && $scope.regEmail==null && $scope.regPassword==null && $scope.regContact==null && $scope.regConfirmpass==null && $scope.Regacceptcheckbox==null) {
			alertify.log("Fill Details before Registration");
		}
		else
		{
			if($scope.regUser==null || $scope.regEmail==null || $scope.regPassword==null || $scope.regContact==null || $scope.regConfirmpass==null || $scope.Regacceptcheckbox==null)
			{
				alertify.error("Check the Remaining Fields");
			}
			else
				if($scope.regPassword != $scope.regConfirmpass)
				
				{
					alertify.error("Password are not Same");
				}
			else
			{
					alertify.success("Registration Successfull!!");		
					$scope.regData = {
                    		name: $scope.regUser,
                    		contact:$scope.regContact,
                    		email: $scope.regEmail,
                    		password:$scope.regPassword,
                    		
                    
        				};
        				console.log($scope.regData);
			}
							$scope.regUser=null;
                    		$scope.regContact=null;
                    		$scope.regEmail=null;
                    		$scope.regPassword=null;
                    		$scope.regConfirmpass=null;
                    		$scope.Regacceptcheckbox=null;


		}
	}



// reggistration password confirmation starts
  $scope.checkpass = function(){
				// console.log($scope.cpass);
				$scope.verifycpass = $scope.regConfirmpass
				console.log($scope.verifycpass);
				if ($scope.regPassword != $scope.verifycpass) {
					console.log($scope.regConfirmpass);
					$scope.errormsg = "password not match";
				}
				else{
					$scope.errormsg = "Correct password";
				}
			}

// reggistration password confirmation Ends

});
// Registration Controller Ended


// Forgot Password Controller Started
app.controller('forgotPasswordCtrl',function($scope){
	$scope.forgotPasswordData={};
	$scope.forgotPasswordJsonArray=[];
	// $scope.generateNewPassword=false;
	// Email Validation
 	$scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	$scope.passwordRestore=function(){
			if($scope.forgotpasswordemail==null)
			{
				alertify.log("Enter Email");
			}
			else
				if($scope.generateNewPassword==null)
			
				{
					alertify.error("Check the Remaining Fields");
				}
			else
			{
				alertify.success("Check your Mail box");
			

							$scope.forgotPasswordData= {
                    		emailId:$scope.forgotpasswordemail,
                    		newPassword:$scope.generateNewPassword
        					};

        					console.log($scope.forgotPasswordData);
    }
    		$scope.forgotpasswordemail=null;
    		$scope.generateNewPassword=null;

	}
});
// Forgot Password Controller Ended

// Admin Change Password ControllerStarted
app.controller('adminchngpass',function($scope)
{		
		$scope.admincngpwData={};

		
		$scope.admincheckpass=function(){
				$scope.chkadminpass=$scope.admincnfpas
				console.log($scope.chkadminpass);
				if($scope.adminnwpass!=$scope.chkadminpass)
				{
					console.log($scope.admincnfpas);
					$scope.errormsg = "password not match";

				}
			else{
					$scope.errormsg = "Correct Password";

				}
}

		$scope.saveAdminPass=function()
		{
			if ($scope.currpass==null && $scope.adminnwpass==null && $scope.admincnfpas==null) 
			{
				alertify.log("Fill Details before Saving Details");	
			}
			else
			{
				if($scope.currpass==null || $scope.adminnwpass==null || $scope.admincnfpas==null)
			
				{
					alertify.error("Check the Remaining Fields");
				}
				else
				if($scope.adminnwpass != $scope.admincnfpas)
				
				{
					alertify.error("Password are not Same");
				}

				else
				{
					alertify.success("Password Saved Successfull!!");		
					$scope.admincngpwData={
						oldpass:$scope.currpass,
						newpw:$scope.adminnwpass,
						cnfpw:$scope.admincnfpas
				}
        		console.log($scope.admincngpwData);
			}

							$scope.currpass=null;
                    		$scope.adminnwpass=null;
                    		$scope.admincnfpas=null;

			}

		}
});
//admin-profile
app.controller("profilecntrl",function($scope){
	
	$scope.profilelist={};
    $scope.dob=[];
    
    $scope.profilestate=[{'statename':"Maharashtra"},
    	{'statename':"Goa"},
    	{'statename':"Andhra Pradesh"},
    	{'statename':"Arunachal Pradesh"},
    	{'statename':"Bihar"},
    	{'statename':"Gujarat"},
    	{'statename':"Haryana"},
    	{'statename':"Chhattisgad"}
    	

    ];
   var range = [];
for(var i=1;i<=30;i++) {
  range.push(i);
}
$scope.ddata = range;


 var range = [];
for(var i=1980;i<=2015;i++) {
  range.push(i);
}
$scope.ddata1 = range;



var range=[];
for(var i=1;i<=12;i++) {
  range.push(i);
}
$scope.ddata2 = range;

$scope.month=[{'monthname':"Jan"},
               {'monthname':'Feb'},
               {'monthname':'March'},
               {'monthname':'April'},
               {'monthname':'May'},              
               {'monthname':'Jun'},               
                {'monthname':'Jul'},
                {'monthname':'Oug'},
                {'monthname':'Sept'},
                {'monthname':'Oct'},
                {'monthname':'Nov'},
                {'monthname':'Dec'}
               ];
$scope.education=[
                  {'name':"Diploma"},
                  {'name':'Bacholor'},
                  {'name':"Masters"},
                  {'name':'Doctorate'}];

$scope.stream=[{'strname':"Computer engineering"},
                 {'strname':"Information Technology"},
                 {'strname':"Civil engineering"},
                 {'strname':"Mechanical engineering"},
                 {'strname':"Electical engineering"}];
   // $scope.pmodelstate=[{'name':"MH"},{'name':"Goa"}];

  $scope.submitprofile=function(){
  	
   if($scope.modelstream==null && $scope.pmodeldate== null && $scope.pmodellast== null && $scope.pmodelemail== null && $scope.pmodeldate==null && $scope.pmodelmonth== null && $scope.pmodelyear== null && $scope.pmodelcity==null && $scope.pmodelstate==null && $scope.pmodelstreet==null && $scope.pmodeledu==null && $scope.pmodelpin==null && $scope.pmodelcontact==null && $scope.pmodelabout==null)
	    	            {
	    	        	 
	    	        	  alertify.log("Fill details before submitting the form. ");
	    	        	}
	    	        else
	    	        	{
	                   if($scope.modelstream==null || $scope.pmodeldate== null || $scope.pmodellast== null || $scope.pmodelemail== null || $scope.pmodeldate==null || $scope.pmodelmonth== null || $scope.pmodelyear== null || $scope.pmodelcity==null || $scope.pmodelstate==null || $scope.pmodelstreet==null || $scope.pmodeledu==null || $scope.pmodelpin==null || $scope.pmodelcontact==null || $scope.pmodelabout==null)
	
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	     }
	                      else
	                         { 

	                         	$scope.dob=$scope.pmodeldate+"- "+$scope.pmodelmonth+" -"+$scope.pmodelyear;
	    	     	
	    	     				alertify.success("Form successfully submitted..!!!");
			    				 // $scope.dob.push({date:$scope.pmodeldate, month:$scope.pmodelmonth, year:$scope.pmodelyear})
								$scope.profilelist={
											  		firstName:$scope.pmodelname,
											  		lastName:$scope.pmodellast,
											  		email:$scope.pmodelemail,
											  		dob:$scope.dob,
											  		address:$scope.pmodeladdress,
											  		city:$scope.pmodelcity,
											  		state:$scope.pmodelstate,
											  		streetName:$scope.pmodelstreet,
											  		education:$scope.pmodeledu,
											  		stream:$scope.modelstream,
											  		pincode:$scope.pmodelpin,
											  		mobile:$scope.pmodelcontact,
											  		about:$scope.pmodelabout
											  		
										           };
  											console.log($scope.profilelist);

	          				}
	          										$scope.modelstream=null;
													$scope.pmodelname=null;
											  		$scope.pmodellast=null;
											  		$scope.pmodelemail=null;
											  		$scope.dob=null;
											  		$scope.pmodeladdress=null;
											  		$scope.pmodelcity=null;
											  		$scope.pmodelstate=null;
											  		$scope.pmodelstreet=null;
											  		$scope.pmodeledu=null;
											  		$scope.pmodelpin=null;
											  		$scope.pmodelcontact=null;
											  		$scope.pmodelabout=null;
											  		$scope.pmodelcountry=null;
													$scope.pmodeldate=null;
													$scope.pmodelmonth=null;
													$scope.pmodelyear=null;
	    	       
					}

    


  	
  }
 
});

app.controller("contactcntrl",function($scope){
    	
	    $scope.submitd= function() {
	        $scope.userdetails={};
	           
	    	      	if($scope.yournamemodel== null && $scope.youremailmodel== null && $scope.contactmodel== null && $scope.msgmodel==null)
	    	            {
	    	        	 
	    	        	  alertify.log("Fill details before submitting the form. ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.yournamemodel== null || $scope.youremailmodel== null || $scope.contactmodel== null || $scope.msgmodel==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	     }
	                      else
	                         {
	    	     	
	    	     				alertify.success("Form successfully submitted..!!!");
			    				$scope.userdetails={
	       												firstName:$scope.yournamemodel, 
	       												email:$scope.youremailmodel,
	       												mobile:$scope.contactmodel,
	       												message:$scope.msgmodel };
	       						console.log($scope.userdetails);

	          				}

	           						 $scope.yournamemodel= null; 
	       							 $scope.youremailmodel =null;
	       							 $scope.contactmodel=null;
	       							 $scope.msgmodel=null;
	
	    	       
					}

    
    		}
	});

// controller for apply job application button
app.controller('applyCtrl', function($scope) {
   
    $scope.visible =true;

    $scope.toggle = function() {
        $scope.visible = $scope.visible ? false : true;
    };

});