function crasher(a) {
  delete a.bla;
}

const a = { bla: "bla" };

crasher({ ...a });

console.log(a);
