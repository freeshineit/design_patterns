import {
  Subject,
  BinaryObserver,
  OctalObserver,
  HexaObserver,
} from "./Observer";

const subject = new Subject();

new BinaryObserver(subject);
new OctalObserver(subject);
new HexaObserver(subject);

subject.setState(3);
subject.setState(0);
