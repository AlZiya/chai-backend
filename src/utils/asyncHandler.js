const asynHandler = (requestHadler)=>{
    (req,res,next) => {
        Promise.resolve(requestHadler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asynHandler}



// const asyncHandler = ()=>{}
// const asyndHandler = (func)=>() => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async (req,res,next) => {
//     try{

//     } catch(error){
//         res.status(error.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

