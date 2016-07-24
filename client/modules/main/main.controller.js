export default class MainCtrl{

    constructor($scope){
        let siteName = 'JSPM Angular Project';
        $scope.pageTitle = siteName;

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if(toState.data && toState.data.pageTitle){
                $scope.pageTitle = toState.data.pageTitle + ' | ' + siteName;
            }else{
                $scope.pageTitle = siteName;
            }
        });
    }
}