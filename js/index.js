document.getElementById('calculate').addEventListener(
    'click',function(e){
        e.preventDefault()
      
        const income= parseFloat(document.getElementById('income').value)
        const software= parseFloat(document.getElementById('software').value)
        const courses= parseFloat(document.getElementById('courses').value)
        const internet= parseFloat(document.getElementById('internet').value)
       
       
        // console.log( income,internet,courses,software);
        const totalExpense=software+courses+courses
        const Balance=income-totalExpense
        console.log(totalExpense,Balance);
    }
)