/**
 * Пользователи в ролях 
 * @class Core.model.pd_userinroles
 */
Ext.define('Core.model.pd_userinroles', { 
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    displayProperty: '', // поле для вывода значения в списке
    identifier: 'sequential',
    fields: [
        /**
         * Идентификатор
         */
        { 
            name: 'id', 
            type: 'int',
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
         * Роль
         */
        { 
            name: 'f_role', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Удален
         */
        { 
            name: 'sn_delete', 
            type: 'boolean',
            defaultValue: null 
        }
    ],
    validators: {
        id: [{
            type: 'presence'
        }],  
    
        f_user: [{
            type: 'presence'
        }],  
    
        f_role: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});