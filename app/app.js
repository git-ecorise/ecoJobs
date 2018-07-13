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
	.when('/account-login-page', {
		templateUrl:"templates/account-login-page.html"
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
	});

	$locationProvider.html5Mode(true).hashPrefix('#!');

});


app.controller("profilecntrl",function($scope){
	
	$scope.profilelist={};
    $scope.dob=[];
   
   
  $scope.submitprofile=function(){
  	
   if($scope.pmodeldate== null && $scope.pmodellast== null && $scope.pmodelemail== null && $scope.pmodeldate==null && $scope.pmodelmonth== null && $scope.pmodelyear== null && $scope.pmodelcity==null && $scope.pmodelstate==null && $scope.pmodelstreet==null && $scope.pmodeledu==null && $scope.pmodelpin==null && $scope.pmodelcontact==null && $scope.pmodelabout==null)
	    	            {
	    	        	 
	    	        	  alertify.log("Fill details before submitting the form. ");
	    	        	}
	    	        else
	    	        	{
	                   if($scope.pmodeldate== null || $scope.pmodellast== null || $scope.pmodelemail== null || $scope.pmodeldate==null || $scope.pmodelmonth== null || $scope.pmodelyear== null || $scope.pmodelcity==null || $scope.pmodelstate==null || $scope.pmodelstreet==null || $scope.pmodeledu==null || $scope.pmodelpin==null || $scope.pmodelcontact==null || $scope.pmodelabout==null)
	
	    	                {
	    	        	      
	    	        	       alertify.error("Check the remaining field");
	    	        	     }
	                      else
	                         {
	    	     	
	    	     				alertify.success("Form successfully submitted..!!!");
			    				$scope.dob.push({date:$scope.pmodeldate, month:$scope.pmodelmonth, year:$scope.pmodelyear})
								$scope.profilelist={
											  		Name:$scope.pmodelname,
											  		Last:$scope.pmodellast,
											  		Email:$scope.pmodelemail,
											  		DOB:$scope.dob,
											  		Add:$scope.pmodeladdress,
											  		City:$scope.pmodelcity,
											  		State:$scope.pmodelstate,
											  		Street:$scope.pmodelstreet,
											  		Education:$scope.pmodeledu,
											  		Pin:$scope.pmodelpin,
											  		Contact:$scope.pmodelcontact,
											  		About:$scope.pmodelabout,
											  		Country:$scope.pmodelcountry
										           };
  											console.log($scope.profilelist);

	          				}
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
	       												FirstName:$scope.yournamemodel, 
	       												EmailId:$scope.youremailmodel,
	       												Contact:$scope.contactmodel,
	       												Message:$scope.msgmodel };
	       						console.log($scope.userdetails);

	          				}

	           						 $scope.yournamemodel= null; 
	       							 $scope.youremailmodel =null;
	       							 $scope.contactmodel=null;
	       							 $scope.msgmodel=null;
	
	    	       
					}

    
    		}
	});

// apply job application button
app.controller('applyCtrl', function($scope) {
   
    $scope.visible =true;

    $scope.toggle = function() {
        $scope.visible = $scope.visible ? false : true;
    };

});