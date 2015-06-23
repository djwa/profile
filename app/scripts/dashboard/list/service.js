define(['./module'], function (module) {

    Service.$inject = [
        '$http'
    ];

    function Service($http) {
        var listurl = 'http://localhost:3000/fellas';
        var listservice = {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: listurl
                });
            },
            postData: function (fella) {
                return $http({
                    method: 'POST',
                    url: listurl,
                    data: JSON.stringify(fella)
                });
            },
            removeData: function (id) {
                return $http({
                    method: 'DELETE',
                    url: listurl + '/' + id,
                    data: 'fella'
                });
            }
        };
        return listservice;
    }

    module.factory('fellaservice', Service);

});