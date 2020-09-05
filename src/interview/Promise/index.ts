type PromiseFn = (
  resolve: (value?: unknown) => void,
  reject: (reason?: any) => void
) => void;

new Promise(
  (resolve: (value?: unknown) => void, reject: (reason?: any) => void) => {}
);
