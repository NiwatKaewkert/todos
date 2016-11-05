angular.module ('ContactApp',[])
.service('contactService' , function(){
  var self = this

  self.contacts = []

  self.list = function(){
    return self.contacts
  }

  self.add = function(contact){
    self.contacts.push(contact)
  }

})


.controller('ListContactController',function($scope, contactService) {
  $scope.contacts = contactService.list()
})
.controller('AddContactController',function($scope,contactService){
  $scope.save = function() {
    var contact = {
      todo: $scope.todo,
      nickname: $scope.nickname,
      check: ''
    }
    contactService.add(contact)
    resetForm();
  }

  function resetForm() {
    $scope.todo = ''
    $scope.nickname = ''
    $scope.phone = ''
  }
});

