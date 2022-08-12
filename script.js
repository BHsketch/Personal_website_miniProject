let fname=document.getElementById('firstname')
let lname=document.getElementById('lastname')
let pass1=document.getElementById('pass1')
let pass2=document.getElementById('pass2')
let email=document.getElementById('email')
let check=document.getElementById('check')
let submit=document.getElementById('submit')
let form=document.getElementById('form')
let errormessages=document.getElementById('error')
//alert(fname.value)

form.addEventListener('submit', (e) =>
{
    let errors=[]
    let specialchars=0
    let nums=0
    let error
    if(fname.value=="" || fname.value==null)
    {
        errors.push("The First name field cannot be empty")
        fname.style.border= 'solid 2px rgba(255, 0, 0, 0.5)'
        fname.style.backgroundColor="rgba(255, 0, 0, 0.08)"
    }else{
        fname.style.borderColor='black'
        fname.style.backgroundColor="white"
    }
    if(lname.value==""|| lname.value==null)
    {
        errors.push("The last name field cannot be empty")
        lname.style.border= 'solid 2px rgba(255, 0, 0, 0.5)'
        lname.style.backgroundColor="rgba(255, 0, 0, 0.08)"
    }else{
        lname.style.border= 'solid 2px black'
        lname.style.backgroundColor="white"
    }
    //alert(1)
    console.log(pass1.value)
    //alert(2)
    for(let i=0; i<pass1.value.length; i++)
    {
        console.log("index: ", i)
        //alert("index", i)
        console.log(pass1.value.charCodeAt(i))
        if(((pass1.value.charCodeAt(i))>31 && (pass1.value.charCodeAt(i))<48)||((pass1.value.charCodeAt(i))>57 && (pass1.value.charCodeAt(i))<65)||((pass1.value.charCodeAt(i))>90 && (pass1.value.charCodeAt(i))<97)||((pass1.value.charCodeAt(i))>122 && (pass1.value.charCodeAt(i))<127))
        {
            specialchars=specialchars+1
        }
        if((pass1.value.charCodeAt(i))>47 && (pass1.value.charCodeAt(i))<58)
        {
            nums++
        }
    }
    //alert(3)
    console.log(specialchars, ', ', nums)
    //alert(4)
    if((pass1.value.length<8) || (nums==0) || (specialchars==0))
    {
       // alert(5)
        errors.push('the password should be at least 8 characters long, should contain at least 1 digit and 1 special symbol')
        pass1.style.border= 'solid 2px rgba(255, 0, 0, 0.5)'
        pass1.style.backgroundColor="rgba(255, 0, 0, 0.08)"
        //check.innerHTML='<p>!</p>'
    }else{
        pass1.style.border= 'solid 2px black'
        pass1.style.backgroundColor="white"
        //check.innerHTML='<p style="display:inline">&#10004</p>'
    }
    //alert(6)
    if(pass1.value!=pass2.value)
    {
        errors.push('passwords do not match')
        pass2.style.border= 'solid 2px rgba(255, 0, 0, 0.5)'
        pass2.style.backgroundColor="rgba(255, 0, 0, 0.08)"
    }else{
        pass2.style.border= 'solid 2px black'
        pass2.style.backgroundColor="white"
    }

    if(email.value.includes('@')==false)
    {
        errors.push('Email id should contain an "@" ')
        email.style.border= 'solid 2px rgba(255, 0, 0, 0.5)'
        email.style.backgroundColor="rgba(255, 0, 0, 0.08)"
    }else{
        email.style.border= 'solid 2px black'
        email.style.backgroundColor="white"
    }
  
    let errorstring=''
    for(i=0; i<errors.length; i++)
    {
        //alert(errors[i])
        errorstring=errorstring.concat(errors[i], "; ")
    }
    //alert(errorstring)
    
    if(errors.length>0)
    {
        e.preventDefault()
    }else{
        alert("Your account has been successfully made! You will now be redirected to the home page")
    }
    errormessages.innerHTML='<p id="errormessages_p">'+errorstring+'</p>'
    console.log(errormessages.innerHTML)
    let ptag=document.getElementById('errormessages_p')
    ptag.style.color = 'red'
    ptag.style.fontFamily='serif'
    ptag.style.fontSize='14px'
})

