# PCFramework
PC端基础架构
技术体系是react+redux
router采用react-router并且与redux结合使用
异步方案暂时使用基础的redux-thunk，后续会升级方案，但目前可能不考虑saga，就业务场景来看，数据交互并不复杂
采用redux的主要原因是就目前业务场景来看，各业务模块数据相对独立，reducer拆分得当的情况下，数据更清晰。
执行npm run startDev 运行webpack-dev-server，可以进行调试，请注意生产线后index.html的引用路径问题，生产线时需要修正

1月11日更新

异步方案更新为redux-composable-fetch。方便开发，后续可能会开发一个基于async await的中间件来替代。
弃用了immutable和redux-immutable，原因为项目数据复杂度不大。用反而浪费。
优化了目录结构，没有按照传统Redux结构来划分，将component和对应的constant、action和reducer合并为componentRedux，方便开发查阅。
样式依旧采用less，因为使用了antd组件，就目前看复杂场景可能不多。
less文件全部与component在一起，也是为了方便开发，但公共部分放入外层的style文件中，后续若需要引用公共less，将单独引用。
去除了webpack中对react-dom的默认引用。后续考虑会去除React的默认引用。
table示例中出现了一个反模式内容，慎用慎用。

1月16日更新

弃用purerender高阶组件，改用react15版本后提供的PureComponent(汗颜，我竟然一直不知道......)
进一步整理了目录结构，因为react-router4提倡分散式Route配置，导致connect较为分散，故干脆先抛开展示型组件，布局组件等组件划分，统一归入视图中，后面正式开发中出现分类问题时再行修正
加入antd主题配置
使用antdLayout进行主页布局

3月6日更新

随着业务的不断开发，从视图展现和业务逻辑的角度出发，一直不断的在验证选型技术和项目结构是否足够健壮和稳定，是否能够切实合理的让业务视图的开发和架构设计的技术体系融洽结合，舒服漂亮的完成开发，真正从架构层次提供优质开发基础服务，这是整体上的架构设计问题，也充满在各个衔接的小细节上。此次，我理清了一些层次问题，而从业务开发出发发现的架构问题，也修正了一些。让架构目录更清晰，更符合逻辑，我相信后续还会有更改。这仅仅是开始。甚至有些方案只能体现在文章中，因为实际的业务场景对架构的设计还是有很大冲击的。
我觉得应该开另一个MD来描述这个架构体系了。请参阅同目录下Intro.MD
















