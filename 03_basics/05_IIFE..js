// +++++++++++Imediately Invoked Function Expression (IIFE)++++++++++++++++

(function chai(){
    console.log(`DB is connected`)
})();


((name)=>{
    console.log(`DB is Connected ${name}`)
})("Sachin")