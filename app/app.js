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
			templateUrl:"templates/account-forgot-password-page.html",
			controller:"forgotPasswordCtrl"
		})
			.when('/post-blog', {
			templateUrl:"templates/post-blog.html",
			controller:"postblogCtrl"

		})
		.when('/post-job', {
			templateUrl:"Admin/employer-post-job.html",
			controller:"postjobcntrl"
		})
		.when('/admin-profile', {
			templateUrl:"Admin/admin-profile.html",
			controller:"adminprofilecntrl"
		})
		
		.when('/company-list', {
			templateUrl:"Admin/company-list.html"
			
		})
		.when('/blogs', {
			templateUrl:"Admin/blist.html"
			
		})
		
		.when('/account-login-page', {
			templateUrl:"templates/account-login-page.html",
			controller:'homeCtrl'
		})
		
		.when('/admin-change-pass', {
			templateUrl:"templates/admin-change-pass.html",
			controller:"adminchngpass"
		})
		.when('/admin-empty', {
			templateUrl:"templates/admin-empty.html"
		})
		.when('/applied-jobs', {
			templateUrl:"templates/applied-jobs.html"
		})
		.when('/user-profile', {
			templateUrl:"templates/user-profile.html",
			controller:"profilecntrl"
		})
		.when('/user-saved-job', {
			templateUrl:"templates/user-saved-job.html"
		})
		.when('/admin', {
			templateUrl:"templates/admin.html"
		})
		.when('/blog-single', {
			templateUrl:"templates/blog-single.html",
			controller:"blogSingleCtrl"
		})
		.when('/blog', {
			templateUrl:"templates/blog.html",
			controller:"blogcntrl"
		})
		.when('/contact', {
			templateUrl:"templates/contact.html",
			controller:"contactcntrl"
		})

		.when('/create-resume', {
			templateUrl:"templates/create-resume.html",
			controller:"createResumeCtrl"

		})
		.when('/employee-detail', {
			templateUrl:"templates/employee-detail.html"
		})
		
		.when('/add-company', {
			templateUrl:"Admin/employer-create.html",
			controller:"addcompanyCtrl"
		})
		.when('/update-company', {
			templateUrl:"Admin/employer-edit.html",
			controller:"updatecompanyCtrl"

		})
		.when('/employer-detail', {
			templateUrl:"templates/employer-detail.html"
		})
		
		.when('/faq', {
			templateUrl:"templates/faq.html"
		})
		
		.when('/job-category', {
			templateUrl:"templates/job-category.html"
		})
		.when('/job-detail', {
			templateUrl:"templates/job-detail.html",
			controller:"myJobDetailCtrl"
		})
		.when('/job-location', {
			templateUrl:"templates/job-location.html"
		})
		.when('/job-result', {
			templateUrl:"templates/job-result.html",
			controller:"job-resultcntrl"
		})
		.otherwise({
			templateUrl:"templates/404-error-page.html"
		});

	 	$locationProvider.html5Mode(true).hashPrefix('#!');
	});

	// -------------------------Login Controller Started-------------------------------------
	app.controller('homeCtrl',function($scope, $http){
		$scope.loginData={};
		$scope.rememberMe=false;
		$scope.lgnpattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
		$scope.regData={};
		$scope.password = null;
	 	$scope.passwordConfirmation = null;
		// Email Validation
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
                       alertify.error("Check the remaining Fields ");
				}
				else
				{

					$scope.loginData= {
	                    		email:$scope.usernamelogin,
	                    		password:$scope.passwordlogin
	                    		};
	        				console.log($scope.loginData);

	        				alertify.success("Login Successfully!!");

	        				 var config = {
				                headers : {
				                    'Content-Type': 'application/json'
				                }
				            }

                        $http.post('http://192.168.2.19:3000/api/signin', {
                    		email: $scope.usernamelogin,
                    		password:$scope.passwordlogin
        				}, config)
				            .then(function(res){
				            	console.log(res);
				            });
	        				$scope.usernamelogin=null;
	                    		$scope.passwordlogin=null;
	                    		$scope.rememberme=null;		
	 
				   }
			 							
				}
			}	
		//Login Function Ends here

		//Registration Function starts here
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
	                    		password:$scope.regPassword,
	                    		flag : "0"
	        				};
	        				console.log($scope.regData);

	        				alertify.success("Registered Successfully!!");	


        				 var config = {
				                headers : {
				                    'Content-Type': 'application/json'
				                }
				            }

                        $http.post('http://192.168.2.19:3000/api/signup', {
                    		firstName: $scope.regUser,
                    		lastName:$scope.regUserLast,
                    		contactNo:$scope.regContact,
                    		email: $scope.regEmail,
                    		password:$scope.regPassword,
                    		flag : "0"
        				}, config)
				            .then(function(res){
				            	console.log(res);
				            });



	        					$scope.regUser=null;
	                    		$scope.regUserLast=null;
	                    		$scope.regContact=null;
	                    		$scope.regEmail=null;
	                    		$scope.regPassword=null;
	                    		$scope.regConfirmpass=null;
	                    		$scope.Regacceptcheckbox=null;
									
				}
			}
		}
		//registration password confirmation starts
	  	$scope.checkpass = function(){
					
					$scope.verifycpass = $scope.regConfirmpass
					
					if ($scope.regPassword != $scope.verifycpass) {
						
						$scope.errormsg = "Invalid Password";
					}
					else
					{
						$scope.errormsg="";
				}
					
		}
		// reggistration password confirmation Ends
	});
	//----------- Registration Controller Ended-----------------------------------------

	// ------Forgot Password Controller Started-----------------------------------------
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
					
						$scope.forgotPasswordData= {
	                    email:$scope.forgotpasswordemail
	               					};
	               			console.log($scope.forgotPasswordData);
	               			alertify.success("Check your Mail box");


           			 // $http.post('http://192.168.2.19:3000/api/signin', {
            			// email: $scope.forgotpasswordemail
        				// }, config)
				        //     .then(function(res){
				        //     	console.log(res);
				        //     });
	               			$scope.forgotpasswordemail=null;
	    					$scope.generateNewPassword=null;
			    }
	    		

		}
	});
	// --------------------------Forgot Password Controller Ended--------------------------

	// -----------------------Admin Change Password ControllerStarted------------------
	app.controller('adminchngpass',function($scope,$http)
	{		
			$scope.admincngpwData={};
			$scope.admincheckpass=function(){
					$scope.chkadminpass=$scope.admincnfpas
					
					if($scope.adminnwpass!=$scope.chkadminpass)
					{
						
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
						
						$scope.admincngpwData={
							oldPassword:$scope.currpass,
							newPassword:$scope.adminnwpass,
							confirmPassword:$scope.admincnfpas
												}
				        		console.log($scope.admincngpwData);
				        		alertify.success("Password Saved Successfull!!");	

				        // $http.post('http://192.168.2.19:3000/api/signin', {
            		        // oldPassword:$scope.currpass,
							// newPassword:$scope.adminnwpass,
							// confirmPassword:$scope.admincnfpas
        				// }, config)
				        //     .then(function(res){
				        //     	console.log(res);
				        //     });

								$scope.currpass=null;
	                    		$scope.adminnwpass=null;
	                    		$scope.admincnfpas=null;
					}
				}

			}
	});
	
		
//************************CONTROLLER FOR USER-PROFILE -smita************

app.controller("profilecntrl",function($scope, $http){

	
	$scope.profilelist={};
    $scope.dob=[];
   

   var range = [];
   for(var i=1;i<=30;i++) 
   {
          range.push(i);
   }
$scope.ddata = range;


 var range = [];
for(var i=1980;i<=2015;i++) 
{
  range.push(i);
}
$scope.ddata1 = range;




var range=[];
for(var i=1;i<=12;i++) 
{
  range.push(i);
}
$scope.ddata2 = range;


//adminprofile.json

$http.get('json/adminprofile.json').then(function(res){

	$scope.profilestate=res.data.key.profilestates;
	$scope.month=res.data.key.profilemonth;
	$scope.education=res.data.key.profileeducation;
	$scope.stream=res.data.key.profilestream;
})


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
  											alertify.success("Form successfully submitted..!!!");


        				 var config = {
				                headers : {
				                    'Content-Type': 'application/json'
				                          }
				                      }
						
                       var stringurl="http://192.168.2.19:3000/api/updateprofile/"+$scope.pmodelemail;
                      
						$http.put(stringurl, $scope.profilelist, config)
				            .then(function(res){
				            	console.log(res);
				            });

	          				
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
  	
  }
 
});
//**************************contact page controller starts ****************************
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
	    	     	
	    	     				
			    				$scope.userdetails={
	       											name:$scope.yournamemodel, 
	       											email:$scope.youremailmodel,
	       											mobile:$scope.contactmodel,
	       											message:$scope.msgmodel 
	       											};
	       						console.log($scope.userdetails);
	       						alertify.success("Form successfully submitted..!!!");

	       					var config = {
				                headers : {
				                    'Content-Type': 'application/json'
				                }
				            }
						

						$http.post('http://192.168.2.19:3000/api/contact', $scope.userdetails, config)
				            .then(function(res){
				            	console.log(res);
				            });

	           						 $scope.yournamemodel= null; 
	       							 $scope.youremailmodel =null;
	       							 $scope.contactmodel=null;
	       							 $scope.msgmodel=null;
	                        }
	    	       
					   }

	            }
	  });

//*****************************controller for job-result page ***************

	app.controller('job-resultcntrl',function($scope,$http){


	//filterArrayjoblocation.json
	$http.get('json/filterArrayjobresult.json').then(function(res){

		$scope.locations=res.data.key.location;
		$scope.positions=res.data.key.position;
		$scope.salarys=res.data.key.salary; 
	})
	

	//jobresultArray.json
	$http.get('json/jobresultArray.json').then(function(res){
 
		$scope.data=res.data.key;
		console.log($scope.data);
	})

	
	})

	//*****************************CONTROLLER FOR BLOG-smita*********************************
	app.controller('blogcntrl',function($scope,$http){

		   $http.get('json/category.json').then(function(res){
		  	$scope.data1=res.data.key;
		  
		  console.log($scope.data.key);
		  
		  });



	//filterblogArray JSON
	$http.get('json/filterblogArray.json').then(function(res){
		$scope.gkArrays=res.data.key.gkArray;
	    $scope.qualiArrays=res.data.key.qualiArray;
	    $scope.typeArrays=res.data.key.typeArray;	
	})


	//blogArray JSON
	$http.get('json/blogArray.json').then(function(res){
		$scope.data=res.data.key;
		

	})
	

	$scope.getlidata=function(name,count){
										
						$scope.jsonLidata={
												blogUploadCategory:name,
												count:count
										  };
	}

	$scope.senddata=function(date){
	                                 $scope.jsonBlogTimeStamp = {
	      								blogUploadDate : date
	      							 }
	
	      $http.post('http://192.168.2.12/mySlim/public/user_add',$scope.dd).then(function(res){
								console.log(res);
								if (res.data == "true") {
									alert("Working");
								}
	                })
	                 console.log($scope.jsonBlogTimeStamp);
	  				}
	
	});

	//****************************** controller for apply job application button***************
	app.controller('applyCtrl', function($scope) {
	});

	// ---------------- Job Datail Controller Starts here-------------------------
		
	app.controller('myJobDetailCtrl',function($scope,$http){
		$http.get('json/jobDetails.json').then(function(res){
			$scope.jobDetails=res.data.key;
		
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


			// $http.post('http://192.168.2.19:3000/api/signin', {
            		        // $scope.jobDetailsData
							
        				// }, config)
				        //     .then(function(res){
				        //     	console.log(res);
				        //     });
			console.log($scope.jobDetailsData);
		}
	// send Application Method ends here
	});

	//---------------------- Job Datail Controller Ends here------------------------

	//--------------------- blog-single Controller Starts here------------------

	app.controller('blogSingleCtrl',function($scope,$http){
	$scope.commentUserData={};
	$http.get('json/blogSinglejson.json').then(function(res){
			$scope.blogSinglejson=res.data.key;
			
		});
					$scope.sndDate=function(blogDateC)
						{			
							$scope.senddate={
								date: blogDateC
							};

							 // $http.post('http://192.168.2.19:3000/api/signin', {
            			// date: $scope.sndDate
        				// }, config)
				        //     .then(function(res){
				        //     	console.log(res);
				        //     });
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

//****************************** controller post blog application button***************
app.controller('postblogCtrl', function($scope) {
$scope.today = new Date();
$scope.blogpost={};
	

	$scope.submit = function(){
	
		var briefDescription = CKEDITOR.instances.ckeExample.getData();
		var detailDescription = CKEDITOR.instances.ckeExample2.getData();
		var messageLength = CKEDITOR.instances['ckeExample','ckeExample2'].getData().replace(/<[^>]*>/gi).length;
		

			if($scope.blogtitle==null && $scope.blogCategory== null && !messageLength)
			{
				alertify.log("Fill Details before Submit");
			}
			else
		      {
		      	if($scope.blogtitle==null || $scope.blogCategory==null || !messageLength)
				{	
                       alertify.error("Check the remaining Fields ");
                       
				}
				else
				{

						$scope.blogpost={
										image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
										title:$scope.blogtitle,
										date:$scope.today,
										blogCategory:$scope.blogCategory,
										briefDescription:briefDescription,
										detailDescription:detailDescription
		};

    				console.log($scope.blogpost);
       				alertify.success("Submited Successfully!!");			 

 					$scope.image=null;
            		$scope.blogtitle=null;
            		$scope.today=null;
            		$scope.blogCategory=null;
            		CKEDITOR.instances.ckeExample.setData('');            		
            		CKEDITOR.instances.ckeExample2.setData('');            		
				}
			 					

			}
		

	}
});
//****************************** controller for add company & dynamic Id generartor***************

app.controller('addcompanyCtrl', function($scope) {

	$scope.addcompany={};
	

	$scope.submit = function(){
	
		var companyBackground = CKEDITOR.instances.ckeExample.getData();
		var services = CKEDITOR.instances.ckeExample2.getData();
		var expertise= CKEDITOR.instances.ckeExample3.getData();
		var c_name	= $scope.companyName;
		var c_city =$scope.city;
		var c_id = c_name + c_city ;
		var c_n =  Math.floor(100 + Math.random() * 900);
		var company_ID = c_id + +c_n;
		
		var txtlength=CKEDITOR.instances['ckeExample','ckeExample2','ckeExample3'].getData().replace(/<[^>]*>/gi).length;
	if ($scope.companyName==null && $scope.establishedIn==null && $scope.type==null && $scope.people==null && $scope.website==null && $scope.address==null && $scope.city==null && $scope.state==null && $scope.street==null && $scope.country==null && $scope.phoneNo==null  && $scope.zipCode==null && !txtlength )
			 {
				alertify.log("Fill Details before saving");
			}
			else
			{
				if($scope.companyName==null || $scope.establishedIn==null || $scope.type==null || $scope.people==null || $scope.website==null || $scope.address==null || $scope.city==null || $scope.state==null || $scope.street==null || $scope.country==null || $scope.phoneNo==null  || $scope.zipCode==null || !txtlength)
				{
					alertify.error("Check the Remaining Fields");
				}
				else
				{
					$scope.addcompany={
	 		image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
	 		companyName:$scope.companyName,
	 		establishedIn:$scope.establishedIn,
			type:$scope.type,
			companyid:company_ID.toUpperCase(),
			people:$scope.people,
		 	website:$scope.website,
		 	address:$scope.address,
			city:$scope.city,
		 	state:$scope.state,
			street:$scope.street,
			country:$scope.country,
		 	phoneNo:$scope.phoneNo,
			zipCode:$scope.zipCode,
			companyBackground:companyBackground,
			services:services,
			expertise:expertise
		};
			console.log($scope.addcompany);
			alertify.success("Saved Successfully!!");	
			$scope.companyName=null,
	 		$scope.establishedIn=null,
			$scope.type=null,
			$scope.companyid=null,
			$scope.people=null,
		 	$scope.website=null,
		 	$scope.address=null,
			$scope.city=null,
		 	$scope.state=null,
			$scope.street=null,
			$scope.country=null,
		 	$scope.phoneNo=null,
			$scope.zipCode=null
			CKEDITOR.instances.ckeExample.setData('');
			CKEDITOR.instances.ckeExample2.setData('');
			CKEDITOR.instances.ckeExample3.setData('');
				}	

			
	}
		
	}
	
			


});
//****************************** controller for update company & dynamic Id generartor***************
app.controller('updatecompanyCtrl', function($scope) {


	$scope.updatecompany={};
	
   
	$scope.submitform = function(){
	   
	   
		var companyBackground = CKEDITOR.instances.ckeExample.getData();
		var services = CKEDITOR.instances.ckeExample2.getData();
		var expertise= CKEDITOR.instances.ckeExample3.getData();

	var txtlength=CKEDITOR.instances['ckeExample','ckeExample2','ckeExample3'].getData().replace(/<[^>]*>/gi).length;
	if ($scope.companyName==null && $scope.establishedIn==null && $scope.type==null && $scope.people==null && $scope.website==null && $scope.address==null && $scope.city==null && $scope.state==null && $scope.street==null && $scope.country==null && $scope.phoneNo==null  && $scope.zipCode==null && !txtlength )
			 {
				alertify.log("Fill Details before saving");
			}
			else
			{
				if($scope.companyName==null || $scope.establishedIn==null || $scope.type==null || $scope.people==null || $scope.website==null || $scope.address==null || $scope.city==null || $scope.state==null || $scope.street==null || $scope.country==null || $scope.phoneNo==null  || $scope.zipCode==null || !txtlength)
				{
					alertify.error("Check the Remaining Fields");
				}
				else
				{
			$scope.updatecompany={
			companyName:$scope.companyName,
	 		establishedIn:$scope.establishedIn,
			type:$scope.type,	
			people:$scope.people,
		 	website:$scope.website,
		 	address:$scope.address,
			city:$scope.city,
		 	state:$scope.state,
			street:$scope.street,
			country:$scope.country,
		 	phoneNo:$scope.phoneNo,
			zipCode:$scope.zipCode,
			companyBackground:companyBackground,
			services:services,
			expertise:expertise
		};
			console.log($scope.updatecompany);
			alertify.success("Saved Successfully!!");	
			$scope.companyName=null,
	 		$scope.establishedIn=null,
			$scope.type=null,
			$scope.people=null,
		 	$scope.website=null,
		 	$scope.address=null,
			$scope.city=null,
		 	$scope.state=null,
			$scope.street=null,
			$scope.country=null,
		 	$scope.phoneNo=null,
			$scope.zipCode=null
			CKEDITOR.instances.ckeExample.setData('');
			CKEDITOR.instances.ckeExample2.setData('');
			CKEDITOR.instances.ckeExample3.setData('');
				}	

			
	}

		
	}
	
			


});

//****************************post job controller******************************
app.controller('postjobcntrl',function($scope){
	
  $scope.postjobData={};

	$scope.postjob=function(){

        var jobDescription = CKEDITOR.instances.ckeExample.getData();

        var jobResponsibility = CKEDITOR.instances.ckeExample2.getData();

        var  jobRequirement = CKEDITOR.instances.ckeExample3.getData();

        var messageLength=CKEDITOR.instances['ckeExample','ckeExample2','ckeExample3'].getData().replace(/<[^>]*>/gi).length;
        	if($scope.companyName== null && $scope.jobTitle== null && $scope.location== null && $scope.salary==null && $scope.jobType==null && $scope.experience==null && $scope.tags==null && !messageLength)
	    	            {
	    	        	  alertify.log("Fill details before submitting the form. ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.companyName== null || $scope.jobTitle== null || $scope.location== null || $scope.salary==null || $scope.jobType==null || $scope.experience==null || $scope.tags==null || !messageLength)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
	    	     	
	    	     				$scope.postjobData={
									 companyName:$scope.companyName,
									 jobTitle:$scope.jobTitle,
									 location:$scope.location,
									 salary:$scope.salary,
									 jobType:$scope.jobType,
									 experience:$scope.experience,
									 jobDescription:jobDescription,
									 tags:$scope.tags,
									 jobResponsibility:jobResponsibility,
									 jobRequirement:jobRequirement
									};
									 console.log($scope.postjobData);
									 alertify.success("Form successfully submitted..!!!");
                        	
	                                $scope.companyName=null;
									$scope.jobTitle=null;
									$scope.location=null;
									$scope.salary=null;
									$scope.jobType=null;
									$scope.experience=null;
									$scope.tags=null;
									CKEDITOR.instances.ckeExample.setData('');
									CKEDITOR.instances.ckeExample2.setData('');
									CKEDITOR.instances.ckeExample3.setData('');
							}
									
                        }
                 }

});


//************************CONTROLLER FOR ADMIN-PROFILE -smita************

app.controller("adminprofilecntrl",function($scope, $http){

	
	$scope.profilelist={};
    $scope.dob=[];
   

   var range = [];
   for(var i=1;i<=30;i++) 
   {
          range.push(i);
   }
$scope.ddata = range;


 var range = [];
for(var i=1980;i<=2015;i++) 
{
  range.push(i);
}
$scope.ddata1 = range;




var range=[];
for(var i=1;i<=12;i++) 
{
  range.push(i);
}
$scope.ddata2 = range;


//adminprofile.json

$http.get('json/adminprofile.json').then(function(res){

	$scope.profilestate=res.data.key.profilestates;
	$scope.month=res.data.key.profilemonth;
	$scope.education=res.data.key.profileeducation;
	$scope.stream=res.data.key.profilestream;
})


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
  											alertify.success("Form successfully submitted..!!!");


        				 var config = {
				                headers : {
				                    'Content-Type': 'application/json'
				                          }
				                      }
						
                       var stringurl="http://192.168.2.19:3000/api/updateprofile/"+$scope.pmodelemail;
                      
						$http.put(stringurl, $scope.profilelist, config)
				            .then(function(res){
				            	console.log(res);
				            });

	          				
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
  	
  }
 
});

//*********************************createResumeCtrl*******************************

app.controller('createResumeCtrl',function($scope){
$scope.results1=[];                
$scope.results2=[];
 $scope.refArray=[];
 $scope.workArray=[];
 $scope.langSkillarr={};
 $scope.IsVisible = false;
 $scope.hobby={};
 $scope.allRecord={};

 $scope.removeAll1=function()
    	{
    		 $scope.results1=[{}];
       								
    	}

    	$scope.removeAll2=function()
    	{
    		 
       	 $scope.results2=[{}];                

    	}
    	$scope.removeAll3=function()
    	{
    		         
									
 		 $scope.refArray=[{}];
 									
    	}
    	$scope.removeAll4=function()
    	{
    		
 		 $scope.workArray=[{}];
    	}

$scope.addRow1=function(){

$scope.tomodel=$scope.tomodel1+"  "+$scope.tomodel2;
$scope.frommodel=$scope.frommodel1+"  "+$scope.frommodel2;
   
if($scope.universitymodel==null && $scope.tomodel1==null && $scope.tomodel2==null && $scope.frommodel1==null && $scope.frommodel2==null && $scope.levelmodel==null && $scope.infomodel==null && $scope.titlemodel==null)
	    	            {
	    	        	  alertify.log("Fill details before  adding Education ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.universitymodel==null || $scope.tomodel1==null || $scope.tomodel2==null || $scope.frommodel1==null || $scope.frommodel2==null || $scope.levelmodel==null || $scope.infomodel==null || $scope.titlemodel==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
	                         	$scope.results1.push({'university':$scope.universitymodel,'from':$scope.frommodel,'to':$scope.tomodel,'level':$scope.levelmodel,'title':$scope.titlemodel,'info':$scope.infomodel});

       								 $scope.universitymodel=null;
       								 $scope.tomodel1=null;
       								 $scope.tomodel2=null;
       								 $scope.frommodel1=null;
									 $scope.frommodel2=null;
       								 $scope.levelmodel=null;
       								 $scope.infomodel=null;
       								 $scope.titlemodel=null;

	                        }
	    	       
					   }

      }

$scope.removeRow1=function(){
$scope.results1.pop({'university':$scope.universitymodel,'from':$scope.frommodel1,'to':$scope.tomodel1,'level':$scope.levelmodel,'title':$scope.titlemodel,'info':$scope.infomodel});
      	$scope.universitymodel="";
      	$scope.frommodel1="";
      	$scope.tomodel1="";
      	$scope.levelmodel="";
      	$scope.titlemodel="";
      	$scope.infomodel="";

      }

$scope.addRow2=function(){

if($scope.typemodel==null && $scope.levelmodel==null && $scope.detailsmodel==null)
	    	            {
	    	        	  alertify.log("Fill details before  adding Skills ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.typemodel==null || $scope.levelmodel==null || $scope.detailsmodel==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
	                         	$scope.results2.push({'type':$scope.typemodel,'level':$scope.levelmodel,'details':$scope.detailsmodel});

       								 $scope.typemodel="";
								     $scope.levelmodel="";
								     $scope.detailsmodel="";
	                        }
	    	       
					   }
    
      	}
      
$scope.removeRow2=function(){
$scope.results2.pop({'type':$scope.typemodel,'level':$scope.levelmodel,'details':$scope.detailsmodel});
      	$scope.typemodel="";
      	$scope.levelmodel="";
      	$scope.detailsmodel="";
      	
      
}

$scope.addRefRow=function(){

if($scope.refmodel==null && $scope.namemodel==null && $scope.infomodel==null)
	    	            {
	    	        	  alertify.log("Fill details before  adding Skills ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.refmodel==null || $scope.namemodel==null || $scope.infomodel==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
	                         	$scope.refArray.push({'refType':$scope.refmodel,'name':$scope.namemodel,'info':$scope.infomodel});

       								 
							      	$scope.refmodel="";
							      	$scope.namemodel="";
							      	$scope.infomodel="";
	                        }
	    	       
					   }
    
      	}
      
$scope.removeRefRow=function(){
$scope.refArray.pop({'refType':$scope.refmodel,'name':$scope.namemodel,'info':$scope.infomodel});

    
      	$scope.refmodel="";
      	$scope.namemodel="";
      	$scope.infomodel="";
      	}
      
$scope.addWorkRow=function(){
$scope.toworkmodel=$scope.toworkmodel1+"  "+$scope.toworkmodel2;
$scope.fromworkmodel=$scope.fromworkmodel1+"  "+$scope.fromworkmodel2;

if($scope.toworkmodel1==null && $scope.toworkmodel2==null && $scope.fromworkmodel1==null && $scope.fromworkmodel2==null)
	    	            {
	    	        	  alertify.log("Fill details before  adding Work Experiance ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.toworkmodel1==null || $scope.toworkmodel2==null || $scope.fromworkmodel1==null || $scope.fromworkmodel2==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
	                         	$scope.workArray.push({'jobPosition':$scope.positionmodel,'from':$scope.fromworkmodel,'to':$scope.toworkmodel,'companyname':$scope.companynamemodel,'info':$scope.infomodel});

											$scope.positionmodel="";
									      	$scope.fromworkmodel1="";
									      	$scope.fromworkmodel2="";
									      	$scope.toworkmodel1="";
									      	$scope.toworkmodel2="";
									      	$scope.companynamemodel="";
									      	$scope.infomodel="";
	                        }
	    	       
					   }

      	}
      
$scope.removeWorkRow=function(){
$scope.workArray.pop({'jobPosition':$scope.positionmodel,'from':$scope.fromworkmodel,'to':$scope.toworkmodel,'companyname':$scope.companynamemodel,'info':$scope.infomodel});

    
      	$scope.positionmodel="";
      	$scope.fromworkmodel="";
      	$scope.toworkmodel="";
      	$scope.companynamemodel="";
      	$scope.infomodel="";

}

$scope.submitResume=function(){

if($scope.lang1==null && $scope.lang2==null && $scope.lang3==null && $scope.lang4==null && $scope.langdetail==null && $scope.informationmodel==null)
	    	            {
	    	        	  alertify.log("Fill details before resume creation ");
	    	        	}
	    	        else
	    	        	{
	                 	  if($scope.lang1==null || $scope.lang2==null || $scope.lang3==null || $scope.lang4==null || $scope.langdetail==null || $scope.informationmodel==null)
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	    }
	                      else
	                         {
								    	     	
								   	 $scope.hobby={
							         hobbiesinfo:$scope.informationmodel,
							         travel:$scope.travel,
							         graphic:$scope.graphic,
							         music:$scope.music,
							         photography:$scope.photography,
							         travel2:$scope.travel2,
							         graph2:$scope.graph2,
							         music2:$scope.music2,
							         photo3:$scope.photo3

							       }

							       $scope.langSkillarr={
							       						langOne:$scope.lang1,
							       						langTwo:$scope.lang2,
							       						langThree:$scope.lang3,
							       						langFour:$scope.lang4,
							       						langFive:$scope.lang5,
							       						langSix:$scope.lang6,
							       						langDetail:$scope.langdetail
							       }
							      
							       $scope.allRecord={
	       					       hobby: $scope.hobby,
								   refference:$scope.refArray,
								   education:$scope.results1,
								   skill:$scope.results2,
								   language:$scope.langSkillarr,
								   workExp:$scope.workArray
								}
								console.log($scope.allRecord);
	       						alertify.success("Resume created successfully..!!!");

	           						 $scope.informationmodel=null;
        							 $scope.travel=null;
							         $scope.graphic=null;
							         $scope.music=null;
							         $scope.photography=null;
							         $scope.travel2=null;
							         $scope.graph2=null;
							         $scope.music2=null;
							         $scope.photo3=null;
							         $scope.lang1=null;
       								 $scope.lang2=null;
       								 $scope.lang3=null;
       								 $scope.lang4=null;
       								 $scope.lang5=null;
       								 $scope.lang6=null;
       								 $scope.langdetail=null;
       								 $scope.results1=[{}];
       								 $scope.results1=[{}];                
									 $scope.results2=[{}];
 									 $scope.refArray=[{}];
 									 $scope.workArray=[{}];
	                        }
	    	       
					   }

	            }
	  });


     