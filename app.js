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
    todo: $scope.todo
    $scope.selectCheck = {
      check: 'Incomplete'
    }
})

.controller('ListToDos',function($scope, Service) {
  $scope.contacts = Service.list()
})

.controller('AddToDos',function($scope,Service){
  $scope.save = function() 
  {
      if ($scope.todo != '') 
      {
        var contact = 
        {
          todo: $scope.todo,
          check: ''

        }
        Service.add(contact)
      }
      else
      resetForm()

    resetForm()
  }

  function resetForm() {
    $scope.todo = ''
  }
});

