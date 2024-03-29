---
id: deploy
title: 部署及上传
sidebar_label: 部署及上传
---
import Img from '@site/src/components/images';

## 后端部署 <span id="hd"></span>

:::tip
SaaS版客户请跳过本章内容
:::

### 建立网站

1. 打开宝塔面板，点击网站->添加站点
<Img i="screenshot-bt.web01.png"/>

2. 填入小程序站点域名（如何申请域名及备案、解析等相关内容请参阅上一章-**服务器**），会自动生成该网站根目录，数据库选择**MySQL**，可选生成的数据库名及密码或者自定义，PHP版本选择5.6（v4.7版以下小程序可选择PHP5.3版，选错版本有可能出现定位、支付、退款等不可预知的错误！！）
记住数据库名、数据库用户名及密码
<Img i="screenshot-bt.web02.png"/>

3. 站点建立成功后此时的SSL证书为未部署状态，点击**设置**
<Img i="screenshot-bt.web03.png"/>

4. 点击SSL，如图指示粘贴证书和key的内容，或选择**宝塔SSL**直接在线申请（不建议），点击确定
<Img i="screenshot-bt.web04.png"/>

5. 打开新建的网站根目录（一般为/www/wwwroot/自己的域名）点击**上传**把后端文件夹`EP-Admin`上传至根目录
<Img i="screenshot-bt.web05.png"/>

6. 解压至根目录后后得到完整的文件目录
<Img i="screenshot-bt.web06.png"/>

### 后台安装

1. 直接访问网站域名安装后端
<Img i="screenshot-install.back01.png"/>

2. 环境检测必须全部通过，PHP版本必须为5.6，关键目录权限应全部开启
<Img i="screenshot-install.back02.png"/>

3. 创建数据库，输入新建站点时保存的数据库名、用户名及密码
<Img i="screenshot-install.back03.png"/>

4. 创建初始管理员信息，初始管理员不可删除，请牢记账号密码，只有安装完成后后方可更改密码
<Img i="screenshot-install.back04.png"/>

5. 等待安装完成后访问后台
<Img i="screenshot-install.back05.png"/>

6. 后台功能简介
<Img i="screenshot-index.back01.png"/>

:::caution 后台必要设置
填入**本站网址**、**腾讯地图AppKey**后点击页面下方**更改**（直接点击文字可跳转获取步骤）
<Img i="screenshot-index.back02.png"/>
:::

:::caution 支付必要设置
填入**小程序APPID**和**小程序APPSECRET**、**商户ID和秘钥**、上传**支付证书**后点击更改（直接点击文字可跳转获取步骤）
<Img i="screenshot-index.back03.png"/>
完成后证书变为“已上传“，自此后端安装工作全部完成。
:::caution



## 小程序前端

### 下载微信开发者工具
根据自己的本地环境系统下载**[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)**
<Img i="screenshot-developers.weixin.qq.com01.png"/>

### 前端上传
1. 使用小程序管理员微信或小程序后台添加的小程序项目开发成员扫码登录微信开发者工具
<Img i="screenshot-mp.weixin.qq.com42.png"/>
<Img i="screenshot-developers.tool01.png"/>

2. 添加新的小程序
<Img i="screenshot-developers.tool02.png"/>

3. 填写项目名称（自定），目录选择下载好的前端文件夹`EP-WachatApp`，填入小程序AppID，初始模板选用**默认模板**，点击确定
<Img i="screenshot-developers.tool03.png"/>

4. 工具右上角点击**详情** -> **本地设置**，如图所示勾选项目设置，调试基础库可任选，基础库版本越低所兼容的微信版本越低，最低不能小于`2.9.3`
<Img i="screenshot-developers.tool04.png"/>

5. 工具中间资源管理器找到并点击根目录下的`siteinfo.js`文件，右侧把**自己的域名**修改为后端真实域名，点击上方**编译**
<Img i="screenshot-developers.tool05.png"/>

6. 编译完成后调试器Console中未有红叉错误（忽略黄色警告和蓝色提示），在后台添加简易测试商品后重新点击**编译**，左侧模拟器显示相对应的测试商品卡片即表明前端已跑通
<Img i="screenshot-developers.tool06.png"/>

7. 点击工具右上角**上传**，弹窗点击**确定**后等待上传完毕，非新装客户选择**版本升级**后点击**上传**（版本号和项目备注自定义）
<Img i="screenshot-developers.tool07.png"/>
<Img i="screenshot-developers.tool08.png"/>

8. 登录商城后台，请严格按照小程序平台里**设置** -> **服务类目**里的的商品类目添加不少于十个商品，否则上线版本将审核不通过
<Img i="screenshot-mp.weixin.qq.com43.png"/>
<Img i="screenshot-demo.back01.png"/>

9. 回到小程序平台，点击左侧**版本管理**，可以看到开发者工具上传的开发版本，体验用户可扫描点击**体验版**弹出的二维码体验真机线上小程序前端，点击**提交审核**,勾选平台规则，点击**下一步**
<Img i="screenshot-mp.weixin.qq.com44.png"/>
<Img i="screenshot-mp.weixin.qq.com45.png"/>

10. 点击**继续提交**，版本描述自行填写，下方表单建议均留空，根据自身需求选择**仅在企业微信中运行**和审核加急，点击**提交审核**
<Img i="screenshot-mp.weixin.qq.com46.png"/>
<Img i="screenshot-mp.weixin.qq.com47.png"/>

11. 提交后可看到审核版本，新开小程序一般1-3个工作日通过，小程序升级一般1个工作日内即可通过，审核成功后会通过不限于邮箱、微信及小程序平台站内信通知，审核不成功大概率会回复商品与类目数量不符，请于后台调整或添加商品后重新提交审核
<Img i="screenshot-mp.weixin.qq.com48.png"/>
<Img i="screenshot-mp.weixin.qq.com49.png"/>

12. 审核通过后点击**提交发布**，客户数量≤50000人选择**全量发布**，客户数量≥50000人选择**按微信号灰度发布**，管理员或开发人员扫码验证后发布成功
<Img i="screenshot-mp.weixin.qq.com50.png"/>
<Img i="screenshot-mp.weixin.qq.com51.png"/>

:::tip
至此吃货星球小程序已经可以正常运营了，如需更佳的用户体验请阅读下一章：**最佳准备**
:::
