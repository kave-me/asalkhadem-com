export const return_if_true = (cb: () => boolean, assets: any) => {
  if (cb()) {
    return assets;
  }
};
