To_do = [
{
	date_todo:"03-15-00", name:"Matutulog", isDone:true
},
{
	date_todo:"02-08-10", name:"Natutulog", isDone:true
},
{
	date_todo:"12-29-15", name:"Gigising", isDone:true
},
{
	date_todo:"05-18-04", name:"Aalis", isDone:false
},
{
	date_todo:"11-11-11", name:"Kakain", isDone:false
},
{
	date_todo:"12-12-12", name:"Matutulog", isDone:true
},
{
	date_todo:"12-13-19", name:"Maglalaro", isDone:false
},
]
To_do.push({
	date_todo:"1-11-11", name:"Kain", isDone:false
});

To_do.map((job)=>(
	console.log(job)
	));

delete To_do[0]
console.log("************")
To_do[2] = {date_todo:"07-12-03", name:"Okayyy", isDone:true}

To_do[1]["name"]="Jemrick";//Specific Update

To_do.map((job)=>(
	console.log(job)
	));
