/**
 * Права доступа 
 * @class Core.model.pd_accesses
 */
Ext.define('Core.model.pd_accesses', { 
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
            allowNull: true 
        },
        /**
         * Роль
         */
        { 
            name: 'f_role', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Табл./Предст./Функц.
         */
        { 
            name: 'c_name', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Действие
         */
        { 
            name: 'f_action', 
            type: 'int', 
            allowNull: true 
        },
        /**
         * Серверный фильтр
         */
        { 
            name: 'c_criteria', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Путь в файловой системе
         */
        { 
            name: 'c_path', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Функция RPC или её часть
         */
        { 
            name: 'c_function', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Запрещенные колонки
         */
        { 
            name: 'c_columns', 
            type: 'string', 
            allowNull: true 
        },
        /**
         * Разрешено удалени
         */
        { 
            name: 'b_deletable', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Разрешено создание
         */
        { 
            name: 'b_creatable', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Разрешено редактирование
         */
        { 
            name: 'b_editable', 
            type: 'boolean',
            defaultValue: null 
        },
        /**
         * Дополнительный доступ
         */
        { 
            name: 'b_full_control', 
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
    
        b_deletable: [{
            type: 'presence'
        }],  
    
        b_creatable: [{
            type: 'presence'
        }],  
    
        b_editable: [{
            type: 'presence'
        }],  
    
        b_full_control: [{
            type: 'presence'
        }],  
    
        sn_delete: [{
            type: 'presence'
        }]  
    }
});