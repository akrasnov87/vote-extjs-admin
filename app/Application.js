/**
 * Главное приложение
 */
Ext.define('ARM.Application', {
    extend: 'IServ.UI.Classic.Application',

    name: 'ARM',

    stores: [

    ],

    mainView: 'ARM.view.main.Main',

    defaultToken: 'login',

    onAppUpdate: function () {
        Ext.Msg.confirm('Обновление приложения', 'Доступна новая версия, перезагрузить страницу?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    launch: function () {
        var mainProvider = Ext.Direct.getProvider('default');
        if (mainProvider) {
            var viewModel = this.getMainView().down('view-about').getViewModel();
            viewModel.set('server', mainProvider.version);
            viewModel.set('serverDbVersion', mainProvider.dbVersion);
        }
    },
    privates : {
        /**
        * загрузка файлового менеджера
        * @param {function} callback функция обртаного вызова
        */
        loadFiler: function (callback) {
            callback();
        }
    }
});