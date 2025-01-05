function checkAge(){
     const ageField = document.getElementById('age');
     const ageText = ageField.value;
     const errorTag  = document.getElementById('error');
     try{
       const age = parseInt(ageText);

       if(isNaN(age)){
            throw "Please enter a number"
       }
       else if(age < 18){
           throw "Baccka kaccha not allowed"
       }
        else if(age > 30){
            throw "Senior ra ekhane aishen na "
        }

        document.getElementById("age").value = '';
     }
     catch(err){
          console.log('Error:', err)
          errorTag.innerHTML = `Error: ${err}`;
     }
    finally{
        console.log('All done inside try catch')
    }
     console.log(11111);
}