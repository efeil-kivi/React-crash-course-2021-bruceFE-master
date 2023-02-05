import {useEffect, useState} from "react";


export const isFalsy = (value) => value === 0? false : !value
export const cleanObject = (object) =>{
	//不建议改变传输对象
	// object.name = 123123
	const result  = {...object}
	Object.keys(result).forEach(key =>{
		const value = result[key]
		if(isFalsy(value)){
			delete result[key]
		}
	})
	return result
}
export const useMount = (callback) =>{
	useEffect(() =>{
		callback()
	},[])
}
export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value)
	useEffect(()=>{
		// console.log("value=",value)
		const  timeout = setTimeout(() => setDebouncedValue(value), delay)
		return () => clearTimeout(timeout)
	},[value,delay])
	// setTimeout(() => setDebouncedValue("1"), 2000)
	// setTimeout(() => setDebouncedValue("2"), 4000)
	// console.log("debouncedValue=",debouncedValue)
	//此处返回特殊
	return debouncedValue
}
//                首次return d -> const
//此useEffect程序 第一次执行return d -> return() -> const -> return d(由于debouncesValue变化所以返回)
//               第二次执行return d -> return() -> const -> return d  ....