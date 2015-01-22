var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

    // getParseData

  //The **getParseData function will call the getData method on the parseService object.** You'll then save the result of that request to your controllers $scope as messages ($scope.messages)

    // save the result from the getData() method
    // create $scope.messages ((remember: from main instructions: 'messages' on the scope which should have a 'text' property))

  //The **postData function will take *whatever the user typed in* (hint: look at the html and see what ng-model correlates to on the input box), pass that text to the postData method on the *parseService object* which will then *post it to the parse backend.* **

    // create postData function that will take user input (AKA ng-model='message') and pass that text to the postData() method ON the parseService object (AKA the 'text' function on line 18 of parseService.js)

    $scope.getParseData = function() { // <-- Name for the function that gets invoked at the very bottom
      parseService.getData() // <-- This invokes the getData function in the service, it returns my promise
        .then(function(data){ //<-- this is the object being taken in
          $scope.messages = data.data.results; // <-- this is the object followed by the key and then the property
        })
    };

    $scope.showNewMessage = true;
    $scope.showFilterMessage = false;

    $scope.showFilterMessage = function() {
      $scope.showNewMessage = false;
      $scope.showFilterMessage = true;
    }

    $scope.showNew = function() {
      $scope.showNewMessage = true;
      $scope.showFilterMessage = false;
    }

    $scope.postData = function() {
      var postMessage = {};                 // <-- this creates a jar that gets filled with an object
      postMessage.text = $scope.message;    // <-- the message is coming from the HTML and being passed
                                            // into the jar with a property called 'text' being created
      parseService.postData(postMessage);   // <-- the jar is passed to the postData function in the service
        $scope.message = '';
      parseService.postData($scope.message)
    }
    $scope.getParseData();                  // <-- invoking the getParseData function up above so when a
                                            //message gets sent to the database, it updates on the HTML page

  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  
  setInterval(function(){
    $scope.getParseData();
  }, 1500)
})


