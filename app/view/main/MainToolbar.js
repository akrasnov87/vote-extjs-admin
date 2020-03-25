/**
 * Главная панель
 */
Ext.define('ARM.view.main.MainToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'maintoolbar',
    refreshComponent: true,

    config: {
        /**
         * хранилище для пунктов меню
         */
        menuStore: null,
        /**
         * хранилище для получения информации о пользователе
         */
        userStore: null
    },

    viewModel: {
        data: {
            name: 'Анонимный'
        }
    },

    items: [{
            xtype: 'component',
            reference: 'senchaLogo',
            cls: 'iserv-logo',
            bind: {
                html: '<div class="main-logo"><img src="resources/company-logo.png" style="width:17px;"><b>{projectTitle}</b></div>',
                width: '{logoWidth}'
            },
            listeners: {
                element: 'el',
                click: 'toHome'
            }
        },
        // {
        //     margin: '0 0 0 8',
        //     ui: 'header',
        //     iconCls: 'x-fa fa-navicon',
        //     id: 'main-navigation-btn',
        //     handler: 'onToggleNavigationSize'
        // },
        '->',
        {
            xtype: 'splitbutton',
            itemId: 'menuitems',
            bind: {
                text: '{c_login}'
            }
        }
    ],

    /**
     * конструктор
     */
    constructor: function () {
        this.callParent(arguments);

        this.refreshContentView();
        Ext.getApplication().on('authorized', this.onAuthorized, this);
    },

    /**
     * обновление контента
     */
    refreshContentView: function () {
        this.setMenuItems();

        var vm = this.getViewModel();
        if (vm) {
            vm.set('projectTitle', Ext.manifest.title || Ext.manifest.name);
        }
    },

    /**
     * уничтожение объекта
     */
    destroy: function () {
        Ext.getApplication().un('authorized', this.onAuthorized, this);
        var store = this.getMenuStore();
        if (store) {
            store.destroy();
        }
        store = this.getUserStore();
        if (store) {
            store.destroy();
        }
        this.callParent(arguments);
    },

    privates: {
        /**
         * обработчик авторизации
         */
        onAuthorized: function () {
            var users = Ext.create(Ext.ClassManager.aliasToName['store.pv_users']);
            this.setUserStore(users);
            users.filter([{
                property: 'c_login',
                value: AuthProvider.getUserName()
            }], null, true);
            var me = this;
            users.load({
                callback: function (items) {
                    if (items && items.length > 0) {
                        var item = items[0];
                        var vm = me.getViewModel();
                        var data = item.getData();
                        for (var i in data) {
                            vm.set(i, data[i]);
                        }
                    }
                }
            });
        },

        /**
         * устанавливаем пункты пользовательского меню
         */
        setMenuItems: function () {
            var store = Ext.create(Ext.ClassManager.aliasToName['store.usermenu']);
            this.setMenuStore(store);
            var me = this;
            store.load({
                callback: function (items) {
                    var menu = [];
                    for (var i in items) {
                        var item = items[i];
                        menu.push(item.getData());
                    }
                    me.down('#menuitems').setMenu(menu);
                }
            });
        }
    }
});