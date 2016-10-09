function ContactController() {

  var vm = this;
  this.changeName = function() {
    vm.name = 'Something Else';
  }
    vm.name = 'Pedro';
    vm.email = 'pedro@flatiron.com'
    vm.phone = '1234567890'
}

angular
    .module('app')
    .controller('ContactController', ContactController);