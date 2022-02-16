const start = async () => {
  setTimeout(async () => {
    await Promise.resolve('foo');
  }, 5000);
};
