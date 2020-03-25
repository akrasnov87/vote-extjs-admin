/**
 * Навигация 
 * @class Core.model.pd_navigations
 */
Ext.define('Core.model.pd_navigations', { 
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
         * Тип представления
         */
        { 
            name: 'c_view_type', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Корневое представление
         */
        { 
            name: 'c_alias', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Без дочерних элементов
         */
        { 
            name: 'b_leaf', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Класс иконки
         */
        { 
            name: 'c_icon_cls', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Родительская запись
         */
        { 
            name: 'f_parent', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Заголовок
         */
        { 
            name: 'c_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Страница по умолчанию
         */
        { 
            name: 'b_default_token', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Тип меню
         */
        { 
            name: 'c_type', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Видимость
         */
        { 
            name: 'b_visible', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Иконка в формате base64
         */
        { 
            name: 'c_icon', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Выбираемый
         */
        { 
            name: 'b_selectable', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * В развернутом виде
         */
        { 
            name: 'b_expanded', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Сортировка
         */
        { 
            name: 'n_sort', 
            type: 'int',
            defaultValue: null 
        },
        /**
         * Доступен без авторизации
         */
        { 
            name: 'b_not_auth', 
            type: 'boolean',
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
    
        c_view_type: [{
            type: 'presence'
        }],  
    
        c_alias: [{
            type: 'presence'
        }],  
    
        b_leaf: [{
            type: 'presence'
        }],  
    
        b_default_token: [{
            type: 'presence'
        }],  
    
        c_type: [{
            type: 'presence'
        }],  
    
        b_visible: [{
            type: 'presence'
        }],  
    
        b_selectable: [{
            type: 'presence'
        }],  
    
        b_expanded: [{
            type: 'presence'
        }],  
    
        n_sort: [{
            type: 'presence'
        }],  
    
        b_not_auth: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});