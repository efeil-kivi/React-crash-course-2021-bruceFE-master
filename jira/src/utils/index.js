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