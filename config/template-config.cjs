/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: "0001",
    title: "亲爱的老婆！",
    desc: `🗓️{{date.DATA}}

      💕今天是我们相识的第{{love_day.DATA}}天

      {{birthday_message.DATA}}
      
      ☁️今日{{city.DATA}}天气：{{weather.DATA}} {{notice.DATA}} 

      🌡️温度: {{min_temperature.DATA}}-{{max_temperature.DATA}}

      🍃风向: {{wind_direction.DATA}}

      💨风级: {{wind_scale.DATA}}
      
      💧湿度: {{shidu.DATA}}

      🌅日出时间: {{sunrise.DATA}}

      🌇日落时间: {{sunset.DATA}}

      温馨提示：{{holidaytts.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
      `,
  },
  {
    id: "0002",
    title: "推送完成提醒",
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
      
      ---

      推送信息：🗓️{{date.DATA}}

      💕今天是我们相识的第{{love_day.DATA}}天

      {{birthday_message.DATA}}
      
      ☁️今日{{city.DATA}}天气：{{weather.DATA}} {{notice.DATA}} 

      🌡️温度: {{min_temperature.DATA}}-{{max_temperature.DATA}}

      🍃风向: {{wind_direction.DATA}}

      💨风级: {{wind_scale.DATA}}
      
      💧湿度: {{shidu.DATA}}

      🌅日出时间: {{sunrise.DATA}}

      🌇日落时间: {{sunset.DATA}}

      温馨提示：{{holidaytts.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `,
  },
];

module.exports = TEMPLATE_CONFIG;
