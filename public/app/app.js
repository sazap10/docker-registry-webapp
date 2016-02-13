'use strict';
define(['knockout', 'jquery', 'sammy'], function (ko, $, Sammy) {
    var colours = ['blue', 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'light-blue', 'cyan', 'teal', 'green',
        'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

    function ViewModel() {
        var self = this;
        self.containers = ko.observableArray();
        self.currentView = ko.observable();
        self.currentRepo = ko.observable();
        self.tags = ko.observableArray();

        self.cardColour = ko.pureComputed(function () {
            var random = Math.floor((Math.random() * colours.length));
            return colours[random];
        }, self);

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
            $.getJSON('/api/repository/' + name)
                .done(data => {
                    vm.tags(data);
                })
                .fail(() => {
                    location.hash = '';
                });
        });

        this.get('', function () {
            vm.currentView('Home');
            $.getJSON('/api/repository')
                .done(data => {
                    vm.containers(data);
                });
        });
    }).run('');
});
