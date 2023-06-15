---
id: server
title: 服务器
sidebar_label: 服务器
---
import Img from '@site/src/components/images';

## 购买及配置服务器

:::tip
本小程序前后端分离，后端需要独立的服务器或云服务器，云服务器推荐使用腾讯云、阿里云和华为云服务器，本章使用腾讯云为例，后续章节如备案、解析、安全组设置等内容亦默认使用用腾讯云作为文档主要案例，其他云服务器配置大同小异，可于网上查找部署教程或咨询作者提供帮助
:::

### 腾讯云注册

1. 打开[腾讯云官网](https://cloud.tencent.com/)，点击右上角**免费注册**
<Img i="screenshot-cloud.tencent.com01.png"/>

2. 微信扫码关注**腾讯云助手**进行注册
<Img i="screenshot-cloud.tencent.com02.png"/>

3. 微信快速认证注册完成后刷新浏览器，点击**去实名认证**
<Img i="screenshot-cloud.tencent.com03.png"/>

4. 在控制台选择**开始企业认证**
<Img i="screenshot-cloud.tencent.com04.png"/>

5. 按下图显示上传营业执照，填写相关内容后点击**下一步**
<Img i="screenshot-cloud.tencent.com05.png"/>

6. 认证方式可根据自身实际情况和方便程度任选，选择后点击**下一步**
<Img i="screenshot-cloud.tencent.com06.png"/>

7. 认证完成后显示认证成功页面
<Img i="screenshot-cloud.tencent.com07.png"/>
<Img i="screenshot-cloud.tencent.com08.png"/>


### 购买云服务器

1. 打开**[腾讯云产品限时秒杀](https://curl.qcloud.com/Xn06wqmR)**，根据客户自身的规划、预计客户量、预算I/O并发等考量，选择合适的**轻量应用服务器**或普通云服务器，服务器带宽尽量选择**5M**以上，其他信息可联系作者给予方案建议
<Img i="screenshot-cloud.tencent.com09.png"/>
<Img i="screenshot-cloud.tencent.com10.png"/>

2. 轻量应用服务器地域请选择地理位置离经营地址最近的地域，镜像推荐选择**腾讯云宝塔Linux面板**
<Img i="screenshot-cloud.tencent.com11.png"/>

:::tip
选择**腾讯云宝塔Linux面板**可省略本章最后**后台搭建**
:::

3. 普通云服务器机型应选择SN3ne、S4或S5型，带宽选择5M或以上，系统镜像选择**CentOS 7.5 64位**
<Img i="screenshot-cloud.tencent.com12.png"/>

4. 确认机型详情后支付
<Img i="screenshot-cloud.tencent.com13.png"/>

5. 支付成功后自动跳转控制台，可看到实例中新购的云服务器实例，牢记并保存**公网IPv4地址**，至此服务器购买完成
<Img i="screenshot-cloud.tencent.com14.png"/>

## 域名注册备案和解析

:::caution
包括不限于微信小程序等后台网站要求网站必须具有工信部备案的域名方可正常使用
:::

### 域名注册

1. 在腾讯云控制台界面点击左上角**云产品**，找到**域名与网站**，点击**域名注册**
<Img i="screenshot-cloud.tencent.com15.png"/>

2. 点击**立即选购**
<Img i="screenshot-cloud.tencent.com16.png"/>

3. 使用自定的英文字段进行查询，选择未被注册后缀后**加入购物车**，如后续有企业建站规划，优先考虑**.com**，**.net**，**.cn**等后缀域名，确定后点击右侧立即购买
<Img i="screenshot-cloud.tencent.com17.png"/>

4. 新用户域名注册需点击**新建信息模板**，如已有模板请跳过4-6步
<Img i="screenshot-cloud.tencent.com18.png"/>

5. 勾选**使用账号信息填写**，下列信息会自动填充，重点检查**域名所有者（英文）**、**联系人**和**通讯地址**，英文译名必须和中文拼音一致，证件类型选择**营业执照**，上传后检查识别证件号码是否和注册号一致，信息确认无误后勾选协议后点击**提交**
<Img i="screenshot-cloud.tencent.com19.png"/>

6. 等待域名信息模板实名审核完毕（一般1-2个工作日）
<Img i="screenshot-cloud.tencent.com20.png"/>

7. 实名认证完毕后返回域名订单，点击**添加**免费的SSL证书，选择已实名认证的域名信息模板，勾选协议后点击**提交订单**
<Img i="screenshot-cloud.tencent.com21.png"/>

8. 于[腾讯云代金券](https://curl.qcloud.com/WGpTkJZQ)领取代金券大礼包（代金券领取资格和使用限制变更由腾讯云提供，如有变更本文档恕不另行通知），刷新订单页面，勾选**使用代金券**后点击**提交订单**
<Img i="screenshot-cloud.tencent.com22.png"/>

9. 选择支付方式并支付订单
<Img i="screenshot-cloud.tencent.com23.png"/>
<Img i="screenshot-cloud.tencent.com24.png"/>

10. 回到控制台，等待域名命名审核完成（一般1个工作日以内，.cn等域名审核时间会略长）
<Img i="screenshot-cloud.tencent.com25.png"/>

### 域名解析

1. 审核完成后域名服务状态显示为正常，点击**解析**
<Img i="screenshot-cloud.tencent.com26.png"/>

2. 假设申请的域名为aaa.com，如果aaa.com和www.aaa.com这个域名另有他用，可将小程序后台设为如wxapp.aaa.com这样的三级域名（如无需要请跳至第18步），点击**添加记录**，主机记录添加三级域名如`wxapp`，记录类型选择**A**，线路类型选择**默认**，记录值填入所购服务器公用IPv4地址如`168.32.45.67`，其他如图所示填写或选择，仔细检查无误后点击**确定**
<Img i="screenshot-cloud.tencent.com29.png"/>

3. 由于购买域名时同时申请的免费SSL证书为**单域名证书**，即只支持aaa.com和www.aaa.com（除非申请的是付费泛域名型SSL证书），所以不同的三级域名都需要申请不同的免费SSL证书，点击操作下面的**SSL**
<Img i="screenshot-cloud.tencent.com30.png"/>

4. 点击**免费申请**
<Img i="screenshot-cloud.tencent.com31.png"/>

5. 申请后再次点击**SSL**（待验证状态），点击**查看详情**
<Img i="screenshot-cloud.tencent.com32.png"/>

6. 弹出的控制台窗口稍等片刻，管理员手机收到证书颁发短信刷新页面，如图所示表明证书已验证完毕并成功颁发，点击下载
<Img i="screenshot-cloud.tencent.com35.png"/>

7. 回到DNSPOD页面并刷新，可以看到自动加了一条验证记录，SSL图标变为绿色即为成功解析（成功后跳过以下18-23步）
<Img i="screenshot-cloud.tencent.com34.png"/>

8. 如无其他建站需求，请直接点击**快速添加解析**
<Img i="screenshot-cloud.tencent.com36.png"/>

9. 填入所购服务器公用IPv4地址如`168.32.45.67`后点击**确定**
<Img i="screenshot-cloud.tencent.com37.png"/>

10. 点击左侧**SSL证书**，点击**申请中**
<Img i="screenshot-cloud.tencent.com38.png"/>

11. 在弹出的控制台窗口中找到未绑定域名的证书，点击**提交资料**
<Img i="screenshot-cloud.tencent.com39.png"/>

12. 填入所购域名和绑定邮箱后点击**下一步**
<Img i="screenshot-cloud.tencent.com40.png"/>

13. 选择**自动添加DNS验证**后点击**下一步**
<Img i="screenshot-cloud.tencent.com41.png"/>

14. 回到DNSPOD页面，等待片刻后刷新页面可以看到自动加了一条验证记录，SSL图标变为绿色即为成功解析
<Img i="screenshot-cloud.tencent.com34.png"/>

### 网站备案

:::caution
在中国境内运营的所有域名网站必须通过工信部和公安部备案，否则所有数据传输将无法进行DNS解析，网页提示如下图
<Img i="screenshot-cloud.tencent.com42.png"/>
:::

:::tip
网站备案可通过各省管局网站、工信部网站、腾讯云控制台和腾讯云备案小程序等平台进行备案，本文档主要介绍在控制台备案的相关流程，由于备案时间一般在20个工作日以上，时间冗长，所以建议用户在购买服务器和域名之后立刻开始备案工作>
:::

1. 域名购买实名认证满3个工作日之后，在腾讯云控制台上方**云产品**找到并点击**网站备案**
<Img i="screenshot-cloud.tencent.com44.png"/>

2. 填入企业和域名等相关信息后点击**立即验证**
<Img i="screenshot-cloud.tencent.com45.png"/>

3. 在真实性核验页面，使用手机微信扫描页面提供的二维码
<Img i="screenshot-cloud.tencent.com46.png"/>

4. 自动跳转至小程序 **腾讯云视频核验**，并按照要求上传相关信息后点击**提交**
<Img i="screenshot-cloud.tencent.com47.png"/>

5. 控制台页面自动刷新后，填写**主体信息**和**主体负责人**信息后点击**下一步**
<Img i="screenshot-cloud.tencent.com48.png"/>
<Img i="screenshot-cloud.tencent.com49.png"/>

6. 填写**网站信息**、**网站负责人**和**网站补充材料**后点击**保存当前网站**
<Img i="screenshot-cloud.tencent.com50.png"/>
<Img i="screenshot-cloud.tencent.com51.png"/>
<Img i="screenshot-cloud.tencent.com52.png"/>

:::tip
域名证书在控制台**我的域名**页面，查看已购买的所有域名信息，在待下载域名证书的域名行中，单击**更多** -> **下载域名证书**，**授权书**模板如下图
<Img i="screenshot-cloud.tencent.com53.png"/>
:::

7. 点击**下一步**
<Img i="screenshot-cloud.tencent.com54.png"/>

8. 确认信息无误后勾选协议，点击**提交审核**
<Img i="screenshot-cloud.tencent.com55.png"/>

9. 至此备案材料提交完毕，腾讯云审核专员会在1-2个工作日内进行审核并电话联系沟通确认订单问题，请确保填写的联系方式真实且可接通。**若未接听电话，备案申请将被驳回**

10. 一般20个工作日后，工信部会通过短信通知至**[工信部备案管理系统](https://beian.miit.gov.cn/)**进行短信核验,短信核验成功后网站备案流程完毕。

11. 网站备案完成过后可通过[DNS.TECH域名检测](https://dns.tech/)输入域名查询备案信息，备案正常的网站域名如下图所示（忽略IPv6）
<Img i="screenshot-cloud.tencent.com43.png"/>

:::tip 备案后续流程
工信部备案完成后需要在1个月内主动申请公安备案，根据网站用途和各省管局要求可能需要经营性备案，具体备案流程请自行查阅各地管局和公安局要求和链接
:::


## 后台搭建
本小程序后台需要服务器LNMP环境搭建(linux+Nginx + Mysql + PHP) ，配置该环境有多种方式，本文推荐宝塔可视化面板安装，便于节省服务器维护的人力

### LNMP一键安装包
网址：lnmp.org，里面介绍一些要求，功能等，进入到安装页面说明，找到相关的安装说明，运行，然后按照操作说明安装即可

### 宝塔Linux面板

> 以下操作流程以腾讯云服务器为例

1. 以root权限登录服务器界面,安装宝塔面板
```bash
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh e3bb5f4de
```

2. 记住登录端口及后缀、账户和初始密码
<Img i="screenshot-bt.cloud.tencent.com01.png"/>

安装完成后如没有显示登录初始信息，则输入：
```bash
sudo /etc/init.d/bt default
```

3. 升级面板
```bash
curl http://download.bt.cn/install/update6.sh|bash
```

4. 此时访问外网面板是打不开的，因为宝塔面板的默认端口（8888）不在服务器实例的安全组规则内，所以需要打开腾讯云安全组
<Img i="screenshot-bt.cloud.tencent.com02.png"/>

5. 新建安全组
<Img i="screenshot-bt.cloud.tencent.com03.png"/>

6. 点击修改规则
<Img i="screenshot-bt.cloud.tencent.com04.png"/>

7. 导入入站规则
<Img i="screenshot-bt.cloud.tencent.com05.png"/>

8. 下载[sg_input_rules.xlsx](https://www.bt.cn/bbs/forum.php?mod=attachment&aid=NDExOHwxZGM2MWM1YXwxNjI3MjQ0NzIxfDE0MjMxMnwxMjI5)入站规则，选择此文件导入
<Img i="screenshot-bt.cloud.tencent.com06.png"/>
<Img i="screenshot-bt.cloud.tencent.com07.png"/>

9. 导入出站规则
<Img i="screenshot-bt.cloud.tencent.com08.png"/>

10. 下载[sg_output_rules.xlsx](https://www.bt.cn/bbs/forum.php?mod=attachment&aid=NDExOXw0ODkxYjFiZHwxNjI3MjQ0NzIxfDE0MjMxMnwxMjI5)出站规则，选择此文件导入
<Img i="screenshot-bt.cloud.tencent.com09.png"/>

11. 检查是否导入完整
<Img i="screenshot-bt.cloud.tencent.com10.png"/>

12. 安全组关联服务器实例
<Img i="screenshot-bt.cloud.tencent.com11.png"/>

13. 浏览器打开外网面板地址，输入面板初始账号和密码
<Img i="screenshot-bt.cloud.tencent.com12.png"/>

14. 阅读并勾选协议后进入面板
<Img i="screenshot-bt.cloud.tencent.com13.png"/>

15. 面板首页弹出的推荐安装套件，选择**LNMP**,并严格选择图示的版本，推荐使用快速安装
<Img i="screenshot-bt.cloud.tencent.com14.png"/>

16. 安装完成后绑定宝塔账号
<Img i="screenshot-bt.cloud.tencent.com15.png"/>

:::info
至此宝塔面板环境搭建完毕。
:::

### 手工搭建环境

1. 查看是否已安装wget
```bash
rpm -qa wget
```

2. 否则安装
```bash
yum install wget
```

3. 查看是否已安装编译器
```bash
rpm -qa gcc
```
4. 否则安装
```bash
yum install gcc gcc-c++
```
5. 安装nginx依赖包

:::tip
nginx的Rewrite模块和HTTP核心模块会使用到PCRE正则表达式语法
:::

```bash
yum -y install pcre pcre-devel
```

6. nginx的各种模块中需要使用gzip压缩
```bash
yum -y install zlib zlib-devel
```

7. 安装套接字层密码库
```bash
yum -y install openssl openssl-devel
```

8. 下载nginx包并解压到/usr/local/src目录中
```bash
cd /usr/local/src
wget http://nginx.org/download/nginx-1.1.10.tar.gz
tar -zxvf nginx-1.1.10.tar.gz
```

9. 编译安装到/usr/local/nginx目录中
```bash
cd nginx-1.1.10
./configure --prefix=/usr/local/nginx
make
make install
```

10. 创建并设置nginx运行账号
```bash
groupadd nginx
useradd -M -g nginx -s /sbin/nologin nginx
cd /usr/local/nginx/conf
vim nginx.conf
```

11. 设置user参数
```bash
user nginx nginx
/usr/local/nginx/sbin/nginx -t
```

12. 启动nginx
```bash
/usr/local/nginx/sbin/nginx
ps -ef|grep nginx
```

13. 访问服务器IP，出现下图说明安装成功
<Img i="screenshot-nginx01.png"/>
