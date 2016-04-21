var app = angular.module('services.AppService', []);

app.service('AppService', function ($q, $http) {
    var self = {
        'serializeObj': function (obj) {
            var result = [];

            for (var property in obj)
                result.push(decodeURIComponent(property) + "=" + decodeURIComponent(obj[property]));

            return result.join("&");
        },
        'send': function (form) {
            var d = $q.defer();

            var obj = self.serializeObj(form);

            console.log(obj);

            $http({
                url: '/send.php',
                method: "POST",
                cache: false,
                data: obj,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                d.resolve(data);

            }).error(function (data, status, headers, config) {
                d.reject(data);
            });

            return d.promise;
        }
    };

    return self;
});