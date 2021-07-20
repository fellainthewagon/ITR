function crasher(a) {
  delete a.bla;
}

const a = { bla: "bla" };

crasher({ bla: "хммм..." }, a);
crasher.bind(null, a); // но это вроде как не вызов функции, это вызов метода...
crasher.call(null, { bla: "bla" }, a);

console.log(a);
