import { useEffect, useState } from "react";

export const isFalsy = (value: undefined) => (value === 0 ? false : !value);
export const cleanObject = (object: object) => {
  //不建议改变传输对象
  // object.name = 123123
  const result = { ...object };
  //遍历result 当value为空：删掉；
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = (value: any, delay?: number) => {
  //?:传进来的为空or number
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // console.log("value=",value)
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  // setTimeout(() => setDebouncedValue("1"), 2000)
  // setTimeout(() => setDebouncedValue("2"), 4000)
  // console.log("debouncedValue=",debouncedValue)
  //此处返回特殊
  return debouncedValue;
};
//                首次return d -> const
//此useEffect程序 第一次执行return d -> return() -> const -> return d(由于debounceValue变化所以返回)
//               第二次执行return d -> return() -> const -> return d  ....
