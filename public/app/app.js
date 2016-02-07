'use strict';
define(['knockout', 'jquery', 'sammy'], function (ko, $, Sammy) {
    function ViewModel() {
        var self = this;
        self.containers = ko.observableArray();
        self.currentView = ko.observable();
        self.currentRepo = ko.observable();
        self.tags = ko.observableArray();

        self.goToTagList = function (name) {
            location.hash = 'repository' + '/' + name;
        };
    }

    var vm = new ViewModel();
    ko.applyBindings(vm);

    // Client-side routes
    Sammy(function () {
        this.get(/#repository\/([a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/.*)*)/, function () {
            var name = this.params.splat[0];
            vm.currentView('TagList');
            vm.currentRepo(name);
            $.getJSON('/api/repository/' + name, data => {
                vm.tags(data);
            });
        });

        this.get('', function () {
            vm.currentView('Home');
            $.getJSON('/api/repository', data => {
                vm.containers(data);
            });
        });
    }).run('');
});
