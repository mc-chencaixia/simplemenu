# JSON数据API文档

## 首页

* 展示订餐人和已点菜品信息
* 下行数据：

```
data = {
	'launchMan' : '发起人姓名',     // 发起人姓名 string
	'dinnerRoom' : '餐厅名称',      // 餐厅名称 string
	'orderList' : [                 // 订单：数组类型。每个元素为object类型，显示订单的详细信息。
		{            
			'dinner':'马蹄鸡肉丸',  // 菜品名 string
			 'price':18,            // 单价 string
			 'sum':4,               // 已选人数 string
		},{	'dinner':'川香贵妃鸡（辣）',
			'price':22,
			'sum':2,
		},{	'dinner':'咖喱鸡肉',
			'price':12,
			'sum':0,
		},
	]
} 
```

====================================================================

## 发起订餐

* 展示发起订餐人信息
* 无发起订餐人时，可以输入发起人姓名，餐厅名，菜品信息发起订餐
* 可添加菜品信息
* 菜品可以添加，删除，不可修改。
* 上行数据：

```
ajaxData = {
	'name':'ccx',                   // 发起人姓名 string
	'dinnerName':'xx餐厅',          // 餐厅名 string
	'dinnerList' : [                // 菜单：数组类型。每个元素为object类型，显示订单的详细信息。
		{            
			'dinner':'马蹄鸡肉丸',  // 菜品名 string
			'price':'18',           // 单价 string
			'memo':'有点辣',        // 备注 string
		},{	'dinner':'川香贵妃鸡（辣）',
			'price':'22',
			'memo':'2',
		},{	'dinner':'咖喱鸡肉',
			'price':'',
			'memo':'',
		},
	]
}
```

* 下行数据：

```
data = {
	'launchMan' : '发起人姓名',     // 发起人姓名 string
	'dinnerRoom' : '餐厅名称',      // 餐厅名称 string
}
```

====================================================================

## 我要点餐

* 展示发起订餐人信息和可选菜品
* 可以输入发起人姓名，选中菜品（单选）下单
* 上行数据：

```
ajaxData = {
	'orderName':'ccx',              // 订单人姓名 string
	'orderDinner':'马蹄鸡肉丸'      // 选择菜品名 string
}
```

* 下行数据：

```
data = {
	'launchMan' : '发起人姓名',     // 发起人姓名 string
	'dinnerRoom' : '餐厅名称',      // 餐厅名称 string
	'dinnerList' : [                // 菜单：数组类型。每个元素为object类型，显示订单的详细信息。
		{            
			'dinner':'马蹄鸡肉丸',  // 菜品名 string
			'price':'18',           // 单价 string
			'memo':'有点辣',        // 备注 string
		},{	'dinner':'川香贵妃鸡（辣）',
			'price':'22',
			'memo':'2',
		},{	'dinner':'咖喱鸡肉',
			'price':'',
			'memo':'',
		},
	]
}
```
