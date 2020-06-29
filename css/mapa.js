function highlight_map_states(){
  if($(".states_section").length>0){
     $(".states_section .list_states .item .link").hover(function(){
       var a="#state_"+$(this).text().toLowerCase();
       $(a).attr("class","state hover")
     },function(){
       var a="#state_"+$(this).text().toLowerCase();
       $(a).attr("class","state")
     })
  }
};


function Mudarestado(el) {
    //    var display = document.getElementById(el).style.display;
     //   if(display == "none")
            var x = document.getElementsByClassName("estado");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
}
            document.getElementById(el).style.display = 'block';
      //  else
            document.getElementById('geral').style.display = 'block';

    }

function Abrir(x) {

  var x;
  var y = document.getElementsByClassName("card-details");
  if(y[x].style.display == "none"){
    y[x].style.display = 'block'; 
  }else {
    Fechar(x);
  }

}

function Fechar(x) {

  var x;
  var y = document.getElementsByClassName("card-details");
  if(y[x].style.display = 'block'){
    y[x].style.display = 'none'; 
  }

}