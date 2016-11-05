angular.module ('ContactApp',[])
.service('contactService' , function(){
  var self = this

  self.contacts = [
    {todo: 'Niwat Kaewkert', nickname: 'oil' , phone: '0868312125'},
    {todo: 'Siriwut Netwichain', nickname: 'Arm' , phone: '0989245169'},
    {todo: 'Thitaree Rutthachote', nickname: 'lookso' , phone: '0982629628'}
  ]

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
      phone: $scope.phone
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

