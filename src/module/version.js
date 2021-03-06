console.log( "==== sov2ex module: Version ====" )

const version = "1.0.0",
      cur_ver = localStorage["version"],
      details = {
          "1.0.0": `一个便捷的 v2ex 站内搜索引擎，详细请看 <a href="https://github.com/Bynil/sov2ex" target="_blank">功能介绍</a>`,
          "1.0.1": `新增加了主题功能，详细请看 <a href="https://github.com/Bynil/sov2ex" target="_blank">更新日志</a>`,
      }

function Init() {
    if ( !cur_ver ) {
        localStorage[ "version" ] = version;
        new Notify().Render( "欢迎使用", details[version] );
    } else if ( cur_ver != version ) {
        localStorage[ "version" ] = version;
        new Notify().Render( "升级提示", details[version] );
    }
}

export {
    Init,
}