# 安装

注册完小程序及配置好服务器后，官网下载吃货星球小程序的代码包如下：

## 后端 <span id="hd"></span>

1.打开宝塔面板，点击网站->添加站点

![](https://image.ch871.com/screenshot-bt.web01.png)

2.填入小程序站点域名（如何申请域名及备案、解析等相关内容请参阅上一章-[配置服务器](href="http://docs.ch871.com/config/ready.html#gmjpzfwq")），会自动生成该网站根目录，数据库选择“MySQL”，可选生成的数据库名及密码或者自定义，PHP版本选择5.6（v4.7版以下小程序可选择PHP5.3版，选错版本有可能出现定位、支付、退款等不可预知的错误！！）
记住数据库名、数据库用户名及密码

![](https://image.ch871.com/screenshot-bt.web02.png)

3.站点建立成功后此时的SSL证书为未部署状态，点击“设置”

![](https://image.ch871.com/screenshot-bt.web03.png)

4.点击SSL，如图指示粘贴证书和key的内容，或选择“宝塔SSL”直接在线申请（不建议），点击确定

![](https://image.ch871.com/screenshot-bt.web04.png)

5.打开新建的网站根目录（一般为/www/wwwroot/自己的域名）点击“上传”把后端`EP-Admin`文件夹上传至根目录

![](https://image.ch871.com/screenshot-bt.web05.png)

6.解压至根目录后后得到完整的文件目录

![](https://image.ch871.com/screenshot-bt.web06.png)

7.直接访问网站域名安装后端

![](https://image.ch871.com/screenshot-install.back01.png)

8.环境检测必须全部通过，PHP版本必须为5.6，关键目录权限应全部开启

![](https://image.ch871.com/screenshot-install.back02.png)

9.创建数据库，输入新建站点时保存的数据库名、用户名及密码

![](https://image.ch871.com/screenshot-install.back03.png)

10.创建初始管理员信息，初始管理员不可删除，请牢记账号密码，只有安装完成后后方可更改密码

![](https://image.ch871.com/screenshot-install.back04.png)

11.等待安装完成后访问后台

![](https://image.ch871.com/screenshot-install.back05.png)

12.后台简易功能简介

![](https://image.ch871.com/screenshot-index.back01.png)

13.后台必要设置：填入[本站网址](href="http://docs.ch871.com/config/setup.html#hd")、[腾讯地图AppKey](href="http://docs.ch871.com/config/ready.html#zctxdtk")后点击页面下方“更改”（直接点击文字可跳转获取步骤）

![](https://image.ch871.com/screenshot-index.back02.png)

支付必要设置：填入[小程序APPID和小程序APPSECRET](href="http://docs.ch871.com/config/ready.html#zc")、[商户ID和秘钥](href="http://docs.ch871.com/config/ready.html#zc")、上传[支付证书](href="http://docs.ch871.com/config/ready.html#pz")后点击更改（直接点击文字可跳转获取步骤）

![](https://image.ch871.com/screenshot-index.back03.png)

完成后证书变为“已上传“，自此后端安装工作全部完成。

## 前端 <span id="qd"></span>

下载微信开发者工具
