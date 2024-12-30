
function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText);
       if(isNaN(age)){
        throw "Please enter a number";
        
       }
       else if(age < 18){
        throw "baccha kaccha not allowed"
       }
       else if(age > 30){
         throw "murubbira ekane aishen na "
       }
       
       errorTag.innerHTML ='';
    }
    catch(err){
        console.log('ERROR:', err)
        errorTag.innerHTML = 'Error:' + err;
    }
    finally{
        console.log("All done inside try catch")
    }
    console.log(1111);
}