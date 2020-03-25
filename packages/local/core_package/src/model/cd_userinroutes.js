/**
 * Исполнители задания 
 * @class Core.model.cd_userinroutes
 */
Ext.define('Core.model.cd_userinroutes', { 
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    displayProperty: '', // поле для вывода значения в списке
    identifier: '',
    fields: [
        /**
         * Идентифиактор
         */
        { 
            name: 'id', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Маршрут
         */
        { 
            name: 'f_route', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Пользователь
         */
        { 
            name: 'f_user', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Является главным
         */
        { 
            name: 'b_main', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Дата создания в БД
         */
        { 
            name: 'dx_created', 
            type: 'date', 
            allowNull: true 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        f_route: [{
            type: 'presence'
        }],  
    
        f_user: [{
            type: 'presence'
        }],  
    
        b_main: [{
            type: 'presence'
        }]  
    }
});