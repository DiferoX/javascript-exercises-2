function fibonacci (n) 
{
  fibo = [0, 1];
  if (n <= 0)
  {
      return "OOPS";
  }
  for (let i = 2; i <= n; i++)
  {
      let a = fibo[i - 1];
      let b = fibo[i - 2];
      fibo[i] = (a + b);
  }
  return fibo;
};

function fibonacciRec (n) 
{
  if (n < 2)
  {
      return n;
  }
  
  return (fibonacciRec(n - 1) + fibonacciRec(n - 2));
};

console.log (fibonacci(8));
console.log (fibonacciRec(9));
