requirejs.config({
    paths: {
        knockout: '../assets/vendor/knockout/dist/knockout',
        jquery: '../assets/vendor/jquery/dist/jquery',
        sammy: '../assets/vendor/sammy/lib/sammy'
    }
});

requirejs(['app']);