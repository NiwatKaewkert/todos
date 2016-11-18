angular.module ('TodoApp',[])
.service('Service' , function(){
  var self = this

  self.contacts = [
    {title: 'test1', done: true},
    {title: 'test2', done: false}
  ]

  self.list = function(){
    return self.contacts
  }

  self.add = function(contact){
    self.contacts.push(contact)
  }
})

.controller('ListToDos',function($scope, Service) {
  $scope.contacts = Service.list()
})

.controller('Checkbox', function ($scope,Service) {
  $scope.check = function(condition) {
      if(condition.done == true)
        condition.done = false;
      else
        condition.done = true
     }
})

.controller('AddToDos',function($scope,Service){
  $scope.save = function()
  {
      if($scope.title != '' && $scope.title != null)
      {
        var contact =
        {
          title: $scope.title,
          done: false
        }

        Service.add(contact)
      }
    resetForm()
  }

  function resetForm() {
    $scope.title = ''
  }
});
