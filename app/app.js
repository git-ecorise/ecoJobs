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
//admin-profile controller
app.controller("profilecntrl",function($scope, $http){
	
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
//***********************profileState.json*****************************
    // $http.get('ecoJobs/profileState.json').then(function(res){

    // 	$scope.data=res.data.key;
    // 	console.log($scope.data.key);
    // })
 




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
//**************************monthProfile********************

// $http.get('ecoJobs/month.json').then(function(res){

// 	$scope.data=data.res.key;
// 	console.log($scope.data.key);
// })

$scope.education=[
                  {'name':"Diploma"},
                  {'name':'Bacholor'},
                  {'name':"Masters"},
                  {'name':'Doctorate'}];

//**************************educationProfile********************

// $http.get('ecoJobs/education.json').then(function(res){

// 	$scope.data=data.res.key;
// 	console.log($scope.data.key);
// })
$scope.stream=[{'strname':"Computer engineering"},
                 {'strname':"Information Technology"},
                 {'strname':"Civil engineering"},
                 {'strname':"Mechanical engineering"},
                 {'strname':"Electical engineering"}];
   
//**************************streamProfile********************

// $http.get('ecoJobs/stream.json').then(function(res){

// 	$scope.data=data.res.key;
// 	console.log($scope.data.key);
// })
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

//controller for job-result page 
app.controller('job-resultcntrl',function($scope,$http){

$scope.locationarray=[{'locationname':"Pune"},
                      {'locationname':"Mumbai"},
    			      {'locationname':"Nashik"}
                      ];

$scope.salaryArray=[{'sal':45000},{'sal':75000},{'sal':80000}];
$scope.positionArray=[{'positionname':"Packaging Engineer"},{'positionname':"Solution Architect"},{'positionname':"Mechanical Engineer"}];



//**************************locationArray.json************************
// $http.get('ecojobs/locationArray.json').then(function(res){

// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert('hi');
// })


//**************************salaryArray.json************************
// $http.get('ecojobs/salaryArray.json').then(function(res){

// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert('hi');
// })


//**************************positionArray.json************************
// $http.get('ecojobs/positionArray.json').then(function(res){

// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert('hi');
// })
//*************************jobresultArray.json******************
//$http.get('ecojobs/jobresultArray.json').then(function(res){

// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert('hi');
// })

$scope.jobresultArray=[

     {
			'position':"Packaging Engineer",
			'compname':"Expedia ",
			'typeofposition':"Part-Time ",
			'compinfo':"It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended...",
			'location':"Pune",
			'salary':"80000",
			'experience':"5 years",
			'time':"20",
			'imgsrc':"06.png"
     },

    {
			'position':"Solution Architect",
			'compname':"Ebay",
			'typeofposition':"Full-Time",
			'compinfo':"It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended...",
			'location':" Pune",
			'salary':"76000",
			'experience':"10 years",
			'time':"50",
			'imgsrc':"07.png"
    },
     {
            'position':"Solution Architect",
            'compname':"Ebay",
            'typeofposition':"Full-Time",
            'compinfo':"It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended...",
            'location':" Mumbai",
            'salary':"80000",
            'experience':"10 years",
            'time':"50",
            'imgsrc':"07.png"
    },

   {
			'position':"Solution Architect",
			'compname':"Wottif ",
			'typeofposition':"Full-Time",
			'compinfo':"It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended...",
			'location':"Pune",
			'salary':"45000",
			'experience':"5 years",
			'time':"40",
			'imgsrc':"05.png"
    },
      {
			'position':"Mechanical Engineer",
			'compname':"Wottif ",
			'typeofposition':"Full-Time",
			'compinfo':"It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended...",
			'location':"Nashik",
			'salary':"45000",
			'experience':"5 years",
			'time':"40",
			'imgsrc':"05.png"
    }      

	];

})

//controller for blog
app.controller('blogcntrl',function($scope,$http){

	  $http.get('json/category.json').then(function(res){
	  	$scope.data=res.data.key;
	  
	  console.log($scope.data.key);
	  alert('category.json');
	  });


	$scope.qualiarray=[{'qualiname':"Engineering"},
                      {'qualiname':"Master in Engineering"},
         {'qualiname':"MCA"}
                      ];
$scope.gkArray=[{'typegk':"GK1"},{'typegk':"GK2"},{'typegk':"GK3"}];
$scope.typeArray=[{'typename':"Technical"},{'typename':"Aptitude"}];
//*****************qualiArray JSON************************
// $http.get('ecojobs/qualiArray.json').then(function(res){
// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert("heollo");
// })
//**********************END********************************
//*****************gkArray JSON************************
// $http.get('ecojobs/gkArray.json').then(function(res){
// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert("heollo");
// })
//**********************END********************************
//*****************typeArray JSON************************
// $http.get('json/typeArray.json').then(function(res){
// 	$scope.data=res.data.key;
// 	console.log($scope.data.key);
// 	alert("heollo");
// })
//**********************END********************************



//*****************blogArray JSON************************
$http.get('json/blogArray.json').then(function(res){
	$scope.data=res.data.key;
	console.log($scope.data.key);
	alert('blogArray.json');
})
//**********************END********************************

 
// $scope.blogArray=[

//      {
// 			'imgsrc':"blog-01.jpg",
// 			'title':"Blog1",
// 			'bysend':"Admin",
// 			'bydate':"12 March 2018 2:00 PM",
// 			'details':"Up branch to easily missed by do. Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.Admiration considered acceptance too led one melancholy expression. Are will took form the nor true.",
// 			'inbook':"Technical",
// 			'typeofquali':"Engineering",
// 			'other':"GK1"
			
//      },
//      {
// 			'imgsrc':"blog-02.jpg",
// 			'title':"Blog2",
// 			'bysend':"Admin",
// 			'bydate':"09 Jan 2018",
// 			'details':"Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true.Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.",
// 			'inbook':"Aptitude",
// 			'typeofquali':"Engineering",
// 			'other':"GK2"
			
//      },
     
//       {
// 			'imgsrc':"blog-03.jpg",
// 			'title':"Blog3",
// 			'bysend':"Admin",
// 			'bydate':"17 May 2018",
// 			'details':"Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true.",
// 			'inbook':"Technical",
// 			'typeofquali':"Engineering",
// 			'other':"GK3"
			
//      },
//       {
// 			'imgsrc':"blog-03.jpg",
// 			'title':"Blog2",
// 			'bysend':"Admin",
// 			'bydate':"17 May 2018",
// 			'details':"Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true.",
// 			'inbook':"Technical",
// 			'typeofquali':"MCA",
// 			'other':"GK3"
			
//      },
//      {
// 			'imgsrc':"blog-03.jpg",
// 			'title':"Blog1",
// 			'bysend':"Admin",
// 			'bydate':"17 May 2018",
// 			'details':"Are will took form the nor true. Winding enjoyed minuter her letters evident use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but near left was. Year kept on over so as this of. She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its. Ye am it formed indeed agreed relied piqued.Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression. Are will took form the nor true.",
// 			'inbook':"Technical",
// 			'typeofquali':"MCA",
// 			'other':"GK3"
			
//      }

   
// 	];

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
	
app.controller('myJobDetailCtrl',function($scope){
	$scope.jobDetailsData={};
	$scope.isDisabled = false;

	// Job Details Json Array Stars here

	$scope.jobDetails=[{
						"position":"Audio Visual Field Engineer",
						"jobDescription":"That know ask case sex ham dear her spot."+
						" Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes."+
						"Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid."+
						"Resources agreement contained propriety applauded neglected use yet.",
						"requirement":["Justice joy manners boy met resolve produce.","Esteem my advice it an excuse enable."],
						"location":"pune",
						"companyName":"Expedia",
						"typeOfJob":"part time",
						"companyoverviewimg":"images/brands/06.png",
						"salary": 1000000,
						"time_stamp" : "23 May 1990",
						"experience" : "2 Years",
						"similarjob":{"siconcmpy":"images/brands/06.png","scompany":"Expedia","sposition":"IT Developer","slocation":"Guildford, Surrey","jobtype":"Part time","stimestamp":"1 day ago"},
						"jobResponsibility":["Sociable on as carriage my position weddings raillery consider.Peculiar trifling absolute and wandered vicinity property yet"]

						}];// Job Details Json Array Ends here

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

app.controller('blogSingleCtrl',function($scope){
$scope.commentUserData={};
$scope.blogSinglejson=[{
						"blogTitleimage":"images/blog/blog-01.jpg",
						"blogTitle":"Blog title post with a featured image",			
						"author":"Admin",
						"date":"January 09, 2016",
						"jobDesc":"Up branch to easily missed by do. Admiration considered acceptance too led one melancholy expression."+
						" Are will took form the nor true."+
						" Winding enjoyed minuter her letters evident use eat colonel. "+"He attacks observe mr cottage inquiry am examine gravity."+
						" Are dear but near left was. Year kept on over so as this of."+" She steepest doubtful betrayed formerly him."+
						" Active one called uneasy our seeing see cousin tastes its. "+
						"Ye am it formed indeed agreed relied piqued.",
						"quotes":"She steepest doubtful betrayed formerly him. Active one called uneasy our seeing see cousin tastes its."+
						" Bed one supposing breakfast day fulfilled off depending questions."+
						" Whatever boy her exertion his extended."+
						" Ecstatic followed handsome drawings entirely mrs one yet outweigh."+
						" Of acceptance insipidity remarkably is invitation.",
						"aboutAuthorImage":"images/man/01.jpg",
						"authorName":"John Joe",
						"aboutAuthorInfo":"Prepared do an dissuade be so whatever steepest."+
						" Yet her beyond looked either day wished nay. "+
						"By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour."+
						" An dispatched impossible of of melancholy favourable.",
						"comentsName":"Ibrahim ibn al-Walid",
						"commentImage":"images/man/03.jpg",
						"commentimestamp":"20 minutes",
						"commentsDesc":"Received the likewise law graceful his."+
						" Nor might set along charm now equal green."+
						" Pleased yet equally correct colonel not one. "+
						"Say anxious carried compact conduct sex general nay certain."+
						" Mrs for recommend exquisite household eagerness preserved now."+
						" My improved honoured he am ecstatic quitting greatest formerly.",
						"commentCount":11,
						"similarjob":{"blogName":"Commerce","blogDate":"November 6, 2013","blogndCount":40},
						"facebook":"http://www.facebook.com",
						"twitter":"http://www.twitter.com",
						"googlePlus":"https://www.google.com"			
					}];

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