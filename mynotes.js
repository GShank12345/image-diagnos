
// window.alert("window",window);

// window.moveTo(0, 0);
var d = new Date()
var yourname = ""
var i = 0
var value="";
var imgc;
var x=" ";

var flowers = ["flower/flower-1.png","flower/flower-2.png","flower/flower-3.png","flower/flower-4.png","flower/flower-5.png","flower/flower-6.png","flower/flower-7.png","flower/flower-8.png","flower/flower-9.png","flower/flower-10.png"]



var i1 =  Math.floor(Math.random() * flowers.length);
var  mess=flowers[i1];



var ffm = []
// change Feb 8
var url1 = 'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans'


window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><b>Browser Color : </b></label>&nbsp;")
window.document.write("<input type='radio' id='color1' name='color' value='lightblue'><label for='lightblue'><b>Light Blue</b></label>&nbsp;&nbsp;")

var color1 = window.document.getElementById('color1');

color1.onclick = function()
    {
         window.document.body.style.backgroundColor = color1.value
    }

window.document.write("<input type='radio' id='color112' name='color' value='lightgrey'><label for='lightgrey'><b>Light Grey</b></label>&nbsp;&nbsp;")

var color112 = window.document.getElementById('color112');

color112.onclick = function()
{
    window.document.body.style.backgroundColor = color112.value
}

window.document.write("<input type='radio' id='color11' name='color' value='lightgreen' checked><label for='lightgreen'><b>Light Green</b></label>&nbsp;&nbsp;")


var color11 = window.document.getElementById('color11');
window.document.body.style.backgroundColor = color11.value
color11.onclick = function()
{
    window.document.body.style.backgroundColor = color11.value
}
window.document.write("<input type='radio' id='color12' name='color' value='yellow'><label for='yellow'><b>Yellow</b></label>&nbsp;&nbsp;")

var color12 = window.document.getElementById('color12');
color12.onclick = function()
{
    window.document.body.style.backgroundColor = color12.value
}
window.document.write("<input type='radio' id='color111' name='color' value='green'><label for='green'><b>Green</b></label>&nbsp;&nbsp;")

var color111 = window.document.getElementById('color111');
color111.onclick = function()
{
    window.document.body.style.backgroundColor = color111.value
}
window.document.write("<input type='radio' id='color13' name='color' value='white'><label for='white'><b>White</b></label>&nbsp;&nbsp;")

var color13 = window.document.getElementById('color13');
color13.onclick = function()
{
    window.document.body.style.backgroundColor = color13.value
}
window.document.write("<input type='radio' id='color2' name='color' value='pink'><label for='pink'><b>Pink</b></label><br>")
                      var color2 = window.document.getElementById('color2');
                      color2.onclick = function()
                      {
                      window.document.body.style.backgroundColor = color2.value
                      }


/// new


window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<style>.dcolorn{width:15%;text-align:center;bold;text-color:black;}</style><h4><label class='dcolorn'><b>Enter Name:</b></label>&nbsp&nbsp<input type='text' id='entername' placeholder='Enter your name' title='enter-name' class='dcolorn' onclick='entername()'></input><br>")


        
        window.document.write("<br><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; General Health Diagnostics using Image" + " " + String(d).substring(0,16) + "</h1>&nbsp;&nbsp;")

        // window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<body onload='enableEditMode()'><style>.dcolor{width:10%;text-align:center}</style><button onclick='bold' title='bold' id='bold'><i class='fa fa-bold'></i></button><textarea id='demo' rows='20' cols='110'></textarea>")
        
        window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Select a File to Load:&nbsp;&nbsp;<input type='file' id='fileToLoad'><button id='loadFileAsText' onclick='loadfile()'>Load Selected File</button></b><br><br>")
        
        
        var fileload = document.getElementById('loadFileAsText');
        
        window.document.write(";<iframe name='demo' id='demo' style='color:black;width:75%;' height='300'></iframe><img id='flower-id' width='150' height='150' alt='flowers' src=" + mess + "></img><script id='scriptcr' src='./crypto-js/crypto-js.js' value=imgc></script><script src='textarea.js'></script></body>'")
        var textframe = window.document.getElementById('demo');
        
        window.document.getElementById("demo").style.backgroundColor = "lightblue";
        // file upload
        fileload.onclick = function loadfile() {
            // alert("entered")
            var filename = document.getElementById("fileToLoad").value
            var fileext = filename.split('.').pop().toLowerCase();

            if ((fileext == "jpg") || (fileext == "png")) {
                var fileToLoad = document.getElementById("fileToLoad").files[0];
                console.log("The file to load " + document.getElementById("fileToLoad").files[0])

                var fileReader = new FileReader();
                var img = document.createElement("img")
                fileReader.readAsDataURL(fileToLoad)
                fileReader.onload = function(fileLoadedEvent){
                    console.log("Tinside ")
                    img.src = fileLoadedEvent.target.result;
                    console.log("The file to load " + img.src)
                    imgc = img.src
                    demo.document.body.innerHTML = "<img id='img' alt='health' height='250' width='250' src=" + img.src + "></img></html>"
                };

            }
            else
            {
                window.alert("Please upload only jpeg or png file. ")
            }
        }
        // file upload
        
     //   var textpage = window.document.getElementById('demo');
     //   var mess = window.document.getElementById('flower-img');

        var cryptcr = window.document.getElementById('scriptcr').src;
    

        
yourname = document.getElementById('entername').value;
