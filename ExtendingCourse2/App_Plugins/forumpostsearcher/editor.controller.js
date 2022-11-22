angular.module("umbraco")
    .controller("forumpostEditorController", function ($scope, $http) {

        if (angular.isArray($scope.model.value) === false) {
            $scope.model.value = [];
        }

        $scope.search = function (term) {
            if (term && term.length > 4) {
                var url = "https://our.umbraco.com/umbraco/api/OurSearch/GetForumSearchResults?term=" + term;

                $http.get(url).then(function (response) {
                    $scope.model.results = response.data.items;
                });
            } else {
                $scope.model.results = [];
            }
        };

        $scope.add = function (result) {
            $scope.model.value.push(result);
        };
        $scope.remove = function (index) {
            $scope.model.value.splice(index, 1);
        };
    });