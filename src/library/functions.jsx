function add(a, b) {
  let res = +a + +b;
  return formatResult(res);
}

function sub(a, b) {
  let res = +a - +b;
  return formatResult(res);
}

function mul(a, b) {
  let res = +a * +b;
  return formatResult(res);
}

function div(a, b) {
  let res = +a / +b;
  return formatResult(res);
}

function formatResult(result) {
  if (result % 1 !== 0) {
    result = result.toFixed(4).replace(/\.?0+$/, "");
  }
  return result;
}

function operate(op, num_1, num_2) {
  switch (op) {
    case "+": {
      return add(num_1, num_2);
    }
    case "-": {
      return sub(num_1, num_2);
    }
    case "*": {
      return mul(num_1, num_2);
    }
    case "/": {
      return div(num_1, num_2);
    }
  }
}

export { add, sub, mul, div, formatResult, operate };
