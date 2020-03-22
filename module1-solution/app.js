(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchCheck); 
    lunchCheck.$inject = ['$scope'];

    function lunchCheck($scope) {
        $scope.items = '';
        $scope.message = '';
        let msg = ['Enjoy!', 'Too much!', 'Please enter data first']
        let lengthNoWhiteSpaces;
        $scope.checkIf = function () {

            let itemsArr = $scope.items.split(',');
            let itemsArrLength = itemsArr.length;
            lengthNoWhiteSpaces = itemsArrLength;
            for (let i = 0; i < itemsArrLength; i++) {
                itemsArr[i] = itemsArr[i].trim();
                if (itemsArr[i] === '') lengthNoWhiteSpaces--;
            }

            if (lengthNoWhiteSpaces === 0) {
                $scope.message = msg[2];
                $scope.state = false;
            } else if (lengthNoWhiteSpaces < 4) {
                $scope.message = msg[0];
                $scope.state = true;
            } else {
                $scope.message = msg[1];
                $scope.state = true;
            }
        }
    }

})();