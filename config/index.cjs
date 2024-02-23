/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: "push-deer",
  // 使用微信测试号：公众号APP_ID
  APP_ID: "",
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "",
  // 为了避免推送服务器误将脚本列为恶意推送脚本，可设置每分钟脚本最大推送数
  // 每分钟脚本最大推送数，超过此数将会休眠1分钟后再发送剩余消息，不填则默认为5
  // 此项不建议随意修改
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,

    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,

    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: true,

    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: true,

    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,

    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  },
 /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  LITERARY_PREFERENCE: '',
  PROVINCE: "四川",
  CITY: "成都",
  USERS: [
    {
      // 想要发送的人的名字
      name: "亲爱的老婆！",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "PDU28470T39hIHTfI0wj692k8uKqKVfLYOSEWzArr",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "0001",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "",
      festivals: [
        {
          type: '节日', name: '结婚纪念日', year: '2017', date: '05-01',
        },
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "老婆",
          year: "1993",
          date: "09-12",
        },
        {
          type: '生日', name: '赵沐晗', year: '2017', date: '10-31',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2015-04-25" },
        // 结婚纪念日
        { keyword: "marry_day", date: "2017-05-01" },
      ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "0002",

  CALLBACK_USERS: [
    {
      name: "老婆收到啦！",
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "PDU28470T39hIHTfI0wj692k8uKqKVfLYOSEWzArr",
    },
  ],
};

module.exports = USER_CONFIG;
