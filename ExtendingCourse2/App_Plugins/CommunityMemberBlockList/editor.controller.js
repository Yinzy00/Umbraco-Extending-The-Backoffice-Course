angular.module("umbraco")
    .controller("communityMemberController", function ($scope, mediaResource) {

        $scope.$watch('block.data', function () {
            //your property is called image so the following will contain the udi
            var imageUdi = $scope.block.data.image;
            if (imageUdi !== null && imageUdi !== '') {

                //the mediaResource has a getById method
                mediaResource.getById(imageUdi[0].mediaKey)
                    .then(function (media) {
                        $scope.imageUrl = media.mediaLink;
                    });
            }
        }, true);

        $scope.$watch('block.settingsData', function () {
            $scope.bgColor = $scope.block.settingsData.backgroundColor.label;
            $scope.bgTextcolor = $scope.block.settingsData.textColor.label;
        }, true);
    });