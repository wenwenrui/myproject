
//  获取本地保存
export const getLocalStorge = ({key}) => {
  return window.localStorage.getItem({key})
}

//  设置本地保存
export const setLocalStorge = ({key, value}) => {
  window.localStorage.setItem({key, value})
}
