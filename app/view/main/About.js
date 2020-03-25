/**
 * компонент для вывода информации о приложении
 */
Ext.define('ARM.view.main.About', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'view-about',

    viewModel: {
        data: {
            title: '',
            version: '0.0.0.0',
            server: '0.0.0.0',
            serverDbVersion: '0.0.0.0'
        }
    },

    items: [{
        xtype: 'container',
        padding: '0 0 0 20px',
        bind: {
            html: '{title} - {version}<br />REST {server}<br />БД {serverDbVersion}'
        }
    }],

    /**
     * инициализация компонентов
     */
    initComponent: function () {
        this.callParent(arguments);

        var vm = this.getViewModel();
        vm.set('title', Ext.manifest.title || Ext.manifest.name);
        vm.set('version', Ext.manifest.version);
        vm.set('server', '0.0.0.0');
        vm.set('serverDbVersion', '0.0.0.0');
    }
});