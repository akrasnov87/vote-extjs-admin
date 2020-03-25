/**
 * Закрытый список пользователей 
 * @class Core.view.sv_users.sv_users-listview
 */
Ext.define('Core.view.sv_users.sv_users-listview', { 
    extend: 'IServ.UI.Classic.ListViewPanel', 
    xtype: 'sv_users-listview',

    toolbarConfig: {
        title: 'Закрытый список пользователей',
        description: ''
    },
    
    /*** включает компонент для поиска*/
    search: true,
    layout: 'fit',
    items: [{
        xtype: 'listviewgrid',
        store: {
            type: 'sv_users',
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
        stateId: 'sv_users-listview',
        detailViewName: 'sv_users-detailview',
        createDetailViewName: 'sv_users-detailview',
        columns: [
            /*** b_disabled*/
            {      
                xtype: 'booleancolumn',
                dataIndex: 'b_disabled',
                text: 'b_disabled',
                filter: {
                    type: 'bool'
                }
            },
            /*** c_all_divisions*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_all_divisions',
                text: 'c_all_divisions',
                filter: {
                    type: 'string'
                }
            },
            /*** c_claims*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_claims',
                text: 'c_claims',
                filter: {
                    type: 'string'
                }
            },
            /*** c_login*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_login',
                text: 'c_login',
                filter: {
                    type: 'string'
                }
            },
            /*** c_password*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 'c_password',
                text: 'c_password',
                filter: {
                    type: 'string'
                }
            },
            /*** f_parent*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'f_parent',
                text: 'f_parent',
                filter: {
                    type: 'int'
                }
            },
            /*** id*/
            {      
                xtype: 'numbercolumn',
                dataIndex: 'id',
                text: 'id',
                filter: {
                    type: 'int'
                }
            },
            /*** s_hash*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 's_hash',
                text: 's_hash',
                filter: {
                    type: 'string'
                }
            },
            /*** s_salt*/
            {      
                xtype: 'gridcolumn',
                dataIndex: 's_salt',
                text: 's_salt',
                filter: {
                    type: 'string'
                }
            }
        ]
    }]
});