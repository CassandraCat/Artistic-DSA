class Program {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function bestArrange(programs, timePoint) {
  programs = programs.sort((a, b) => a.end - b.end);
  let result = 0;
  for (let i = 0; i < programs.length; i++) {
    if (timePoint <= programs[i].start) {
      result++;
      timePoint = programs[i].end;
    }
  }

  return result;
}
