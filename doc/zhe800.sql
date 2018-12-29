/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zhe800

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 10:01:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `cid` int(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `yuan` int(255) DEFAULT NULL,
  `xianjia` int(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=141 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('138', '141', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机', 'img/Detpage/1-a.jpg', '268', '150', '1', '150');
INSERT INTO `goodslist` VALUES ('139', '141', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机', 'img/Detpage/1-a.jpg', '268', '150', '1', '150');
INSERT INTO `goodslist` VALUES ('140', '141', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机', 'img/Detpage/1-a.jpg', '268', '150', '1', '150');

-- ----------------------------
-- Table structure for table
-- ----------------------------
DROP TABLE IF EXISTS `table`;
CREATE TABLE `table` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  `url1` varchar(255) DEFAULT NULL,
  `url2` varchar(255) DEFAULT NULL,
  `url3` varchar(255) DEFAULT NULL,
  `url4` varchar(255) DEFAULT NULL,
  `url5` varchar(255) DEFAULT NULL,
  `yuan` int(4) DEFAULT NULL,
  `xianjia` int(4) DEFAULT NULL,
  `name2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=213 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table
-- ----------------------------
INSERT INTO `table` VALUES ('141', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '268', '150', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机');
INSERT INTO `table` VALUES ('142', 'Apple/苹果2017年新款MacBook12英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '500', '300', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('143', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通4G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '732', '450', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.99');
INSERT INTO `table` VALUES ('144', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通4g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '964', '600', '搭载高通骁龙845 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('145', '飞利浦男士电动剃须刀充电式S1010三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '1196', '750', '飞利浦男士电动剃须刀充电式S1010三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('146', '飞利浦电吹风机BHC010家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '1428', '900', '集风嘴 1200瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('147', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8189', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '1660', '1050', '2018春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('148', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8805', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '1892', '1200', '2018春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('149', '100%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '2124', '1350', '100%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('150', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '2356', '1500', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('151', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通5g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '2588', '1650', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通5g智能手机');
INSERT INTO `table` VALUES ('152', 'Apple/苹果2017年新款MacBook13英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '2820', '1800', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('153', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通5G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '3052', '1950', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.100');
INSERT INTO `table` VALUES ('154', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通5g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '3284', '2100', '搭载高通骁龙846 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('155', '飞利浦男士电动剃须刀充电式S1011三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '3516', '2250', '飞利浦男士电动剃须刀充电式S1011三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('156', '飞利浦电吹风机BHC011家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '3748', '2400', '集风嘴 1201瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('157', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8190', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '3980', '2550', '2019春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('158', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8806', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '4212', '2700', '2019春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('159', '101%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '4444', '2850', '101%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('160', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '4676', '3000', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('161', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通6g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '4908', '3150', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通6g智能手机');
INSERT INTO `table` VALUES ('162', 'Apple/苹果2017年新款MacBook14英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '5140', '3300', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('163', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通6G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '5372', '3450', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.101');
INSERT INTO `table` VALUES ('164', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通6g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '5604', '3600', '搭载高通骁龙847 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('165', '飞利浦男士电动剃须刀充电式S1012三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '5836', '3750', '飞利浦男士电动剃须刀充电式S1012三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('166', '飞利浦电吹风机BHC012家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '6068', '3900', '集风嘴 1202瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('167', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8191', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '6300', '4050', '2020春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('168', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8807', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '6532', '4200', '2020春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('169', '102%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '6764', '4350', '102%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('170', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '6996', '4500', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('171', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通7g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '7228', '4650', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通7g智能手机');
INSERT INTO `table` VALUES ('172', 'Apple/苹果2017年新款MacBook15英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '7460', '4800', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('173', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通7G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '7692', '4950', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.102');
INSERT INTO `table` VALUES ('174', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通7g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '7924', '5100', '搭载高通骁龙848 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('175', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '8156', '5250', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('176', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '268', '150', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通4g智能手机');
INSERT INTO `table` VALUES ('177', 'Apple/苹果2017年新款MacBook12英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '500', '300', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('178', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通4G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '732', '450', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.99');
INSERT INTO `table` VALUES ('179', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通4g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '964', '600', '搭载高通骁龙845 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('180', '飞利浦男士电动剃须刀充电式S1010三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '1196', '750', '飞利浦男士电动剃须刀充电式S1010三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('181', '飞利浦电吹风机BHC010家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '1428', '900', '集风嘴 1200瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('182', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8189', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '1660', '1050', '2018春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('183', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8805', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '1892', '1200', '2018春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('184', '100%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '2124', '1350', '100%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('185', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '2356', '1500', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('186', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通5g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '2588', '1650', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通5g智能手机');
INSERT INTO `table` VALUES ('187', 'Apple/苹果2017年新款MacBook13英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '2820', '1800', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('188', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通5G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '3052', '1950', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.100');
INSERT INTO `table` VALUES ('189', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通5g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '3284', '2100', '搭载高通骁龙846 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('190', '飞利浦男士电动剃须刀充电式S1011三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '3516', '2250', '飞利浦男士电动剃须刀充电式S1011三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('191', '飞利浦电吹风机BHC011家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '3748', '2400', '集风嘴 1201瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('192', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8190', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '3980', '2550', '2019春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('193', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8806', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '4212', '2700', '2019春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('194', '101%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '4444', '2850', '101%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('195', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '4676', '3000', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('196', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通6g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '4908', '3150', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通6g智能手机');
INSERT INTO `table` VALUES ('197', 'Apple/苹果2017年新款MacBook14英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '5140', '3300', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('198', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通6G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '5372', '3450', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.101');
INSERT INTO `table` VALUES ('199', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通6g手机', '209', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '5604', '3600', '搭载高通骁龙847 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('200', '飞利浦男士电动剃须刀充电式S1012三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '5836', '3750', '飞利浦男士电动剃须刀充电式S1012三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('201', '飞利浦电吹风机BHC012家用恒温可折叠冷热风大功率迷你正品', '底价折上折', 'img/Detpage/6-a.jpg', 'img/Detpage/6-b.jpg', 'img/Detpage/6-c.jpg', 'img/Detpage/6-d.jpg', 'img/Detpage/6-e.jpg', '6068', '3900', '集风嘴 1202瓦 恒温护发 可折叠设计');
INSERT INTO `table` VALUES ('202', '芊艺风衣女中长款2018秋新款韩版显瘦收腰过膝休闲长袖外套P8191', '底价折上折', 'img/Detpage/7-a.jpg', 'img/Detpage/7-b.jpg', 'img/Detpage/7-c.jpg', 'img/Detpage/7-d.jpg', 'img/Detpage/7-e.jpg', '6300', '4050', '2020春秋新款韩版显瘦收腰过膝休闲长袖双排扣外套');
INSERT INTO `table` VALUES ('203', '芊艺半高领t恤女长袖打底衫2018春秋新款韩范修身显瘦上衣T8807', '底价折上折', 'img/Detpage/8-a.jpg', 'img/Detpage/8-b.jpg', 'img/Detpage/8-c.jpg', 'img/Detpage/8-d.jpg', 'img/Detpage/8-e.jpg', '6532', '4200', '2020春秋新款韩范chic修身显瘦上衣体恤衫');
INSERT INTO `table` VALUES ('204', '102%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫', '底价折上折', 'img/Detpage/9-a.jpg', 'img/Detpage/9-b.jpg', 'img/Detpage/9-c.jpg', 'img/Detpage/9-d.jpg', 'img/Detpage/9-e.jpg', '6764', '4350', '102%羊毛秋冬加厚毛衣女套头长袖韩版圆领针织衫');
INSERT INTO `table` VALUES ('205', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙', '底价折上折', 'img/Detpage/10-a.jpg', 'img/Detpage/10-b.jpg', 'img/Detpage/10-c.jpg', 'img/Detpage/10-d.jpg', 'img/Detpage/10-e.jpg', '6996', '4500', '【好质量】秋冬季毛衣打底女套头中长款过膝打底衫高领针织连衣裙');
INSERT INTO `table` VALUES ('206', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通7g智能手机', '底价折上折', 'img/Detpage/1-a.jpg', 'img/Detpage/1-b.jpg', 'img/Detpage/1-c.jpg', 'img/Detpage/1-d.jpg', 'img/Detpage/1-e.jpg', '7228', '4650', 'Apple/苹果iphone7抗水防尘4.7英寸高清显示屏全网通7g智能手机');
INSERT INTO `table` VALUES ('207', 'Apple/苹果2017年新款MacBook15英寸Retina显示屏超薄笔记本电脑', '底价折上折', 'img/Detpage/2-a.jpg', 'img/Detpage/2-b.jpg', 'img/Detpage/2-c.jpg', 'img/Detpage/2-d.jpg', 'img/Detpage/2-e.jpg', '7460', '4800', '极窄边框屏幕，纤薄机身无风扇散热设计营造安静工作环境');
INSERT INTO `table` VALUES ('208', 'Xiaomi/小米 红米5 plus全面屏 智能拍照手机全网通7G八核智能机', '底价折上折', 'img/Detpage/3-a.jpg', 'img/Detpage/3-b.jpg', 'img/Detpage/3-c.jpg', 'img/Detpage/3-d.jpg', 'img/Detpage/3-e.jpg', '7692', '4950', '【购机即赠送钢化膜、保护套、指环扣、耳机、运费险】 面部识别 超长续航 智能美颜3.0 大屏5.102');
INSERT INTO `table` VALUES ('209', '【小米新品速发】小米MIX2S陶瓷全面屏AI超感光双摄全网通7g手机', '底价折上折', 'img/Detpage/4-a.jpg', 'img/Detpage/4-b.jpg', 'img/Detpage/4-c.jpg', 'img/Detpage/4-d.jpg', 'img/Detpage/4-e.jpg', '7924', '5100', '搭载高通骁龙848 年度旗舰处理器/AI超感光双摄，DxO百分相机/艺术品般陶瓷机身');
INSERT INTO `table` VALUES ('210', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '8156', '5250', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('211', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '8156', '5250', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用');
INSERT INTO `table` VALUES ('212', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用', '底价折上折', 'img/Detpage/5-a.jpg', 'img/Detpage/5-b.jpg', 'img/Detpage/5-c.jpg', 'img/Detpage/5-d.jpg', 'img/Detpage/5-e.jpg', '8156', '5250', '飞利浦男士电动剃须刀充电式S1013三头刮胡刀全身水洗干湿两用');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Tom123', '123456');
INSERT INTO `user` VALUES ('2', 'jojojo', '123456');
INSERT INTO `user` VALUES ('3', 'tomjojo', '123456');
INSERT INTO `user` VALUES ('4', 'ajaxtom', 'a123456');
INSERT INTO `user` VALUES ('5', 'ajax123', 'a123456');
INSERT INTO `user` VALUES ('6', 'HelloWorld', 'a123456');
INSERT INTO `user` VALUES ('7', 'Tom123456', 'a123456');
INSERT INTO `user` VALUES ('8', 'tom456258', 'a456258');
INSERT INTO `user` VALUES ('9', 'a123456', '123456');
SET FOREIGN_KEY_CHECKS=1;
