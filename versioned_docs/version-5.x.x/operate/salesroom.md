---
id: salesroom
title: 门店
sidebar_label: 门店
---
import Img from '@site/src/components/images';

:::info 使用场景
如果商城需要类似美团/联联周边游等客户到实体餐饮零售门店到店核销二维码（虚拟商品）的功能，如xxx双人餐、xx菜品等，则需要**门店**功能。在**门店**中添加该实体门店，并设置该门店的**核销人员**
:::

## 新增门店

点击**门店**->**新增门店**
<Img i="operate-salesroom-1.png"/>

依次填入门店相关信息，和新增团长或商户类似，选择区域和填入门店名称后**搜索地图**，在地图内选择精确位置会自动生成该门店的经纬度。如果该门店是本平台的**商户**，请**选择商户**与其关联
<Img i="operate-salesroom-2.png"/>

添加好以后在门店列表里即可管理门店的启用/禁用
<Img i="operate-salesroom-7.png"/>

## 添加门店核销人员
点击**核销人员**->**添加核销人员**
<Img i="operate-salesroom-3.png"/>

填入核销人员相关信息，选择**关联客户**和该**门店**后点击**提交**
<Img i="operate-salesroom-4.png"/>

:::tip
该核销人员需要至少登录一次小程序前端后才有关联客户，关联后该核销人员小程序端**个人中心**里会显示**到店核销**模块
<Img i="operate-salesroom-5.png"/>
<Img i="operate-salesroom-6.png"/>
:::

**门店**和**核销人员**设置好后在添加/编辑商品时就可以使用**到店核销**模块，商品如何添加请参阅[**商品**](/operate/goods.md)
<Img i="operate-salesroom-8.png"/>
