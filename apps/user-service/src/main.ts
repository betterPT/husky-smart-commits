const start = async () => {
  setTimeout(async () => {
    console.log('Hello aaaaaWorld!!!!!!ddd');
    await Promise.resolve('foo');
  }, 5000);
};
