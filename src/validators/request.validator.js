export default function validateRequest(req, res, next, schema, type = 'body' ) {

	const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }

    const { error } = schema.validate(req.query, options);

   
    // const { error, value } = (type === 'body') ? schema.validate(req.body, options) : schema.validate(req.query, options);
    
	if (error) {
		return res.status(401).json({
			message: error.details.map(e => e.message.replaceAll('"', '')).join(',')
		})
    }
	// } else {
    //     req.body = value;
    
		// next();
    // }
}