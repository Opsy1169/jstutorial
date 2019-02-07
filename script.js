
$(document).ready(function(){


const range = $('#range').on('input', changeHeight);


// range.addEventListener("input", changeHeight)
var select = $('#select').on('change', changeSymbol);

// select.addEventListener("change", changeSymbol);
printPyramid(6);


function printPyramid(height) {
  let rows = $(".row");

  a = "asdasdasd";
  if(rows.length == 0) {
    var maxvalue = range.prop('max');

	  a = "";
	  let pyramid = $('#pyramid');
      for(let i = 1; i <= maxvalue; ++i) {
        let s = '';
  		  for (let j = 0; j < maxvalue-i; ++j ) {
  			  s += '\u00A0';
  		  }
        for (let j = 0; j < i + 1; ++j) {
  			  s += '#';
        }
  		  let elem  = $("<p>");
  		  elem.text(s);
        elem.addClass('row');
  		  pyramid.append(elem);

        }
    $.each(rows, function(row){
      $(this).toggleClass('hidden');
    })
}
// const rowsarr = Array.prototype.filter.call(rows, (el) => { return !(el.style.display === 'none' || el.style.display === 'hidden')})
const rowsarr = rows.filter(':visible');
  if (rowsarr.length < height) {
    for(let i = rowsarr.length; i < height; ++i){
      rows.eq(i).removeClass('hidden').addClass('visible');
    }
  //   for (let i = rowsarr.length - 1; i < height; ++i) {
  //     rows[i].setAttribute('style', 'display: block');
  // }
}
else{
  for(let i = rowsarr.length-1; i >= height; --i) {
    rows.eq(i).removeClass('visible').addClass('hidden');
  }
}
 $('.rangelabel').text(height);
}


function changeHeight() {
  let rangevalue = $('#range').val();
  printPyramid(rangevalue);
}

function changeSymbol() {
  let select = $("#select option:selected").val();
  console.log(select);
  
  let symbol = select;
  let rows = $(".row");
  $.each(rows, function(row){
    let qwe = $(this).text();
    qwe = qwe.replace(/#/g, symbol);
    qwe = qwe.replace(/\$/g,  symbol);
    qwe = qwe.replace(/%/g,  symbol);
    $(this).text(qwe);
  })
  // for (let i = 0; i < rows.length; ++i){
  //   var qwe = rows[i].textContent;
  //   qwe = qwe.replace(/#/g, symbol);
  //   qwe = qwe.replace(/\$/g,  symbol);
  //   qwe = qwe.replace(/%/g,  symbol);
  //   rows[i].textContent = qwe;
  // }
}
})
