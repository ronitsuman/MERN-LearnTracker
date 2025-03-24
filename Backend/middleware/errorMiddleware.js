const errorMiddleware = (err, req ,res,next   )=>{
    res.status(err.statuscode || 500).json({
        message:err.message || "imternal server error"
    })
}

export default errorMiddleware;