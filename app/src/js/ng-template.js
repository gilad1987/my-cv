(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-tasks-manager/gt-tasks-manager.tpl.html",
    "<div\n" +
    "    ng-repeat=\"task in tasks track by $index\"\n" +
    "    gt-task\n" +
    "    task=\"task\"\n" +
    "    api=\"api\">\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-tasks-manager/gt-task/add-task.tpl.html",
    "<div class=\"add-task-modal-wrapper ltr\">\n" +
    "\n" +
    "    <h2>Add New Task</h2>\n" +
    "\n" +
    "    <form name=\"taskForm\">\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <label class=\"label-text-input\">Name:</label>\n" +
    "            <input name=\"name\" value=\"\" ng-model=\"name\" class=\"input\">\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <label class=\"label-text-input\">Description:</label>\n" +
    "            <textarea name=\"description\" value=\"\" ng-model=\"description\" class=\"input\"></textarea>\n" +
    "\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"input-wrapper\">\n" +
    "            <label>Is done? : </label>\n" +
    "            <label>Yes</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"1\" />\n" +
    "            <label>No</label> <input type=\"radio\" name=\"done\" ng-model=\"done\" value=\"0\" />\n" +
    "        </div>\n" +
    "\n" +
    "        <br/>\n" +
    "\n" +
    "        <button value=\"\" class=\"btn btn-success\" ng-click=\"TaskModalController.add(taskForm)\">send</button>\n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("TasksManager"); }
catch(err) { module = angular.module("TasksManager", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("app/src/js/gt-tasks-manager/gt-task/gt-task.tpl.html",
    "<div class=\"box none-border\">\n" +
    "\n" +
    "    <div class=\"box\">\n" +
    "\n" +
    "        <button class=\"btn btn-primary glyphicon glyphicon-plus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.addTask(task)\"></button>\n" +
    "        <button class=\"btn btn-danger glyphicon glyphicon-minus btn-xs add-task-btn\" ng-click=\"GtTaskCtrl.removeTask(task)\"></button>\n" +
    "\n" +
    "        <span class=\"bold\">שם משימה:</span>\n" +
    "        <span>{{task.name}}</span>\n" +
    "\n" +
    "        <div>\n" +
    "            <span class=\"bold\">האם בוצע: </span>\n" +
    "            <span class=\"glyphicon\" ng-class=\"{'glyphicon-ok':task.isComplete,'glyphicon-remove':!task.isComplete}\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <span class=\"bold\">מזהה משימה: </span>\n" +
    "            <span>{{task.id}}</span>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div>\n" +
    "            <span class=\"bold\">תיאור משימה:</span>\n" +
    "            <div>\n" +
    "                {{task.description}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"box child none-border\"\n" +
    "         ng-repeat=\"task in task.tasks track by $index\"\n" +
    "         gt-task\n" +
    "         task=\"task\"\n" +
    "         api=\"api\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);
})();
