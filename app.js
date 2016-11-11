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
      check: 'Active'
    }
})

.controller('ListToDos',function($scope, Service) {
  $scope.contacts = Service.list()
})

.controller('AddToDos',function($scope,Service){
  $scope.save = function()
  {
    $scope.todoText = '';
      if($scope.todo != '' && $scope.todo != null)
      {
        var contact =
        {
          todo: $scope.todo,
          check: ''
        }
        Service.add(contact)
      }
      else {
        resetForm()
      }

    resetForm()
  }

  function resetForm() {
    $scope.todo = ''
  }
});
