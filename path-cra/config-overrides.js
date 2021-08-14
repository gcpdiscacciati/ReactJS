/*
   Aviso: injectBabelPlugin foi depreciado 
 */
// const {injectBabelPlugin} = require('react-app-rewired');

// const rootImport = [
//     "root-import",
//     {
//         rootPathPrefix: "~",
//         rootPathSuffix: "src",
//     }
// ];
//module.exports = config => injectBabelPlugin(rootImport, config);

const{override, AddBabelPlugins, addBabelPlugins} = require('customize-cra');

module.exports = override(
    ...addBabelPlugins(
        [
            "babel-plugin-root-import",
            {
                rootPathPrefix: "~",
                rootPathSuffix: "src",
            }
        ]
    )
);