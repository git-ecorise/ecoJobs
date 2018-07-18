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
	.when('/post-job', {
		templateUrl:"Admin/employer-post-job.html"
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
	.when('/add-company', {
		templateUrl:"Admin/employer-create.html"
	})
	.when('/update-company', {
		templateUrl:"Admin/employer-edit.html"
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
app.controller('loginCtrl',function($scope, $http){
	$scope.loginData={};
	$scope.rememberMe=false;
	$scope.lgnpattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Login Function Stars here
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
        		$http.post('http://192.168.2.12/mySlim/public/user_add',$scope.loginData).then(function(res){
							console.log(res);
							if (res.data == "true") {
								alert("Working");
								alertify.success("Login Successfully!!");
							}
						})
			}
		 					$scope.usernamelogin=null;
                    		$scope.passwordlogin=null;
                    		$scope.rememberme=null;
		}
		
	}
	// Login Function Stars here
});
// Login Controller Ended
// Registration Controller Started
app.controller('registerCtrl',function($scope,$http){
	$scope.regData={};
	$scope.password = null;
 	$scope.passwordConfirmation = null;
	// Email Validation
	$scope.emlvalid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	$scope.userReg=function(){
		if ($scope.regUser==null && $scope.regEmail==null && $scope.regPassword==null && $scope.regContact==null && $scope.regConfirmpass==null && $scope.Regacceptcheckbox==null && $scope.regUserLast==null) {
			alertify.log("Fill Details before Registration");
		}
		else
		{
			if($scope.regUser==null || $scope.regEmail==null || $scope.regPassword==null || $scope.regContact==null || $scope.regConfirmpass==null || $scope.Regacceptcheckbox==null || $scope.regUserLast==null)
			{
				alertify.error("Check the Remaining Fields");
			}
			else
			{
				$scope.regData = {
                    		firstName: $scope.regUser,
                    		lastName:$scope.regUserLast,
                    		contact:$scope.regContact,
                    		email: $scope.regEmail,
                    		password:$scope.regPassword
        				};
        				console.log($scope.regData);
						$http.get('http://192.168.2.11/mySlim/public/').then(function(res){
							console.log(res);
						})			
			}
		}
	}
// reggistration password confirmation starts
  $scope.checkpass = function(){
				// console.log($scope.cpass);
				$scope.verifycpass = $scope.regConfirmpass
				console.log($scope.verifycpass);
				if ($scope.regPassword != $scope.verifycpass) {
					console.log($scope.regConfirmpass);
					$scope.errormsg = "Invalid Password";
				}
				else
				{
					$scope.errormsg="";

				}
				
			}
// reggistration password confirmation Ends
});
// Registration Controller Ended
// Forgot Password Controller Started
app.controller('forgotPasswordCtrl',function($scope,$http){
	$scope.forgotPasswordData={};
	$scope.forgotPasswordJsonArray=[];
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
                    		email:$scope.forgotpasswordemail
               					};
		    }
    		$scope.forgotpasswordemail=null;
    		$scope.generateNewPassword=null;

	}
});
// Forgot Password Controller Ended

// Admin Change Password ControllerStarted
app.controller('adminchngpass',function($scope,$http)
{		
		$scope.admincngpwData={};
		$scope.admincheckpass=function(){
				$scope.chkadminpass=$scope.admincnfpas
				console.log($scope.chkadminpass);
				if($scope.adminnwpass!=$scope.chkadminpass)
				{
					console.log($scope.admincnfpas);
					$scope.errormsg = "Use 6 or more characters with a mix of capital, small letters & numbers";
				}
				else
				{
					$scope.errormsg = "";
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
				{
					alertify.success("Password Saved Successfull!!");		
					$scope.admincngpwData={
						oldPassword:$scope.currpass,
						newPassword:$scope.adminnwpass,
						confirmPassword:$scope.admincnfpas
											}
			        		console.log($scope.admincngpwData);
							$scope.currpass=null;
                    		$scope.adminnwpass=null;
                    		$scope.admincnfpas=null;
				}
			}

		}
});
//************************CONTROLLER FOR ADMIN-PROFILE -smita************
app.controller("profilecntrl",function($scope, $http){
	
	$scope.profilelist={};
    $scope.dob=[];
   

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


//**************************adminprofile.json********************

$http.get('json/adminprofile.json').then(function(res){

	$scope.profilestate=res.data.key.profilestates;
	$scope.month=res.data.key.profilemonth;
	$scope.education=res.data.key.profileeducation;
	$scope.stream=res.data.key.profilestream;
})
//***********************end**************************************

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

	                         	$scope.dob=$scope.pmodeldate+"-"+$scope.pmodelmonth+"-"+$scope.pmodelyear;
	    	     	
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

  											$http.post('http://192.168.2.12/mySlim/public/user_add',$scope.profilelist).then(function(res){
							console.log(res);
							if (res.data == "true") {
								alert("Working");
							}
						})

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
//contact page controller starts 
app.controller("contactcntrl",function($scope, $http){
    	
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
	       											message:$scope.msgmodel 
	       											};
	       						console.log($scope.userdetails);


	       					$http.post('http://192.168.2.12/mySlim/public/user_add',$scope.userdetails).then(function(res){
							console.log(res);
							if (res.data == "true") {
								alert("Working");
							}
						})


	          				}

	           						 $scope.yournamemodel= null; 
	       							 $scope.youremailmodel =null;
	       							 $scope.contactmodel=null;
	       							 $scope.msgmodel=null;
	
	    	       
					   }

    
    		}
	});


app.controller('job-resultcntrl',function($scope,$http){


//**************************locationArray.json************************
$http.get('json/filterArray.json').then(function(res){

	$scope.locations=res.data.key.location;
	$scope.positions=res.data.key.position;
	$scope.salarys=res.data.key.salary;
	console.log($scope.locations);
	console.log($scope.positions);
	console.log($scope.salarys);
 
})
//******************************end************************************

//*************************jobresultArray.json******************
$http.get('json/jobresultArray.json').then(function(res){

	$scope.data=res.data.key;
	console.log($scope.data);
	

})
//*****************************end***********************************

})

//*****************************CONTROLLER FOR BLOG-smita*********************************
app.controller('blogcntrl',function($scope,$http){

	   $http.get('json/category.json').then(function(res){
	  	$scope.data1=res.data.key;
	  
	  console.log($scope.data.key);
	  
	  });



//*****************filterblogArray JSON************************
$http.get('json/filterblogArray.json').then(function(res){
	$scope.gkArrays=res.data.key.gkArray;
    $scope.qualiArrays=res.data.key.qualiArray;
    $scope.typeArrays=res.data.key.typeArray;

	console.log($scope.gkArrays);
	console.log($scope.qualiArrays);

console.log( $scope.typeArrays);

	
})
//**********************END********************************



//*****************blogArray JSON************************
$http.get('json/blogArray.json').then(function(res){
	$scope.data=res.data.key;
	console.log($scope.data.key);

})
//**********************END********************************

 

$scope.getlidata=function(name,count){
									
					$scope.jsonLidata={
											blogUploadCategory:name,
											count:count
									  };

					console.log($scope.jsonLidata);
}

$scope.senddata=function(date){
                                 $scope.jsonBlogTimeStamp = {
      								blogUploadDate : date
      							 }
//******************************POST DATE********************************************
      $http.post('http://192.168.2.12/mySlim/public/user_add',$scope.dd).then(function(res){
							console.log(res);
							if (res.data == "true") {
								alert("Working");
							}
                })
                 console.log($scope.jsonBlogTimeStamp);
  				}
//*******************************END****************************************************


});

//****************************** controller for apply job application button***************
app.controller('applyCtrl', function($scope) {
});


//  Job Datail Controller Starts here
	
app.controller('myJobDetailCtrl',function($scope,$http){
	$http.get('json/jobDetails.json').then(function(res){
		$scope.jobDetails=res.data.key;
		console.log($scope.jobDetails);
	});
	$scope.jobDetailsData={};
	$scope.isDisabled = false;
// send Application function Strats here
	$scope.sendAppc=function()
	{
		$scope.isDisabled = true;	
		$scope.jobDetailsData={
				userMail:"sample@mail.com",
				email:"sample@company-domain.com"
		}
		console.log($scope.jobDetailsData);
	}
// send Application Method ends here
});

// Job Datail Controller Ends here

// blog-single COntroller Starts here

app.controller('blogSingleCtrl',function($scope,$http){
$scope.commentUserData={};
$http.get('json/blogSinglejson.json').then(function(res){
		$scope.blogSinglejson=res.data.key;
		console.log($scope.blogSinglejson);
	});
				$scope.sndDate=function(blogDateC)
					{			
						$scope.senddate={
							date: blogDateC
						};
						console.log($scope.senddate);
					};


				//Send Data with Comment Function 
					$scope.sendcommentData=function(){

						$scope.commentUserData={
						name:$scope.nameComment,
						email:$scope.emailComment,
						message:$scope.commentMsg
					};
					console.log($scope.commentUserData);
					};
});
// blog-single COntroller Ends here