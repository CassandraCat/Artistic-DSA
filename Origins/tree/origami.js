function origami(index, level, down) {
  if (index > level) return;
  origami(index + 1, level, true);
  console.log(down ? "凹" : "凸");
  origami(index + 1, level, false);
}

origami(1, 3, true);
