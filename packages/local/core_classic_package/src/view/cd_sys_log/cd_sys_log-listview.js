/**
 *  Логирование job 
 * @class Core.view.cd_sys_log.cd_sys_log-listview
 */
Ext.define('Core.view.cd_sys_log.cd_sys_log-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'cd_sys_log-listview',

    toolbarConfig: {
        title: ' Логирование job',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'cd_sys_log',
            autoLoad: true
        },
        enableAutoResizeColumns: true,
        selModel: {
            selType: 'checkboxmodel',
            listeners: {
                selectionchange: 'onSelectionChange'
            }
        },
        stateful: false,
        stateId: 'cd_sys_log-listview',
        detailViewName: 'cd_sys_log-detailview',
        createDetailViewName: 'cd_sys_log-detailview',
        columns: [
            /*** c_descr*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_descr',
                text: 'c_descr',
                filter: {
                    type: 'string'
                }
            },
            /*** d_timestamp*/
            {      
                xtype: 'datecolumn',
                dataIndex: 'd_timestamp', 
                text: 'd_timestamp',
                editor: {
                    xtype: 'datefield'
                },
                filter: {
                    type: 'date',
                    submitFormat: 'Y-m-d H:i:s'
                },
                exportStyle: {
                    format: 'd.m.Y HH:MM:SS',
                    alignment: {
                        horizontal: 'Right'
                    }
                }
            },
            /*** id*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'id',
                text: 'id',
                filter: {
                    type: 'string'
                }
            },
            /*** 0 - сообщение1 - предупрежденние2 - ошибка*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'n_level_msg',
                text: '0 - сообщение1 - предупрежденние2 - ошибка',
                filter: {
                    type: 'int'
                }
            }
        ]
    }]
});