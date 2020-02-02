
const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
    fixBabelImports('imports', {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css'
    }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     //modifyVars: {"@primary-color": "#1DA57A"}
    // }),
);