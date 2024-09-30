
demo.document.designMode = "on";

var textkey = ""
var decrypt1 = ""
var decrypted = ""
var textkey1 = ""
var decrypt2 = ""
var decrypted2 = ""
var fdisclaimer = "This is just a general diagnosis and may not be accurate. Always consult a healthcare prfessional. "
var yourfullname = ""
var iv = CryptoJS.enc.Base64.parse("");
// alert("Enter your name.")

 fetch('https://oszd3wrcv4.execute-api.us-east-1.amazonaws.com/default/textauth').then((response) => response.json())
  .then ((data) =>  {
  decrypt1 = data
// console.log("decrypt1-aut with iv",decrypt1)
 decrypted = CryptoJS.AES.decrypt(decrypt1,"",{});
     // console.log("text key", decrypted)
 textkey =  decrypted.toString(CryptoJS.enc.Utf8)
     // console.log("text key", textkey)
 });

window.document.write("<br><br><br><style>.dcolor{width:20%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='downloadpage' title='Text Correct' onclick='textpage()' class='dcolor'><h4>Diagnose Image</h4></button>&nbsp &nbsp &nbsp &nbsp &nbsp<style>.dcolor1{width:15%;text-align:center;background-color:lightblue}</style> </head><button type='button' id='clearpage' title='Clear page' onclick='clearpage()' class='dcolor1'><h4>Clear Image</h4></button>&nbsp &nbsp &nbsp<style>.dcolor2{width:15%;text-align:center;bold;text-size:4}</style><label class='dcolor2'><b>Enter email:</b></label>&nbsp&nbsp<input height=150 type='text' id='enteremail' placeholder='Enter email' title='enter-email' onclick='enteremail()'></input>&nbsp&nbsp&nbsp <button type='button' id='mailto' title='Email to' onclick='mailtopage()' class='dcolor1'><h4>Email Text</h4></button>&nbsp &nbsp &nbsp<button type='button' id='printpage' title='Print Text' onclick='printpage()' class='dcolor1'><h4>Print Text</h4></button> &nbsp &nbsp &nbsp <br><br><br>")

var textemail = window.document.getElementById('enteremail');
var clearpage = window.document.getElementById('clearpage');
var textpage = window.document.getElementById('downloadpage');
var mailpage = window.document.getElementById('mailto');
var printpage = window.document.getElementById('printpage');

window.document.write("<iframe name='democ' id='democ' style='background-color: lightblue;color:white;width:75%;' height='300'></iframe>&nbsp;&nbsp;<img id='playcorr' src='sound.png' onclick='playcorr()'></img>")

var playcorr = window.document.getElementById('playcorr');

playcorr.onclick = function playcorr()
{

    if (democ.document.body.innerHTML == "")
    {
        alert("There is no diagnosis")
    }
    else
    {
       
        chrome.tts.speak( democ.document.body.innerText, {'voiceName': 'Samantha','rate':0.8,'pitch':0.8});

        }
   
}
printpage.onclick = function printpage()
{
    yourname = document.getElementById('entername').value;
    yourfullname = yourname.substring(0,1).toUpperCase() + yourname.substring(1) + " " + String(d).substring(0,16)
    if (yourname == "")
    {
        alert("Enter name")
    }
    else
    {
        var dem = demo.document.body.innerHTML
        var demc = democ.document.body.innerHTML
        var winds = window.open('','','height=500,width=500')
        winds.document.write("<html><body><h2><ul>" + yourfullname +  "Text</ul></h2><br><br>" + dem + "<br><br><h2><ul>Corrected Text</ul></h2><br>" + demc + "<br></body></html>")
        winds.document.close();
        winds.print();
    }
}

mailpage.onclick = function mailtopage()
{
   // alert(textemail.value)
  //  if (textemail.value.includes('@')==false || textemail.value.includes('.com')==false)
    yourname = document.getElementById('entername').value;
    yourfullname = yourname.substring(0,1).toUpperCase() + yourname.substring(1) + " " + String(d).substring(0,16)
   // if (yourname == "")
   // {
   //     alert("Enter name")
  //  }
 //   else
  //  {
        const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (res.test(String(textemail.value).toLowerCase()) == false)
        {
            alert("Please enter a valid e-mail address")
        }
        else
        {
            window.location.href = "mailto:" + textemail.value + "?subject=" + yourfullname + " Text &body=" + democ.document.body.innerText
        }
   // }
}
clearpage.onclick = function clearpage()
{
    demo.document.body.innerHTML = ""
    democ.document.body.innerHTML = ""
}

textpage.onclick = function textpage()
{
    var dem = demo.document.body.innerHTML
    yourname = document.getElementById('entername').value;
    yourfullname = yourname.substring(0,1).toUpperCase() + yourname.substring(1) + String(d).substring(0,16)
   if (demo.document.body.innerHTML == "")
    {
        alert("Enter an Image")
    }
    else
    {
       // console.log("Text Key ==============",imgc)
        if (textkey == null)
        {
            Console.log("text key error")
        }
        democ.document.body.innerHTML = "<b><h2>Please wait...Analyzing</h2></b>"
        democ.document.body.innerHTML.editable = false

        
        fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + textkey
        },
            
        body: data = JSON.stringify({
            'model': "gpt-4o-mini",
            'messages': [{role: "user",  content: [
                { type: "text", text: "Diagnose the image with no pleasentries." },
                {
                    type: "image_url",
                    image_url: {
                        "url": imgc,
                        "detail": "low"
                    },
                },
            ],
                'temperature': 0,
                'max_tokens': 256
            },
            ],
        })
        })
        .then( (response)=> {
            return response.json()
            .then((data)=> {
                console.log("message success",data.error)
                if (data.error)
                {
                    console.log("message error",data.error)
                    alert("Internal Error. Please try again after some time.")
                    democ.document.body.innerHTML = ""
                    window.location.href = "notes.html"
                }
                else
                {
                    console.log(data.choices[0].message.content);
                    democ.document.body.innerHTML = "done"
                    democ.document.body.innerHTML = "<h3><b>" + data.choices[0].message.content + " " + fdisclaimer + "</b></h3>"
                }
            })
        })
    }
}
