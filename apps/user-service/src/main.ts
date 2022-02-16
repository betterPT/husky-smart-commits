const start = async () => {
  setTimeout(async () => {
    console.log('Hello World');
    await Promise.resolve('foo');
  }, 5000);
};
