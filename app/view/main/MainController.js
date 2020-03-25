/**
 * Контроллер для Main
 */
Ext.define('ARM.view.main.MainController', {
    extend: 'IServ.UI.Classic.MainController',

    alias: 'controller.main',

    /**
     * установка обработчиков для событий
     */
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },

    /**
     * маршрутизация
     */
    routes: {
        ':node': 'onRouteChange'
    }
});