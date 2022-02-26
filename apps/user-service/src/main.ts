const start = async () => {
  setTimeout(async () => {
    console.log('Hello aaaassssaWorld!!!!sssss!!ddd');
    await Promise.resolve('foo');
  }, 5000);
};
