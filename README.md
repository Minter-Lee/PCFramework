# PCFramework
PC端基础架构
技术体系是react+redux
router采用react-router并且与redux结合使用
异步方案暂时使用基础的redux-thunk，后续会升级方案，但目前可能不考虑saga，就业务场景来看，数据交互并不复杂
采用redux的主要原因是就目前业务场景来看，各业务模块数据相对独立，reducer拆分得当的情况下，数据更清晰。
执行npm run startDev 运行webpack-dev-server，可以进行调试，请注意生产线后index.html的引用路径问题，生产线时需要修正
