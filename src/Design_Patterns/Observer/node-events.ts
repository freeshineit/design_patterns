const EventEmitter = require("events").EventEmitter;

// node 自定义事件
class News extends EventEmitter {}

const news = new News();

news.on("subscribe", (info: any) => {
  console.log(info);
});

news.on("subscribe", (info: any) => {
  console.log(info);
});

news.on("subscribe", (info: any) => {
  console.log(info);
});

news.emit("subscribe", "send new news");
