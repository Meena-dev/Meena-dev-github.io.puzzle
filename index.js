
let movesCount=0;
let wrongMoves=0;
function dragWord(dragEvent){
   dragEvent.dataTransfer.setData("Id",    dragEvent.target.id+"|"+dragEvent.target.parentNode.id);
  }

function dropWord(dropEvent){
 var dropData = dropEvent.dataTransfer.getData("Id");
 dropItems = dropData.split("|");
 var prevElem = document.getElementById(dropItems[1]);
 prevElem.getElementsByTagName("div")[0].id = dropEvent.target.id;
 dropEvent.target.id = dropItems[0];
  dropEvent.preventDefault();
  dropEventIds(dropEvent.target.parentNode.id,dropItems[1]);
}

 function dropEventIds(dropId,dragId){
    var dropResult = dropId.toString();
    var dragResult = dragId;
     if((dropResult==="box10" && dragResult==="box4" )|| (dropResult==="box22" && dragResult==="box16" )||(dropResult==="box7" && dragResult==="box19")){
       movesCount = movesCount+1;
       success(movesCount);
     }
     wrongMoves=wrongMoves+1;
     failure();
 }
function success(movesCount){
  if(movesCount===3){
  location.replace("https://i.pinimg.com/originals/30/f9/3a/30f93a089d3a8fe5eb949150b1c008e4.jpg");
  }
}
function failure(){
  if((wrongMoves===3)&&(wrongMoves!==movesCount)){
  alert("You missed it.Click ok to retry.");
  location.reload();
  }
}
