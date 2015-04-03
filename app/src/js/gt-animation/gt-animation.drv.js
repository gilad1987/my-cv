
(function (angular) {

    function GtAnimationDirective($interval)
    {
        return  {
            link:function(scope,element,attrs){

                var questionLength,
                    current,
                    DELAY = 500,
                    DISABLE_CLASS= 'disable',
                    questions;

                questions = element.find('.question');
                questionLength = questions.length;
                current = 0;

                if(!questionLength){
                    return false;
                }

                function removeDisableClass(){
                    $(questions[current]).removeClass(DISABLE_CLASS);
                    current++;
                }

                $interval(removeDisableClass,DELAY,questionLength,false);
            }
        };
    }

    angular.module('GtAnimation').directive('gtAnimation',['$interval',GtAnimationDirective]);

})(angular);