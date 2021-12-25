const asyncHandler = (fn) => (...args) =>
  fn(args).catch((err) => console.error(err));

export default asyncHandler;
