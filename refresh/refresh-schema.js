var template_generator = require('mobnius-extjs-view-generate');
template_generator({
    namespace: 'Core',
    connectionString: 'host:94.232.58.154;port:5432;user:mobnius;password:mobnius-0;database:vote-dev',
    output: {
        override: "./overrides",
        model: "./packages/local/core_package/src",
        store: "./packages/local/core_package/src",
        classic: "./packages/local/core_classic_package/src"
    },
    autoRemove: true,
    schemaList: ["'core'", "'dbo'"],
    schemaReference: require('path').join(__dirname, './', 'schema.reference')
}, true, function () { });