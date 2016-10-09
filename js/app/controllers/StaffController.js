function StaffController() {
    this.name = 'Henrique';
    this.email = 'hrq@flatiron.com'
    this.phone = '1234567890'
}

angular
    .module('app')
    .controller('StaffController', StaffController);