# 选择排序

## 定义

[选择排序](https://zh.wikipedia.org/wiki/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F)（Selection sort）是一种简单直观的排序算法。它的工作原理如下。首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

![选择排序](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

## 复杂度

| 名称           | 复杂度                 |
| -------------- | ---------------------- |
| 平均时间复杂度 | O(n^2)                 |
| 最坏时间复杂度 | O(n^2)                 |
| 最优时间复杂度 | O(n^2)                 |
| 空间复杂度     | O(n) 需要辅助空间 O(1) |

## 使用场景

## 运行

> node src/Algorithm/排序/SelectionSort/index.js
