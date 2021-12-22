function click(value){
    let a=document.getElementsByTagName("input");
    let b=document.getElementsByClassName("val");   
    if(value=="x"||value=="-"||value=="/"||value=="+"){
        console.log(b)
        b[0].innerText=a[0].value;
        a[0].value=value;
    }
    else if(value=="="){
        let temp=a[0].value.slice(1);
        let str=a[0].value.split("");
        str = str.slice(1).join("");
        console.log(str)
      if((a[0].value[0])=="x"){
           a[0].value=Number(str) * Number(b[0].innerText);
           b[0].innerText+=" x "+temp;
      }
     else if((a[0].value[0])=="/"){
        a[0].value=Number(b[0].innerText)/Number(str);
        b[0].innerText+=" / "+temp;
    }
    else if((a[0].value[0])=="+"){
        a[0].value=Number(b[0].innerText)+Number(str);
        b[0].innerText+=" + "+temp;
    }
    else if((a[0].value[0])=="-"){
        a[0].value=Number(b[0].innerText)-Number(str);
        b[0].innerText+=" - "+temp;
    }
    }
    else if(value=="c"){
        b[0].innerText=null;
        a[0].value=null;
    }
    else{
        a[0].value+=value
        console.log(a[0].value)
    }

}
module.exports=click;