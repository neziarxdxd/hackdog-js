var nameText = document.getElementById("enter_name");
var addressText = document.getElementById("enter_address");
var sectionText = document.getElementById("enter_section");


var firebaseRef= firebase.database().ref();
function submitClick(){  
    
// set is used to update
 firebaseRef.child("ID").push({
         name: nameText.value,
         address: addressText.value,
         section: sectionText.value
    });
}


function readData(){
    $(".list-data").html("");
    var root = firebaseRef.child("ID");
    root.on("child_added",snap=>{    

        $(".list-data").append(`<p onclick=displayData('${snap.key}','${snap.val().name}','${snap.val().address}','${snap.val().section}')>${snap.val().name}</p>`);
        
    });
}
let currentID="";
function displayData(id,name,address,section) {
    currentID=id;
    nameText.value=name;
    addressText.value =address;
    sectionText.value=section;
    console.log(id,name,address,section)      
 }

 function saveClick(){      
    // set is used to update
     firebaseRef.child("ID").child(currentID).set(
         {             
             name: nameText.value,
             address: addressText.value,
             section: sectionText.value,             
         }
     )   
    readData()   
}

function removeClick(){
}
