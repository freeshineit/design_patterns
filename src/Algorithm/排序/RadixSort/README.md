# 基数排序

## 定义

[基数排序](https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F)（英语：Radix sort）是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。基数排序的发明可以追溯到 1887 年赫尔曼·何乐礼在打孔卡片制表机（Tabulation Machine）上的贡献[1]。

![基数排序](https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.gif/220px-%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F.gif)

## 复杂度

| 名称           | 复杂度 |
| -------------- | ------ |
| 最坏时间复杂度 | O(nk)  |
| 空间复杂度     | O(n+k) |

## 使用场景

## 运行

> node src/Algorithm/排序/RadixSort/index.js
