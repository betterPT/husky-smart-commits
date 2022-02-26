const start = async () => {
  setTimeout(async () => {
    console.log('Hello World!!!!!!ddd');
    await Promise.resolve('foo');
  }, 5000);
};
