import Singleton from "./lazy";
import HungrySingleton from "./hungry";

function start() {
  console.log("-------------------饿汉模式------------------");
  const ins1 = HungrySingleton.getInstance();

  console.log(ins1, ins1.getName());

  const ins2 = HungrySingleton.getInstance();

  console.log(ins2, ins1.getName());

  console.log("instance1 === instance2: ", ins1 === ins2);

  console.log("-------------------懒汉模式------------------");

  const instance1 = Singleton.getInstance("SHINE SHAO");

  console.log(instance1, instance1.getName());

  const instance2 = Singleton.getInstance("FREESHINE");

  console.log(instance2, instance2.getName());

  console.log("instance1 === instance2: ", instance1 === instance2);
}

start();
