/**=========================================================
 * Module: constants.js
 * 定义需要注入应用的常量
 =========================================================*/
angular.module('clickplus')
    .constant('APP_COLORS', {
        'primary': '#5d9cec',
        'success': '#27c24c',
        'info': '#23b7e5',
        'warning': '#ff902b',
        'danger': '#f05050',
        'inverse': '#131e26',
        'green': '#37bc9b',
        'pink': '#f532e5',
        'purple': '#7266ba',
        'dark': '#3a3f51',
        'yellow': '#fad732',
        'gray-darker': '#232735',
        'gray-dark': '#3a3f51',
        'gray': '#dde6e9',
        'gray-light': '#e4eaec',
        'gray-lighter': '#edf1f2'
    })
    .constant('REGION',{"\u897f\u5317\u5730\u533a": {"640": {"city": [{"code": "Yinchuan", "name": "\u94f6\u5ddd\u5e02"}, {"code": "Shizuishan", "name": "\u77f3\u5634\u5c71\u5e02"}, {"code": "Wuzhong", "name": "\u5434\u5fe0\u5e02"}, {"code": "Guyuan", "name": "\u56fa\u539f\u5e02"}, {"code": "Zhongwei", "name": "\u4e2d\u536b\u5e02"}], "code": "Ningxia", "name": "\u5b81\u590f"}, "610": {"city": [{"code": "Xian", "name": "\u897f\u5b89\u5e02"}, {"code": "Tongchuan", "name": "\u94dc\u5ddd\u5e02"}, {"code": "Baoji", "name": "\u5b9d\u9e21\u5e02"}, {"code": "Xianyang", "name": "\u54b8\u9633\u5e02"}, {"code": "Weinan", "name": "\u6e2d\u5357\u5e02"}, {"code": "Yanan", "name": "\u5ef6\u5b89\u5e02"}, {"code": "Hanzhong", "name": "\u6c49\u4e2d\u5e02"}, {"code": "Yulin", "name": "\u6986\u6797\u5e02"}, {"code": "Ankang", "name": "\u5b89\u5eb7\u5e02"}, {"code": "Shangluo", "name": "\u5546\u6d1b\u5e02"}], "code": "Shanxi", "name": "\u9655\u897f"}, "620": {"city": [{"code": "Lanzhou", "name": "\u5170\u5dde\u5e02"}, {"code": "Jiayuguan", "name": "\u5609\u5cea\u5173\u5e02"}, {"code": "Jinchang", "name": "\u91d1\u660c\u5e02"}, {"code": "Baiyin", "name": "\u767d\u94f6\u5e02"}, {"code": "Tianshui", "name": "\u5929\u6c34\u5e02"}, {"code": "Wuwei", "name": "\u6b66\u5a01\u5e02"}, {"code": "Zhangye", "name": "\u5f20\u6396\u5e02"}, {"code": "Pinliang", "name": "\u5e73\u51c9\u5e02"}, {"code": "Jiuquan", "name": "\u9152\u6cc9\u5e02"}, {"code": "Qingyang", "name": "\u5e86\u9633\u5e02"}, {"code": "Dingxi", "name": "\u5b9a\u897f\u5e02"}, {"code": "Longnan", "name": "\u9647\u5357\u5e02"}, {"code": "Linxiahuizu", "name": "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Gannanzangzu", "name": "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde"}], "code": "Gansu", "name": "\u7518\u8083"}, "650": {"city": [{"code": "Wulumuqi", "name": "\u4e4c\u9c81\u6728\u9f50\u5e02"}, {"code": "Kelamayi", "name": "\u514b\u62c9\u739b\u4f9d\u5e02"}, {"code": "Tulufan", "name": "\u5410\u9c81\u756a\u5730\u533a"}, {"code": "Hami", "name": "\u54c8\u5bc6\u5730\u533a"}, {"code": "Changjihuizu", "name": "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Boertalamenggu", "name": "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde"}, {"code": "Bayinguolengmenggu", "name": "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde"}, {"code": "Akesu", "name": "\u963f\u514b\u82cf\u5730\u533a"}, {"code": "Kezilesukeerkezi", "name": "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde"}, {"code": "Kashi", "name": "\u5580\u4ec0\u5730\u533a"}, {"code": "Hetian", "name": "\u548c\u7530\u5730\u533a"}, {"code": "Yilihasake", "name": "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde"}, {"code": "Tacheng", "name": "\u5854\u57ce\u5730\u533a"}, {"code": "Aletai", "name": "\u963f\u52d2\u6cf0\u5730\u533a"}], "code": "Xinjiang", "name": "\u65b0\u7586"}, "630": {"city": [{"code": "Xining", "name": "\u897f\u5b81\u5e02"}, {"code": "Haidong", "name": "\u6d77\u4e1c\u5730\u533a"}, {"code": "Haibeizangzu", "name": "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Huangnanzangzu", "name": "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Hainanzangzu", "name": "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Guoluozangzu", "name": "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Yushuzangzu", "name": "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Haiximengguzuzangzu", "name": "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde"}], "code": "Qinghai", "name": "\u9752\u6d77"}}, "\u534e\u5317\u5730\u533a": {"120": {"city": [{"code": "Tianjin", "name": "\u5929\u6d25"}], "code": "Tianjin", "name": "\u5929\u6d25"}, "130": {"city": [{"code": "Shijiazhuang", "name": "\u77f3\u5bb6\u5e84\u5e02"}, {"code": "Tangshan", "name": "\u5510\u5c71\u5e02"}, {"code": "Qinhuangdao", "name": "\u79e6\u7687\u5c9b\u5e02"}, {"code": "Handan", "name": "\u90af\u90f8\u5e02"}, {"code": "Xingtai", "name": "\u90a2\u53f0\u5e02"}, {"code": "Baoding", "name": "\u4fdd\u5b9a\u5e02"}, {"code": "Zhangjiakou", "name": "\u5f20\u5bb6\u53e3\u5e02"}, {"code": "Chengde", "name": "\u627f\u5fb7\u5e02"}, {"code": "Cangzhou", "name": "\u6ca7\u5dde\u5e02"}, {"code": "Langfang", "name": "\u5eca\u574a\u5e02"}, {"code": "Hengshui", "name": "\u8861\u6c34\u5e02"}], "code": "Hebei", "name": "\u6cb3\u5317"}, "140": {"city": [{"code": "Taiyuan", "name": "\u592a\u539f\u5e02"}, {"code": "Datong", "name": "\u5927\u540c\u5e02"}, {"code": "Yangquan", "name": "\u9633\u6cc9\u5e02"}, {"code": "Changzhi", "name": "\u957f\u6cbb\u5e02"}, {"code": "Jincheng", "name": "\u664b\u57ce\u5e02"}, {"code": "Shuozhou", "name": "\u6714\u5dde\u5e02"}, {"code": "Jinzhong", "name": "\u664b\u4e2d\u5e02"}, {"code": "Yuncheng", "name": "\u8fd0\u57ce\u5e02"}, {"code": "Xinzhou", "name": "\u5ffb\u5dde\u5e02"}, {"code": "Linfen", "name": "\u4e34\u6c7e\u5e02"}, {"code": "Lvliang", "name": "\u5415\u6881\u5e02"}], "code": "Shanxi", "name": "\u5c71\u897f"}, "150": {"city": [{"code": "Huhehaote", "name": "\u547c\u548c\u6d69\u7279\u5e02"}, {"code": "Baotou", "name": "\u5305\u5934\u5e02"}, {"code": "Wuhai", "name": "\u4e4c\u6d77\u5e02"}, {"code": "Chifeng", "name": "\u8d64\u5cf0\u5e02"}, {"code": "Tongliao", "name": "\u901a\u8fbd\u5e02"}, {"code": "Eerduosi", "name": "\u9102\u5c14\u591a\u65af\u5e02"}, {"code": "Hulunbeier", "name": "\u547c\u4f26\u8d1d\u5c14\u5e02"}, {"code": "Bayanzhuoer", "name": "\u5df4\u5f66\u6dd6\u5c14\u5e02"}, {"code": "Wulanchabu", "name": "\u4e4c\u5170\u5bdf\u5e03\u5e02"}, {"code": "Xinganmeng", "name": "\u5174\u5b89\u76df"}, {"code": "Xilinguolemeng", "name": "\u9521\u6797\u90ed\u52d2\u76df"}, {"code": "Alashanmeng", "name": "\u963f\u62c9\u5584\u76df"}], "code": "Neimenggu", "name": "\u5185\u8499\u53e4"}, "110": {"city": [{"code": "Beijing", "name": "\u5317\u4eac"}], "code": "Beijing", "name": "\u5317\u4eac"}}, "\u897f\u5357\u5730\u533a": {"520": {"city": [{"code": "Guiyang", "name": "\u8d35\u9633\u5e02"}, {"code": "Liupanshui", "name": "\u516d\u76d8\u6c34\u5e02"}, {"code": "Zunyi", "name": "\u9075\u4e49\u5e02"}, {"code": "Anshun", "name": "\u5b89\u987a\u5e02"}, {"code": "Tongren", "name": "\u94dc\u4ec1\u5730\u533a"}, {"code": "Qianxinanbuyizumiaozu", "name": "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Bijie", "name": "\u6bd5\u8282\u5730\u533a"}, {"code": "Qiandongnanmiaozudongzu", "name": "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Qiannanbuyizumiaozu", "name": "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"}], "code": "Guizhou", "name": "\u8d35\u5dde"}, "540": {"city": [{"code": "Lasa", "name": "\u62c9\u8428\u5e02"}, {"code": "Changdu", "name": "\u660c\u90fd\u5730\u533a"}, {"code": "Shannan", "name": "\u5c71\u5357\u5730\u533a"}, {"code": "Rikeze", "name": "\u65e5\u5580\u5219\u5730\u533a"}, {"code": "Naqv", "name": "\u90a3\u66f2\u5730\u533a"}, {"code": "Ali", "name": "\u963f\u91cc\u5730\u533a"}, {"code": "Linzhi", "name": "\u6797\u829d\u5730\u533a"}], "code": "Xizang", "name": "\u897f\u85cf"}, "530": {"city": [{"code": "Kunming", "name": "\u6606\u660e\u5e02"}, {"code": "Qvjing", "name": "\u66f2\u9756\u5e02"}, {"code": "Yuxi", "name": "\u7389\u6eaa\u5e02"}, {"code": "Baoshan", "name": "\u4fdd\u5c71\u5e02"}, {"code": "Zhaotong", "name": "\u662d\u901a\u5e02"}, {"code": "Lijiang", "name": "\u4e3d\u6c5f\u5e02"}, {"code": "Puer", "name": "\u666e\u6d31\u5e02"}, {"code": "Lincang", "name": "\u4e34\u6ca7\u5e02"}, {"code": "Chuxiongyizu", "name": "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Honghehanizuyizu", "name": "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Wenshanzhuangzumiaozu", "name": "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Xishuangbannadaizu", "name": "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Dalibaizu", "name": "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Dehongdaizujingpozu", "name": "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Nujianglisuzu", "name": "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Diqingzangzu", "name": "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde"}], "code": "Yunnan", "name": "\u4e91\u5357"}, "500": {"city": [{"code": "Chongqing", "name": "\u91cd\u5e86"}], "code": "Chongqing", "name": "\u91cd\u5e86"}, "510": {"city": [{"code": "Chengdu", "name": "\u6210\u90fd\u5e02"}, {"code": "Zigong", "name": "\u81ea\u8d21\u5e02"}, {"code": "Panzhihua", "name": "\u6500\u679d\u82b1\u5e02"}, {"code": "Luzhou", "name": "\u6cf8\u5dde\u5e02"}, {"code": "Deyang", "name": "\u5fb7\u9633\u5e02"}, {"code": "Mianyang", "name": "\u7ef5\u9633\u5e02"}, {"code": "Guangyuan", "name": "\u5e7f\u5143\u5e02"}, {"code": "Suining", "name": "\u9042\u5b81\u5e02"}, {"code": "Neijiang", "name": "\u5185\u6c5f\u5e02"}, {"code": "Leshan", "name": "\u4e50\u5c71\u5e02"}, {"code": "Nanchong", "name": "\u5357\u5145\u5e02"}, {"code": "Meishan", "name": "\u7709\u5c71\u5e02"}, {"code": "Yibin", "name": "\u5b9c\u5bbe\u5e02"}, {"code": "Guangan", "name": "\u5e7f\u5b89\u5e02"}, {"code": "Dazhou", "name": "\u8fbe\u5dde\u5e02"}, {"code": "Yaan", "name": "\u96c5\u5b89\u5e02"}, {"code": "Bazhong", "name": "\u5df4\u4e2d\u5e02"}, {"code": "Ziyang", "name": "\u8d44\u9633\u5e02"}, {"code": "Abazangzuqiangzu", "name": "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Ganzizangzu", "name": "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde"}, {"code": "Liangshanyizu", "name": "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde"}], "code": "Sichuan", "name": "\u56db\u5ddd"}}, "\u534e\u4e1c\u5730\u533a": {"320": {"city": [{"code": "Nanjing", "name": "\u5357\u4eac\u5e02"}, {"code": "Wuxi", "name": "\u65e0\u9521\u5e02"}, {"code": "Xuzhou", "name": "\u5f90\u5dde\u5e02"}, {"code": "Changzhou", "name": "\u5e38\u5dde\u5e02"}, {"code": "Suzhou", "name": "\u82cf\u5dde\u5e02"}, {"code": "Nantong", "name": "\u5357\u901a\u5e02"}, {"code": "Lianyungang", "name": "\u8fde\u4e91\u6e2f\u5e02"}, {"code": "Huaian", "name": "\u6dee\u5b89\u5e02"}, {"code": "Yancheng", "name": "\u76d0\u57ce\u5e02"}, {"code": "Yangzhou", "name": "\u626c\u5dde\u5e02"}, {"code": "Zhenjiang", "name": "\u9547\u6c5f\u5e02"}, {"code": "Taizhou", "name": "\u6cf0\u5dde\u5e02"}, {"code": "Suqian", "name": "\u5bbf\u8fc1\u5e02"}], "code": "Jiangsu", "name": "\u6c5f\u82cf"}, "330": {"city": [{"code": "Hangzhou", "name": "\u676d\u5dde\u5e02"}, {"code": "Ningbo", "name": "\u5b81\u6ce2\u5e02"}, {"code": "Wenzhou", "name": "\u6e29\u5dde\u5e02"}, {"code": "Jiaxing", "name": "\u5609\u5174\u5e02"}, {"code": "Huzhou", "name": "\u6e56\u5dde\u5e02"}, {"code": "Shaoxing", "name": "\u7ecd\u5174\u5e02"}, {"code": "Jinhua", "name": "\u91d1\u534e\u5e02"}, {"code": "Qvzhou", "name": "\u8862\u5dde\u5e02"}, {"code": "Zhoushan", "name": "\u821f\u5c71\u5e02"}, {"code": "Taizhou", "name": "\u53f0\u5dde\u5e02"}, {"code": "Lishui", "name": "\u4e3d\u6c34\u5e02"}], "code": "Zhejiang", "name": "\u6d59\u6c5f"}, "370": {"city": [{"code": "Jinan", "name": "\u6d4e\u5357\u5e02"}, {"code": "Qingdao", "name": "\u9752\u5c9b\u5e02"}, {"code": "Zibo", "name": "\u6dc4\u535a\u5e02"}, {"code": "Zaozhuang", "name": "\u67a3\u5e84\u5e02"}, {"code": "Dongying", "name": "\u4e1c\u8425\u5e02"}, {"code": "Yantai", "name": "\u70df\u53f0\u5e02"}, {"code": "Weifang", "name": "\u6f4d\u574a\u5e02"}, {"code": "Jining", "name": "\u6d4e\u5b81\u5e02"}, {"code": "Taian", "name": "\u6cf0\u5b89\u5e02"}, {"code": "Weihai", "name": "\u5a01\u6d77\u5e02"}, {"code": "Rizhao", "name": "\u65e5\u7167\u5e02"}, {"code": "Laiwu", "name": "\u83b1\u829c\u5e02"}, {"code": "Linyi", "name": "\u4e34\u6c82\u5e02"}, {"code": "Dezhou", "name": "\u5fb7\u5dde\u5e02"}, {"code": "Liaocheng", "name": "\u804a\u57ce\u5e02"}, {"code": "Binzhou", "name": "\u6ee8\u5dde\u5e02"}, {"code": "Heze", "name": "\u83cf\u6cfd\u5e02"}], "code": "Shandong", "name": "\u5c71\u4e1c"}, "340": {"city": [{"code": "Hefei", "name": "\u5408\u80a5\u5e02"}, {"code": "Wuhu", "name": "\u829c\u6e56\u5e02"}, {"code": "Bengbu", "name": "\u868c\u57e0\u5e02"}, {"code": "Huainan", "name": "\u6dee\u5357\u5e02"}, {"code": "Maanshan", "name": "\u9a6c\u978d\u5c71\u5e02"}, {"code": "Huaibei", "name": "\u6dee\u5317\u5e02"}, {"code": "Tongling", "name": "\u94dc\u9675\u5e02"}, {"code": "Anqing", "name": "\u5b89\u5e86\u5e02"}, {"code": "Huangshan", "name": "\u9ec4\u5c71\u5e02"}, {"code": "Chuzhou", "name": "\u6ec1\u5dde\u5e02"}, {"code": "Fuyang", "name": "\u961c\u9633\u5e02"}, {"code": "suzhou", "name": "\u5bbf\u5dde\u5e02"}, {"code": "Chaohu", "name": "\u5de2\u6e56\u5e02"}, {"code": "Liuan", "name": "\u516d\u5b89\u5e02"}, {"code": "Bozhou", "name": "\u4eb3\u5dde\u5e02"}, {"code": "Chizhou", "name": "\u6c60\u5dde\u5e02"}, {"code": "Xuancheng", "name": "\u5ba3\u57ce\u5e02"}], "code": "Anhui", "name": "\u5b89\u5fbd"}, "310": {"city": [{"code": "Shanghai", "name": "\u4e0a\u6d77"}], "code": "Shanghai", "name": "\u4e0a\u6d77"}, "350": {"city": [{"code": "Fuzhou", "name": "\u798f\u5dde\u5e02"}, {"code": "Xiamen", "name": "\u53a6\u95e8\u5e02"}, {"code": "Putian", "name": "\u8386\u7530\u5e02"}, {"code": "Sanming", "name": "\u4e09\u660e\u5e02"}, {"code": "Quanzhou", "name": "\u6cc9\u5dde\u5e02"}, {"code": "Zhangzhou", "name": "\u6f33\u5dde\u5e02"}, {"code": "Nanping", "name": "\u5357\u5e73\u5e02"}, {"code": "Longyan", "name": "\u9f99\u5ca9\u5e02"}, {"code": "Ningde", "name": "\u5b81\u5fb7\u5e02"}], "code": "Fujian", "name": "\u798f\u5efa"}}, "\u5176\u4ed6\u5730\u533a": {"810": {"city": [{"code": "Xianggang", "name": "\u9999\u6e2f"}], "code": "Xianggang", "name": "\u9999\u6e2f"}, "820": {"city": [{"code": "Aomen", "name": "\u6fb3\u95e8"}], "code": "Aomen", "name": "\u6fb3\u95e8"}, "710": {"city": [{"code": "Taibei", "name": "\u53f0\u5317\u5e02"}, {"code": "Xinbei", "name": "\u65b0\u5317\u5e02"}, {"code": "Taizhong", "name": "\u53f0\u4e2d\u5e02"}, {"code": "Tainan", "name": "\u53f0\u5357\u5e02"}, {"code": "Gaoxiong", "name": "\u9ad8\u96c4\u5e02"}, {"code": "Jilong", "name": "\u57fa\u9686\u5e02"}, {"code": "Jiayi", "name": "\u5609\u4e49\u5e02"}, {"code": "Xinzhu", "name": "\u65b0\u7af9\u5e02"}], "code": "Taiwan", "name": "\u53f0\u6e7e"}}, "\u534e\u5357\u5730\u533a": {"440": {"city": [{"code": "Guangzhou", "name": "\u5e7f\u5dde\u5e02"}, {"code": "Shaoguan", "name": "\u97f6\u5173\u5e02"}, {"code": "Shenzhen", "name": "\u6df1\u5733\u5e02"}, {"code": "Zhuhai", "name": "\u73e0\u6d77\u5e02"}, {"code": "Shantou", "name": "\u6c55\u5934\u5e02"}, {"code": "Foshan", "name": "\u4f5b\u5c71\u5e02"}, {"code": "Jiangmen", "name": "\u6c5f\u95e8\u5e02"}, {"code": "Zhanjiang", "name": "\u6e5b\u6c5f\u5e02"}, {"code": "Maoming", "name": "\u8302\u540d\u5e02"}, {"code": "Zhaoqing", "name": "\u8087\u5e86\u5e02"}, {"code": "Huizhou", "name": "\u60e0\u5dde\u5e02"}, {"code": "Meizhou", "name": "\u6885\u5dde\u5e02"}, {"code": "Shanwei", "name": "\u6c55\u5c3e\u5e02"}, {"code": "Heyuan", "name": "\u6cb3\u6e90\u5e02"}, {"code": "Yangjiang", "name": "\u9633\u6c5f\u5e02"}, {"code": "Qingyuan", "name": "\u6e05\u8fdc\u5e02"}, {"code": "Dongguan", "name": "\u4e1c\u839e\u5e02"}, {"code": "Zhongshan", "name": "\u4e2d\u5c71\u5e02"}, {"code": "Chaozhou", "name": "\u6f6e\u5dde\u5e02"}, {"code": "Jieyang", "name": "\u63ed\u9633\u5e02"}, {"code": "Yunfu", "name": "\u4e91\u6d6e\u5e02"}], "code": "Guangdong", "name": "\u5e7f\u4e1c"}, "450": {"city": [{"code": "Nanning", "name": "\u5357\u5b81\u5e02"}, {"code": "Liuzhou", "name": "\u67f3\u5dde\u5e02"}, {"code": "Guilin", "name": "\u6842\u6797\u5e02"}, {"code": "Wuzhou", "name": "\u68a7\u5dde\u5e02"}, {"code": "Beihai", "name": "\u5317\u6d77\u5e02"}, {"code": "Fangchenggang", "name": "\u9632\u57ce\u6e2f\u5e02"}, {"code": "Qinzhou", "name": "\u94a6\u5dde\u5e02"}, {"code": "Guigang", "name": "\u8d35\u6e2f\u5e02"}, {"code": "Yulin", "name": "\u7389\u6797\u5e02"}, {"code": "Baise", "name": "\u767e\u8272\u5e02"}, {"code": "Hezhou", "name": "\u8d3a\u5dde\u5e02"}, {"code": "Hechi", "name": "\u6cb3\u6c60\u5e02"}, {"code": "Laibin", "name": "\u6765\u5bbe\u5e02"}, {"code": "Chongzuo", "name": "\u5d07\u5de6\u5e02"}], "code": "Guangxi", "name": "\u5e7f\u897f"}, "460": {"city": [{"code": "Haikou", "name": "\u6d77\u53e3\u5e02"}, {"code": "Sanya", "name": "\u4e09\u4e9a\u5e02"}], "code": "Hainan", "name": "\u6d77\u5357"}}, "\u534e\u4e2d\u5730\u533a": {"360": {"city": [{"code": "Nanchang", "name": "\u5357\u660c\u5e02"}, {"code": "Jingdezhen", "name": "\u666f\u5fb7\u9547\u5e02"}, {"code": "Pingxiang", "name": "\u840d\u4e61\u5e02"}, {"code": "Jiujiang", "name": "\u4e5d\u6c5f\u5e02"}, {"code": "Xinyu", "name": "\u65b0\u4f59\u5e02"}, {"code": "Yingtan", "name": "\u9e70\u6f6d\u5e02"}, {"code": "Ganzhou", "name": "\u8d63\u5dde\u5e02"}, {"code": "Jian", "name": "\u5409\u5b89\u5e02"}, {"code": "Yichun", "name": "\u5b9c\u6625\u5e02"}, {"code": "Fuzhou", "name": "\u629a\u5dde\u5e02"}, {"code": "Shangrao", "name": "\u4e0a\u9976\u5e02"}], "code": "Jiangxi", "name": "\u6c5f\u897f"}, "410": {"city": [{"code": "Zhengzhou", "name": "\u90d1\u5dde\u5e02"}, {"code": "Kaifeng", "name": "\u5f00\u5c01\u5e02"}, {"code": "Luoyang", "name": "\u6d1b\u9633\u5e02"}, {"code": "Pingdingshan", "name": "\u5e73\u9876\u5c71\u5e02"}, {"code": "Anyang", "name": "\u5b89\u9633\u5e02"}, {"code": "Hebi", "name": "\u9e64\u58c1\u5e02"}, {"code": "Xinxiang", "name": "\u65b0\u4e61\u5e02"}, {"code": "Jiaozuo", "name": "\u7126\u4f5c\u5e02"}, {"code": "Puyang", "name": "\u6fee\u9633\u5e02"}, {"code": "Xuchang", "name": "\u8bb8\u660c\u5e02"}, {"code": "Luohe", "name": "\u6f2f\u6cb3\u5e02"}, {"code": "Sanmenxia", "name": "\u4e09\u95e8\u5ce1\u5e02"}, {"code": "Nanyang", "name": "\u5357\u9633\u5e02"}, {"code": "Shangqiu", "name": "\u5546\u4e18\u5e02"}, {"code": "Xinyang", "name": "\u4fe1\u9633\u5e02"}, {"code": "Zhoukou", "name": "\u5468\u53e3\u5e02"}, {"code": "Zhumadian", "name": "\u9a7b\u9a6c\u5e97\u5e02"}], "code": "Henan", "name": "\u6cb3\u5357"}, "420": {"city": [{"code": "Wuhan", "name": "\u6b66\u6c49\u5e02"}, {"code": "Huangshi", "name": "\u9ec4\u77f3\u5e02"}, {"code": "Shiyan", "name": "\u5341\u5830\u5e02"}, {"code": "Yichang", "name": "\u5b9c\u660c\u5e02"}, {"code": "Xiangfan", "name": "\u8944\u6a0a\u5e02"}, {"code": "Ezhou", "name": "\u9102\u5dde\u5e02"}, {"code": "Jingmen", "name": "\u8346\u95e8\u5e02"}, {"code": "Xiaogan", "name": "\u5b5d\u611f\u5e02"}, {"code": "Jingzhou", "name": "\u8346\u5dde\u5e02"}, {"code": "Huanggang", "name": "\u9ec4\u5188\u5e02"}, {"code": "Xianning", "name": "\u54b8\u5b81\u5e02"}, {"code": "Suizhou", "name": "\u968f\u5dde\u5e02"}, {"code": "Enshitujiazumiaozu", "name": "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"}], "code": "Hubei", "name": "\u6e56\u5317"}, "430": {"city": [{"code": "Changsha", "name": "\u957f\u6c99\u5e02"}, {"code": "Zhuzhou", "name": "\u682a\u6d32\u5e02"}, {"code": "Xiangtan", "name": "\u6e58\u6f6d\u5e02"}, {"code": "Hengyang", "name": "\u8861\u9633\u5e02"}, {"code": "Shaoyang", "name": "\u90b5\u9633\u5e02"}, {"code": "Yueyang", "name": "\u5cb3\u9633\u5e02"}, {"code": "Changde", "name": "\u5e38\u5fb7\u5e02"}, {"code": "Zhangjiajie", "name": "\u5f20\u5bb6\u754c\u5e02"}, {"code": "Yiyang", "name": "\u76ca\u9633\u5e02"}, {"code": "Chenzhou", "name": "\u90f4\u5dde\u5e02"}, {"code": "Yongzhou", "name": "\u6c38\u5dde\u5e02"}, {"code": "Huaihua", "name": "\u6000\u5316\u5e02"}, {"code": "Loudi", "name": "\u5a04\u5e95\u5e02"}, {"code": "Xiangxitujiazumiaozu", "name": "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde"}], "code": "Hunan", "name": "\u6e56\u5357"}}, "\u4e1c\u5317\u5730\u533a": {"210": {"city": [{"code": "Shenyang", "name": "\u6c88\u9633\u5e02"}, {"code": "Dalian", "name": "\u5927\u8fde\u5e02"}, {"code": "Anshan", "name": "\u978d\u5c71\u5e02"}, {"code": "Fushun", "name": "\u629a\u987a\u5e02"}, {"code": "Benxi", "name": "\u672c\u6eaa\u5e02"}, {"code": "Dandong", "name": "\u4e39\u4e1c\u5e02"}, {"code": "Jinzhou", "name": "\u9526\u5dde\u5e02"}, {"code": "Yingkou", "name": "\u8425\u53e3\u5e02"}, {"code": "Fuxin", "name": "\u961c\u65b0\u5e02"}, {"code": "Liaoyang", "name": "\u8fbd\u9633\u5e02"}, {"code": "Panjin", "name": "\u76d8\u9526\u5e02"}, {"code": "Tieling", "name": "\u94c1\u5cad\u5e02"}, {"code": "Chaoyang", "name": "\u671d\u9633\u5e02"}, {"code": "Huludao", "name": "\u846b\u82a6\u5c9b\u5e02"}], "code": "Liaoning", "name": "\u8fbd\u5b81"}, "220": {"city": [{"code": "Changchun", "name": "\u957f\u6625\u5e02"}, {"code": "Jilin", "name": "\u5409\u6797\u5e02"}, {"code": "Siping", "name": "\u56db\u5e73\u5e02"}, {"code": "Liaoyuan", "name": "\u8fbd\u6e90\u5e02"}, {"code": "Tonghua", "name": "\u901a\u5316\u5e02"}, {"code": "Baishan", "name": "\u767d\u5c71\u5e02"}, {"code": "Songyuan", "name": "\u677e\u539f\u5e02"}, {"code": "Baicheng", "name": "\u767d\u57ce\u5e02"}, {"code": "Yanbianchaoxianzu", "name": "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde"}], "code": "Jilin", "name": "\u5409\u6797"}, "230": {"city": [{"code": "Haerbin", "name": "\u54c8\u5c14\u6ee8\u5e02"}, {"code": "Qiqihaer", "name": "\u9f50\u9f50\u54c8\u5c14\u5e02"}, {"code": "Jixi", "name": "\u9e21\u897f\u5e02"}, {"code": "Hegang", "name": "\u9e64\u5c97\u5e02"}, {"code": "Shuangyashan", "name": "\u53cc\u9e2d\u5c71\u5e02"}, {"code": "Daqing", "name": "\u5927\u5e86\u5e02"}, {"code": "Yichun", "name": "\u4f0a\u6625\u5e02"}, {"code": "Jiamusi", "name": "\u4f73\u6728\u65af\u5e02"}, {"code": "Qitaihe", "name": "\u4e03\u53f0\u6cb3\u5e02"}, {"code": "Mudanjiang", "name": "\u7261\u4e39\u6c5f\u5e02"}, {"code": "Heihe", "name": "\u9ed1\u6cb3\u5e02"}, {"code": "Suihua", "name": "\u7ee5\u5316\u5e02"}, {"code": "Daxinganling", "name": "\u5927\u5174\u5b89\u5cad\u5730\u533a"}], "code": "Heilongjiang", "name": "\u9ed1\u9f99\u6c5f"}}
    })
    .constant('APP_MEDIAQUERY', {
        'desktopLG': 1200,
        'desktop': 992,
        'tablet': 768,
        'mobile': 480
    })
    .constant('LANGUAGE', {
        "datatable": {
            "sLengthMenu": "每页显示 _MENU_条",
            "sZeroRecords": "没有找到符合条件的数据",
            "sProcessing": "&lt;img src=’./loading.gif’ /&gt;",
            "sInfo": "当前第 _START_ - _END_ 条　共计 _TOTAL_ 条",
            "sInfoEmpty": "没有记录",
            "sInfoFiltered": "(从 _MAX_ 条记录中过滤)",
            "sLoadingRecords": "加载中......",
            "sSearch": "搜索：",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
            }
        }
    })
    .constant('DICT', {
        'area': {
            '华北地区': true,
            '东北地区': true,
            '华东地区': true,
            '华中地区': true,
            '华南地区': true,
            '西南地区': true,
            '西北地区': true,
            '其他地区': true
        },
        'dtTypeDict': [{
            'value': 1,
            'name': '常用时间段'
        }, {
            'value': 2,
            'name': '自定义时间段'
        }],
        'recentDict': [{
            'value': 3,
            'name': '过去3天'
        }, {
            'value': 5,
            'name': '过去5天'
        }, {
            'value': 7,
            'name': '过去7天'
        }],
        'funcs': [{
            name: '平均',
            value: 'avg'
        }, {
            name: '总共',
            value: 'sum'
        }, {
            name: '最大值',
            value: 'max'
        }, {
            name: '最小值',
            value: 'min'
        }],
        'regs': [{
            name: '>',
            value: '>'
        }, {
            name: '<',
            value: '<'
        }, {
            name: '=',
            value: '='
        }, {
            name: '<=',
            value: '<='
        }, {
            name: '>=',
            value: '>='
        }],
        'tagType': {
            0: '实时标签',
            1: '延时标签',
            2: '自己导入'
        }
    })
    .constant('APP_REQUIRES', {
        // jQuery based and standalone scripts
        scripts: {

        },
        // Angular based script (use the right module name)
        modules: [{
            name: 'ui.select',
            files: [
                'vendor/angular-ui-select/dist/select.js',
                'vendor/angular-ui-select/dist/select.css'
            ]
        }, {
            name: 'datatables',
            files: [
                'vendor/datatables/media/js/jquery.dataTables.js',
                'vendor/angular-datatables/dist/angular-datatables.js',
                'vendor/datatables-responsive/js/dataTables.responsive.js'
            ],
            serie: true
        }, {
            name: 'datetime',
            files: [
                'vendor/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
                'vendor/angular-bootstrap-datetimepicker/src/js/datetimepicker.js'
            ]
        }, {
            name: 'ngDialog',
            files: ['vendor/ngDialog/js/ngDialog.min.js',
                'vendor/ngDialog/css/ngDialog.min.css',
                'vendor/ngDialog/css/ngDialog-theme-default.min.css'
            ]
        }, {
            name: 'daterangepicker',
            files: ['vendor/bootstrap-daterangepicker/daterangepicker.css',
                'vendor/bootstrap-daterangepicker/daterangepicker.js',
                'vendor/angular-daterangepicker/js/angular-daterangepicker.js'
            ]
        }, {
            name: 'fileupload',
            files : ['vendor/jquery/plugins/fileupload.js']
        }]
    });
