/**
 * контейнер для отрисоки навигации
 */
Ext.define('ARM.view.main.NavContainer', {
    extend: 'Ext.Container',
    xtype: 'navcontainer',

    cls: 'nav-container',

    scrollable: true,

    config: {
        /**
         * высота компонента для вывода информации о приложении
         */
        aboutHeight: 0,
        /**
         * верхняя панель
         */
        mainToolbarHeight: 0
    },

    items: [{
        xtype: 'treelist',
        ui: 'nav',
        height: '100%',
        itemId: 'navigationTreeList',
        expanderFirst: false,
        expanderOnly: false,
        listeners: {
            selectionchange: 'onNavigationTreeSelectionChange',
            itemclick: 'onNavigationTreeItemClick',
            render: 'onNavigationRender'
        }
    }],

    /**
     * перед отрисовкой элементов
     */
    beforeLayout: function () {
        this.height = Ext.Element.getViewportHeight() - this.getMainToolbarHeight() - this.getAboutHeight();
        this.callParent(arguments);
    }
});