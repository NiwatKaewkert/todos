angular.module ('TodoApp',[])
.service('Service' , function(){
  var self = this

  self.contacts = []

  self.list = function(){
    return self.contacts
  }

  self.add = function(contact){
    self.contacts.push(contact)
  }

})

.controller('Checkbox', function ($scope) {
    $scope.selectCheck = {
      check: 'Incomplete'
    }
})
.controller('ListToDos',function($scope, Service) {
  $scope.contacts = Service.list()
})
.controller('AddToDos',function($scope,Service){
  $scope.save = function() {
    var contact = {
      todo: $scope.todo,
      check: ''
    }
    Service.add(contact)
    resetForm();
  }

  function resetForm() {
    $scope.todo = ''
  }
});

