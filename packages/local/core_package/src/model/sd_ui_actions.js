/**
 * Операции 
 * @class Core.model.sd_ui_actions
 */
Ext.define('Core.model.sd_ui_actions', { 
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
         * Идентификатор представления
         */
        { 
            name: 'c_view_id', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Имя команды
         */
        { 
            name: 'c_text', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Иконка
         */
        { 
            name: 'c_icon', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Метод
         */
        { 
            name: 'c_operation', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Представление
         */
        { 
            name: 'c_action_view', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Тип операции
         */
        { 
            name: 'c_xtype', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Место установки
         */
        { 
            name: 'c_place', 
            type: 'string',
            defaultValue: null 
        },
        /**
         * Сортировка по умолчанию
         */
        { 
            name: 'n_sort', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Описание операции
         */
        { 
            name: 'c_tooltip', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Стиль
         */
        { 
            name: 'c_ui', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Родительский элемент
         */
        { 
            name: 'f_parent', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Условие выполнения
         */
        { 
            name: 'c_selectiondependencytype', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Сообщение с текстом перед выполнением
         */
        { 
            name: 'c_confirmationmessage', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * JavaScript-функция
         */
        { 
            name: 'c_javascript_fn', 
            type: 'string', 
            allowNull: true 
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
    
        c_view_id: [{
            type: 'presence'
        }],  
    
        c_text: [{
            type: 'presence'
        }],  
    
        c_xtype: [{
            type: 'presence'
        }],  
    
        c_place: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});