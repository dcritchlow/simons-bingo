$(document).ready(function(){
   
    var usedArray = new Array(76);
    var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var number = 0;
    var base = 0;
   
    init();
   
    function init(){
        for(var i = 0; i<24; i++){
            fillCard(i);
        }
    }
	  	 
    function fillCard(i){
        base = baseArray[i] * 15;
        number = base + Math.floor(Math.random()*15)+1;
		 
        if(usedArray[number] != true){
            $('#cell'+i).html(number);
            usedArray[number] = true;
        }else{
            fillCard(i);
        }
    }
	 
    function resetUsedNumbersArray(){
        for(var j = 0; j < usedArray.length; j++){
            usedArray[j] = false;
        }
    }
	 
	 
    $('#newCard').click(function(){
        if(confirm("Are you sure you want a new card?")){
            resetUsedNumbersArray();
            init();
            clearBoard();
        }
    });
	 
    $('td').click(function(){
        var toggle = this.style;
        toggle.backgroundColor = toggle.backgroundColor? "":"#333";
        toggle.color = toggle.color? "":"#fff";
    });

    function clearBoard(){
        var trs = $('table tr');
        for(var i=0; i < trs.length; i++){
            var cells = trs[i].cells;
            for(var j=0; j < cells.length; j++){
                var style = cells[j].style;
                var selected = style.backgroundColor == "rgb(51, 51, 51)"
                if(selected){
                    style.backgroundColor = "";
                    style.color = style.color? "":"#fff";
                }
                
            }
        }
    }
});
