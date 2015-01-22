var app = angular.module('chatroom');

app.service('parseService', function($http){
  //Here you'll need to create two methods. One called postData and the other called getData.
  
  //On the lines below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.
 

  //On the line below create the postData method. This method will add data to the **parse backend.**
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'
  //Because we're making a POST request, we need a way to tell parse the data we want to give it, 
  //in your $http call (along with url and method) have a data property which has a value that is equal to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
  
  //postData method here
    this.postData = function(text){ // <-- needs to be converted to an obj
      return $http({
        method: 'POST',
        data: text, // <-- needed format once it gets to parse. Can do this in service, but you can do it in the control
        url: 'https://api.parse.com/1/classes/chat' // the parse backend?
      })
    }
  
  //getData method here
    this.getData = function(){
      return $http({
        method: 'GET',
        url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
    })
  }    
});


// Got to tie in this data with the control so that our $scope can show show in our view. We're going to need to utilize the methods that we added to this service to do some of the 'heavy' lifting, then just add what we get back from those methods to the $scope.