---
id: overview
title: 概述
slug: /
---

import Img from '@site/src/components/images';

## 🌻关于 EATER PLANET 吃货星球

**吃货星球v5.x** 是一款基于[Thinkphp](https://www.thinkphp.cn/)开发的社区团购电商，整合Bootstrap、Redis等技术，并提供基于原生框架开发的微信小程序前端，为小微型物流或批发零售企业及个体户实现优质的社区电商平台和数字化运营管理。

###

## ✨功能特性
⚙ **业界全功能** : 限时秒杀、整点秒杀、优惠券、兑换码、礼品卡、预售、接龙、签到、积分、拼团、菜谱、礼品卡、虚拟销量、虚拟评价...

📦 **商品功能** : 商品自定义售卖时间、多规格、多分类、标签、置顶、送达时间、满减、新人、会员专享、限购、限制地域/距离、门店、团长、自提点等多种功能

🔌 **自定义** :  自定义专题活动、单团长（非社区团购模式）、快递模式

📝 **团长功能** : 团长多等级、分销、分佣、提成等多功能

🔘 **客户功能** : 客户等级、充值、会员卡、多级分销、分享、邀请新人、加群、海报等裂变功能

🐜 **前端体验** : 免登陆后置模式

📑 **外设打印** : 支持易联云、飞鹅、美团云小票打印机

😀 **配送模块** : 支持快递鸟、蜂鸟、顺丰同城、达达等第三方配送/快递API

🏬 **商户拓展** : 子商户自动生成独立后台可独立上货、结算、平台服务费提取

🏪 **到店核销** : 类美团/联联周边游到店核销二维码（虚拟商品）功能

🛠 **财务统计** : 后台订单统计、财务数据、分销列表、佣金提成统计、门店核销统计

✏ **快捷操作** : 订单一键发货、配送单一键生成、货物一键送达、运费模板自定义

🚅 **Redis** : 支持Redis解决高并发场景稳定输出

🏧 **支付设置** : 支持微信支付、余额支付、企业付款

🔐 **附件管理** : 七牛云、腾讯云COS、阿里云OSS对象存储远程附件

🔩 **模块化集成** : 前端一体化集成商户、团长、配送、拼团、接龙、核销模块

⛓ **微信组件** : 订阅消息推送、小程序直播、交易组件、微信商店、微信视频号、公众号关注组件、抖音/本地视频链接

## 🐶流程简图

<Img i="flow.png"/>

## 🦍技术栈

### 开发环境/工具
| 语言/工具          | 版本 | 官网                                                        |说明|
| ------------- | ------ | ------------------------------------------------------------ | ------ |
| IntelliJ IDEA | 2019.2.4 | https://www.jetbrains.com/idea/ |IDE |
| Mysql         | 8.0.18    | https://www.mysql.com/  |数据库 |
| redis         | 3.2    | https://redis.io/download   |分布式缓存 |
| PHP           | 5.6 | https://www.php.net/                        |全世界最好的语言？ |
| SwitchHosts   | 3.5.2        | https://oldj.github.io/SwitchHosts/             |本地host管理        |
| X-shell       | 7   | http://www.netsarang.com/download/software.html |Linux远程连接工具   |
| nginx         | 1.17.4  | http://nginx.org/en/download.html                            |HTTP和反向代理web服务器 |
| Navicat       | 12.0.0      | http://www.navicat.com.cn/            |数据库连接工具      |
| PowerDesigner | 16.5      | http://powerdesigner.de/                        |数据库设计工具      |
| MindMaster    | 8.5.0    | http://www.edrawsoft.cn/mindmaster              |思维导图设计工具    |
| ScreenToGif   | 2.27.3         | https://www.screentogif.com/                    |gif录制工具         |
| PicPick       | 5.1.4.0        | https://picpick.app/zh/                         |图片处理工具        |
| Snipaste      | 2.5.6       | https://www.snipaste.com/                       |屏幕截图工具        |
| 微信开发者工具 | 1.05.2102010   |https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html |微信公众平台前端开发   |
| Figma         | 93.4.0   |https://www.figma.com/|UI设计  |

### 后端

| 技术                 | 说明                | 官网                                                         |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| thinkPHP       | 后端开发框架        | [http://www.thinkphp.cn/](http://www.thinkphp.cn/) |
| Swagger-UI           | Api文档生产工具        | [https://github.com/swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui) |

### 前端

| 技术       | 说明                  | 官网                                                         |
| ---------- | --------------------- | ------------------------------------------------------------ |
| Bootstrap       | 后端前台框架              | [https://getbootstrap.com/](https://getbootstrap.com/)                     |
| DT-Admin-Dashboard  | 后端前台管理模板           | [https://github.com/Dejavu-Tech/DT-Admin-Dashboard/](https://github.com/Dejavu-Tech/DT-Admin-Dashboard/) |
| apexcharts   | 图表框架 | [https://github.com/apexcharts/apexcharts.js/](https://github.com/apexcharts/apexcharts.js/)         |
| Js-cookie  | cookie管理工具        | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie) |
| DT-WeUI  | 小程序端UI组件库            | [https://github.com/Dejavu-Tech/DT-WeUI/](https://github.com/Dejavu-Tech/DT-WeUI/) |

### 数据服务层

| 技术                 | 说明                | 官网                                                         |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| Mysql         | 数据库    |  [https://www.mysql.com/](https://www.mysql.com/) |
| Redis                | 分布式缓存          | [https://redis.io/](https://redis.io/)                       |

### 运行环境

| 技术                 | 版本     | 官网                                                         |
| -------------------- |--------| ------------------------------------------------------------ |
| nginx         | 1.18.0 | http://nginx.org/en/download.html                            |
| Mysql         | 5.6.48 | https://www.mysql.com/  |
| redis         | 3.2    | https://redis.io/download   |
| PHP           | 5.6    | https://www.php.net/                        |
| Pure-Ftpd | 1.0.49 | http://pureftpd.sourceforge.net/ |

### 第三方组件/接口
| 技术                 | 说明                | 官网                                                         |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| 七牛云          | 文件存储        | [https://developer.qiniu.com/kodo/sdk/1239/java](https://developer.qiniu.com/kodo/sdk/1239/java) |
| 阿里云OSS                  | 对象存储            | [https://github.com/aliyun/aliyun-php-sdk](https://github.com/aliyun/aliyun-php-sdk) |
| 腾讯云COS                  | 对象存储            | [https://github.com/tencentyun/cos-js-sdk-v5](https://github.com/tencentyun/cos-js-sdk-v5) |
| PhpSpreadsheet        | PHP电子表格生成库            | [https://github.com/PHPOffice/PhpSpreadsheet](https://github.com/PHPOffice/PhpSpreadsheet) |
| 百度统计                  | web端统计工具      |  [https://tongji.baidu.com](https://tongji.baidu.com)   |
| 腾讯移动统计                  | 小程序/app统计工具      |  [https://mta.qq.com/mta/ctr_index/download](https://mta.qq.com/mta/ctr_index/download)   |
| 腾讯位置服务                 | 腾讯移动端定位SDK      |  [https://lbs.qq.com/iosgeo/index.html](https://lbs.qq.com/iosgeo/index.html)   |
| 飞鹅打印机                 | 云小票打印机API      |  [http://www.feieyun.com/open/index.html?name=1](http://www.feieyun.com/open/index.html?name=1)   |
| 易联云打印机                 | 云小票打印机API      |  [https://dev.yilianyun.net/](https://dev.yilianyun.net/)   |
| 253云通讯                 | 营销短信及验证码      |  [https://zz.253.com/v5.html#/api_word](https://zz.253.com/v5.html#/api_word)   |
| UEditor               | 富文本编辑器    | [http://ueditor.baidu.com/website/thirdproject.html](https://github.com/rzwitserloot/lombok) |
| 快递鸟               | 物流跟踪API    | [http://www.kdniao.com/api-follow](http://www.kdniao.com/api-follow) |
| 达达配送              | 物流API    | [https://newopen.imdada.cn/](https://newopen.imdada.cn/) |
> 某些插件及接口需注册生成AppKey，不保证其免费时效性及I/O上限调整

## 🧰各版本说明
| 版本     | 功能                  | 商用 | 快速部署费    | 更新及维护费 | 价格            | 版本获取 |
|--------|---------------------| ----------- |----------| ------- |---------------| ------- |
| 免费版    | 仅提供单一的商品上架、分类和订单管理  | ✔ | -        | 不定期免费更新 | 免费            | [GitHub仓库](https://github.com/Dejavu-Tech/EP-WechatApp) |
| 商用版    | 提供全功能后端加密源码/小程序前端源码 | ✔️ | 1000元/实例 |1000元/年/实例| 3800元         ||
| SaaS版  | 提供全功能后端+服务器+小程序前端部署 | ✔️ | -        | - | 2800元/年       ||
| 代理授权版  | 提供全功能后端/小程序前端源码     | ✔️ | -    |-| 10800元        ||
| 二次开发授权 | 提供全功能后端/小程序前端源码     | ✔️ | -        | - | 电询议价 | [详询作者](https://github.com/Dejavu-Tech/EP-WechatApp) |

1. **免费版**: 商用遵循[**GNU AGPL v3.0 开源协议**](https://github.com/Dejavu-Tech/EP-WechatApp/blob/main/LICENSE)
2. **商用版**: 商用视为同意本公司[**服务协议**](https://github.com/Dejavu-Tech/EP-WechatApp)及[**隐私政策**](https://github.com/Dejavu-Tech/EP-WechatApp)
3. **SaaS版**: 使用本公司提供稳定的2核4G5M带宽云服务器，代理注册、发布小程序，提供云后台网站，购买即可上线使用
4. **代理授权版**: 授权本产品销售或自用，不约定最大部署实例数
5. **二次开发授权**: 二次开发按照合同约定授权商用环境、指定IP、软件有效期和最大部署实例数。
6. **新版**: 2022年12月31日前全款购买此版本的老用户可免费升级至新版

## 🧻合同模板
有意向购买商用版的客户可下载[合同模板](https://image.docs.ch871.com/吃货星球软件开发服务合同.pdf)以进一步了解本应用权限及购买事宜


## 📺DEMO

#### 后端 ➡️[https://demo.ch871.com](https://demo.ch871.com)

#### 前端 微信搜索`霸气妖吃货星球`或扫码：

<Img i="ep-qrcode.png" width="300"/>

## 🫧关于本文档
* 本文档适用于V5.x.版吃货星球微信小程序
* 购买快速部署的客户可跳过下一章准备工作，直接开始运营业务。如客户不具备服务器基础技术或无技术人员建议购买快速部署服务。
* 本文档在新的稳定版本发布之时同步更新，更新时间恕不另行通知。
* 对于本文档及软件使用过程中的如有任何疑问、bug和优化建议请点击[github](https://github.com/Dejavu-Tech/EP-WechatApp/issues/new/choose)或联系QQ:[142997](http://wpa.qq.com/msgrd?v=3&uin=142997&site=qq&menu=yes)。
* 使用吃货星球文档需遵循[GNU AGPL v3.0 协议](https://github.com/Dejavu-Tech/EP-Documents/blob/main/LICENSE)和吃货星球软件许可协议，禁止转载。


