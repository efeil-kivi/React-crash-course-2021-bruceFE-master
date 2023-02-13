# 泛型

### 传统函数的泛型和箭头函数的泛型

```tsx
function useState<T>(a:<t>|(()=>T)):[T, dispatch<SetStateAction<T>>];//传统函数
export const useDebounce = <T>(value:T, delay?: number) => {}
```

# 查看 [typeScript的类型.md](typeScript的类型.md) 

#  [鸭子类型：面向接口，not面向对象.md](鸭子类型：面向接口，not面向对象.md) 

#  [middleWare.md](middleWare.md) 

**middleWare就是个坑不要用**

