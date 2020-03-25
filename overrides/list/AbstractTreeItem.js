Ext.define('ARM.overrides.list.AbstractTreeItem', {
    override: 'Ext.list.AbstractTreeItem',

    updateSelected: function (selected) {
        if (!this.isConfiguring) {
            var parent = this.getParentItem();
            while (parent && !parent.isRootListItem) {
                parent.setSelectedParent(selected);
                parent.expand(); // после принудительного выделения обязательно раскрываем ветку
                parent = parent.getParentItem();
            }
        }
    }
});