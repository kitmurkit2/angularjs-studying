(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService); 

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemBuyer = this;
        
        itemBuyer.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        itemBuyer.toBuyList = ShoppingListCheckOffService.showToBuyItems();
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.showAlreadyBoughtItems(); 
    }

    function ShoppingListCheckOffService() {
        let service = this;
        
        let toBuyList = [
            { name: "cookies", quantity: 10 },
            { name: "Pepto Bismol", quantity: 3 },
            { name: "chicken", quantity: 6 },
            { name: "banana", quantity: 3 },
            { name: "apple", quantity: 8 }
        ];

        let alreadyBoughtList = [];

        service.buyItem = function (itemIndex) {
            alreadyBoughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);
        };

        service.showToBuyItems = function () {
            return toBuyList;
        };

        service.showAlreadyBoughtItems = function () {
            return alreadyBoughtList;
        };
    }
})();