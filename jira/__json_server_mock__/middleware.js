module.exports = (req, res, next) => {
	if (req.method === 'POST' && req.url ==='/login'){
		console.log(req.body.username,"-----",req.body.data)
		if (req.body === 'budy'){
			return req.status(200).json({
				user:{
					token:'123'
				}
			})
		}else{
			return res.status(200).json({
				user:{
					token:'123'
				}
			})
		}
	}
	next()
}