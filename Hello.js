var divs = ["signin", "signup", "contact"];
        var visibleDivId = null;
function visibilityChanger(divId) {
  if(visibleDivId === divId) { }
   else {
    visibleDivId = divId;
  }
  blockNonVisibleDivs();
}
function blockNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
var abc= [];
function userValidation() 
{             valid=0;
              document.getElementById("msg1").innerHTML='';
              document.getElementById("msg2").innerHTML='';
          	var userid1= document.getElementById('userid');
          	var password1 = document.getElementById('password');
            emailValidation(userid1);
            passwordValidation(password1);           
            function emailValidation(userid1) 
              {
                   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userid1.value))
                    {
                      f=1;
                    }
                    else{
                      f=0;
                      }            
                   if(f==0)
                   {
                     document.getElementById("msg1").innerHTML+="Please  enter a VALID user ID";
                    }
              }                
             function passwordValidation(password1)
             {
              if(password1.value.trim().length<6)
               {
                  l=0;
               }
               else if(password1.value.trim().length>15)
               {
                 l=0; 
                }
                else {l=1;}
             
                if(l==0)
                {
                  document.getElementById("msg2").innerHTML+="Please enter a VALID password 6-15 :charactors";
                }
              } 
           for(var i=0;i<abc.length;i++)
             {
                var checkmail =JSON.parse(localStorage["abc"])[i].email;
                var checkpassword =JSON.parse(localStorage["abc"])[i].password;
        
                if ((checkmail==document.getElementById("userid").value) && (checkpassword==document.getElementById("password").value))
                {
                  valid=1;
                  break;
                }
             }               
             if(f==1)
              {
                  if(l==1)
                  {
                    if(valid==1)
                      {
                  alert("SUCCESSFULL LOGIN");
                  }
                }
              }    
}
function register()
 {
              document.getElementById("msg3").innerHTML='';
              document.getElementById("msg4").innerHTML='';
              document.getElementById("msg5").innerHTML='';

          	var susername= document.getElementById('susername');
          	var semail= document.getElementById('semail');
          	var spassword=document.getElementById('spassword');

            usernameValidation(susername);
            emailValidation(semail);
            passwordValidation(spassword);

            function usernameValidation(susername)
             {
                     if(susername.value.length<1)
                    {
                      q=0; 
                    }
                   if(susername.value.length>20)
                    {
                      q=0;
                    }
                    else{q=1;}
              
                   if(q==0)
                   {
                    document.getElementById("msg3").innerHTML+="Please  enter a VALID USERNAME"; 
                   }
              }
              function emailValidation(suserid) 
              {
                   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(suserid.value))
                    {
                      a=1;
                    }
                    else{
                      a=0;
                      }
                    
                    if(a==0)
                    {
                    document.getElementById("msg4").innerHTML+="Please  enter a VALID user ID";
                    }
               }     

               function passwordValidation(spassword)
                 {
                          if(spassword.value.trim().length<6)
                              {
                                  l=0;
                               }
                           else if(spassword.value.trim().length>15)
                               {
                                 l=0; 
                                }
                           else {l=1;}
                       
                            if(l==0)
                            {
                              document.getElementById("msg5").innerHTML+="Please enter a VALID password 6-15 :charactors";
                            }
                 }
                localStorage.resultname = susername.value
                localStorage.resultPassword = spassword.value;
                localStorage.resultMail = semail.value;

                user = {
                  name: susername.value,
                  email: semail.value,
                  password: spassword.value,
                };
                if (localStorage.firstentry)
                {
                  abc = JSON.parse(localStorage["abc"]);
                }
              
                abc.push(user);
                localStorage.setItem("abc",JSON.stringify(abc));

                localStorage.firstentry += 1;
                   alert("Signup Successfull"); 
                r=1;  

            if(q==1)
            {
              if(a==1)
              {
                  if(l==1)
                  {
                     if(r==1){
 
                     alert("SUCCESSFULL SIGNUP");
                  }
                }
              }
            }   
}
function usercontact() 
{
           document.getElementById("msg6").innerHTML='';
           document.getElementById("msg7").innerHTML='';
           document.getElementById("msg8").innerHTML='';
           document.getElementById("msg9").innerHTML='';
      	var cusername= document.getElementById('cusername');
      	var cemail= document.getElementById('cemail');
      	var cphone= document.getElementById('cphone');
          var cquestion= document.getElementById('cquestion');

localStorage.setItem("cusername", document.getElementById("cusername").value);
localStorage.setItem("cemail", document.getElementById("cemail").value);
localStorage.setItem("cphone", document.getElementById("cphone").value);
localStorage.setItem("cquestion", document.getElementById("cquestion").value);
          usernameValidation(cusername);
          emailValidation(cemail);
          phoneValidation(cphone);
          questionValidation(cquestion);
          
          function  usernameValidation(cusername)
          {      g=1;
                 if(cusername.value.length<1)
                {
                  g=0; 
                }
                if(cusername.value.length>20)
                {
                  g=0;
                }
                      
                if(g==0)
                {
                document.getElementById("msg6").innerHTML+="Please  enter a VALID username"; 
                }
           }
          function emailValidation(cuserid) 
            {
                 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cuserid.value))
                  {
                    a=1;
                  }
                  else{
                     a=0;
                    }
            
                if(a==0)
                {
                document.getElementById("msg7").innerHTML+="Please  enter a VALID user ID";
                }
           }
         function phoneValidation(cphone)
          {
                if(/^\d{10}$/.test(cphone.value))
                {
                  d=1;
                }
                else
                {
                  d=0;
                }
          
              if(d==0)
              {
              document.getElementById("msg8").innerHTML+="Please  enter a VALID Phone Number";
              }
           }
          function questionValidation(cquestion)
          {
              if(cquestion.value.trim()=="")
                  h=0;
               else if(cquestion.value.length<1)
               {
                  h=0;
               }
               else if(cquestion.value.length>200)
               {
                  h=0;
               }
               else
               {
                  h=1;
              }
          
              if(h==0)
              {
                document.getElementById("msg9").innerHTML="Question must less than 200 letters";  
              }
         }  
}


