const start = async () => {
  setTimeout(async () => {
    console.log('Hello aaaaaWorld!!!!sssss!!ddd');
    await Promise.resolve('foo');
  }, 5000);
};
