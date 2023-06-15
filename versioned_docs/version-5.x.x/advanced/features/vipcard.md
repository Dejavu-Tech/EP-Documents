---
id: vipcard
title: 会员卡
sidebar_label: 会员卡
---
import Img from '@site/src/components/images';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

付费会员卡功能为客户提供商品特殊的优惠和折扣，从而提高客户忠诚度

## 会员卡设置
点击**营销**->**付费会员卡**->**会员卡设置**，选择是否开启**会员卡功能**，开启后设置**自定义会员卡名称**、**自定义会员卡图标**、**未开通会员卡片背景**、**会员有效期内卡片背景**、**会员已到期卡片背景**，选择是否**显示会员专享商品**后点击**提交**
<Img i="features-vipcard-1.png"/>

开启**会员卡功能**后小程序端**个人中心**、**购物车**会显示**会员卡页**入口
<Img i="features-vipcard-11.png"/>

以下是小程序端**会员卡页**不同会员卡状态时的效果
<Tabs
defaultValue="未开通会员卡"
values={[
{label: '未开通会员卡', value: '未开通会员卡'},
{label: '会员有效期内', value: '会员有效期内'},
{label: '会员已到期', value: '会员已到期'},
]}>
  <TabItem value="未开通会员卡">
    <Img i="features-vipcard-5.png"/>
  </TabItem>
  <TabItem value="会员有效期内">
    <Img i="features-vipcard-6.png"/>
  </TabItem>
  <TabItem value="会员已到期">
    <Img i="features-vipcard-7.png"/>
  </TabItem>
</Tabs>

:::tip
以上卡片背景均为系统默认
:::

开启后**会员卡功能**添加/编辑商品时显示会员专享价功能，勾选后可添加该商品的会员价
<Img i="features-vipcard-2.png"/>

并可设置该商品是否为会员专享（非会员无法购买）
<Img i="features-vipcard-3.png"/>

:::tip
* 商品编辑有会员价时小程序端**商品卡片**和**商品详情页**会显示该商品会员价
  <Img i="features-vipcard-9.png"/>
  <Img i="features-vipcard-10.png"/>

* 小程序端非会员购买**会员专享商品**时会提示**付费会员专享，普通客户无法购买**
  <Img i="features-vipcard-8.png"/>

* 在**商品**->**商品设置**中设置**会员专享商品弹出图片提示**会将上图改为图片提示
  <Img i="features-vipcard-4.png"/>

* 在**会员卡设置**中开启**显示会员专享商品**后，小程序端**会员卡页**的底部会展示**会员专享商品列表**
  <Img i="features-vipcard-15.png"/>
:::

## 会员卡权益
在**营销**->**会员卡权益**中，可添加会员卡权益名称及图标，用于在**会员卡页**展示其特权
<Img i="features-vipcard-12.png"/>

设置后小程序端**会员卡页**的**会员卡权益**展示如下
<Img i="features-vipcard-13.png"/>

## 添加会员卡
点击**营销**->**会员卡列表**->**添加会员卡**
<Img i="features-vipcard-14.png"/>

输入**会员卡名称**、**原价**、**现价**和**有效期天数**后点击**提交**
<Img i="features-vipcard-16.png"/>

全部设置完成后小程序端**会员卡页**如下图所示（有效期内）
<Img i="features-vipcard-17.png"/>

在后台亦可查看**会员卡购买记录**
<Img i="features-vipcard-18.png"/>
