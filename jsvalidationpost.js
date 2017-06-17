 $(document).ready(function(){
       $("form").validate({
           rules: {
               email: {
                   required: true,
                   email: true
               },
               name: {
                   required: true,
               }
          
           },
           messages: {
               email: {
                   required: 'PLEASE ENTER SOMETHING :0',
                   email: 'it has gotta be valid :)'
               }
           },
           
           
       });
     
     
    });

function textCounter(field,field2,maxlimit)
{
 var countfield = document.getElementById(field2);
 if ( field.value.length > maxlimit ) {
  field.value = field.value.substring( 0, maxlimit );
  return false;
 } else {
  countfield.value = maxlimit - field.value.length;
 }
};

function f1(){
    if(x == 1) {
        alert("Form could not be submited!");
        return false;
    }
    else if(x == 2) {
        return true;
    }
};


    