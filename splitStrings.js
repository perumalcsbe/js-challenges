function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
