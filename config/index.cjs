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
  APP_ID: "wx2a4df0d78eaa291b",
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "bec2703df5a1fd53ecd5a1901c72d4a8",
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
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "老婆",
          year: "1993",
          date: "09-12",
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '李四', year: '1996', date: '09-31',
        // },
        // {
        //   type: '生日', name: '儿子', year: '2017', date: '10-31',
        // },
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
