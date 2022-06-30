
const throttle=(fn,d)=>{
    return function(...args){
        setTimeout(()=>{
            fn()
        },d)
    }
}



const myfun=throttle(()=>{
   console.log("user called")
},5000)