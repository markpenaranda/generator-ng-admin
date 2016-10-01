module.exports = function (nga, admin) {

    var <%= entityName %> = admin.getEntity('<%= entityName %>');
    <%= entityName %>.listView()
        .fields([
            nga.field('name'),
        ])
        .listActions(['<ma-filtered-list-button entity-name="products" filter="{ category_id: entry.values.id }" size="xs" label="Related products"></ma-filtered-list-button>', 'edit', 'delete']);
    <%= entityName %>.creationView()
        .fields([
            nga.field('name')
                .validation({ required: true }),
            nga.field('', 'template')
                .label('')
                .editable(false)
                .template('<span class="pull-right"><ma-filtered-list-button entity-name="products" filter="{ category_id: entry.values.id }" size="sm"></ma-filtered-list-button></span>')

        ]);
    <%= entityName %>.editionView()
        .fields(<%= entityName %>.creationView().fields());

    return <%= entityName %>;
}