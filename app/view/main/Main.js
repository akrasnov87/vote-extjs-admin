/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ARM.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.list.Tree',
        'Ext.ux.form.SearchField',
        'IServ.UI.*',
        'Core.*'
    ],

    refreshComponent: true,

    controller: 'main',
    viewModel: 'main',

    itemId: 'mainView',

    layout: {
        type: 'vbox',
        pack: 'start'
    },
    defaults: {
        width: '100%'
    },

    items: [{
            xtype: 'maintoolbar',
            cls: 'iserv-dash-dash-headerbar shadow',
            bind: {
                height: '{mainToolbarHeight}'
            },
            itemId: 'headerBar',
            hidden: true
        },
        {
            flex: 1,
            layout: {
                type: 'hbox',
                pack: 'start'
            },
            defaults: {
                height: '100%'
            },
            items: [{
                xtype: 'navcontainer',
                bind: {
                    aboutHeight: '{aboutHeight}',
                    mainToolbarHeight: '{mainToolbarHeight}'
                },
                itemId: 'navigationContainer',
                minWidth: 64,
                maxWidth: 300,
                width: 300,
                hidden: true
            }, {
                flex: 1,
                xtype: 'container',
                reference: 'mainCardPanel',
                cls: 'sencha-dash-right-main-container',
                layout: {
                    type: 'card'
                }
            }]
        },
        {
            // выводится панель для ввода команд 
            xtype: 'view-command-console',
            reference: 'cmdconsole',
            dock: 'bottom',
            hidden: localStorage.getItem('terminal') != null ? false : true
        },
        {
            xtype: 'view-about',
            dock: 'bottom',
            ui: 'footer',
            weight: 150,
            bind: {
                height: '{aboutHeight}'
            }
        },
        {
            xtype: 'componentmanager',
            dock: 'bottom',
            weight: 100,
            hidden: localStorage.getItem('componentmanager') != null ? false : true
        }
    ],

    /**
     * вывести консоль для ввода команды
     */
    showConsole: function () {
        this.lookup('cmdconsole').show();
    },

    refreshContentView: function () {
        var vm = this.getViewModel();
        vm.set('username', AuthProvider.getUserName());
    },

    /**
     * возвращается хранилище навигации
     * @returns {any}
     */
    getNavigationStore: function () {
        return this.down('#navigationTreeList').getStore();
    },

    privates: {
        /**
         *  после отрисовки
         */
        onRender: function () {
            this.refreshContentView();
            this.callParent(arguments);
        }
    }
});