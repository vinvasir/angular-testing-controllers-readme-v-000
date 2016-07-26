function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(numberOne, numberTwo) {
  return parseFloat(numberOne) + parseFloat(numberTwo);
}

angular
    .module('app')
    .controller('MainController', MainController);