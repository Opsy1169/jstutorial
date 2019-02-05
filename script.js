

var range = document.getElementById("range");
range.addEventListener("input", changeHeight)
var select = document.getElementById("select");
select.addEventListener("change", changeSymbol);
printPyramid(6);


function printPyramid(height) {
  let rows = document.getElementsByClassName("row");
  a = "asdasdasd";
  if(rows.length == 0) {
    var maxvalue = range.max;
    console.log(maxvalue);
	   a = "";
	    let pyramid = document.getElementById('pyramid');
  for(let i = 1; i <= maxvalue; ++i) {
      let s = '';
  		for (let j = 0; j < maxvalue-i; ++j ) {
  			s += '\u00A0';
  		}
      for (let j = 0; j < i + 1; ++j) {
  			s += '#';
      }
  		let elem  = document.createElement("p");
  		elem.textContent = s;
      elem.className = 'row';
  		pyramid.appendChild(elem);

    }
    for (let i = maxvalue - 1; i >= range.defaultValue; i -= 1) {
      rows[i].setAttribute('style', 'display: none');
    }
}
const rowsarr = Array.prototype.filter.call(rows, (el) => { return !(el.style.display === 'none' || el.style.display === 'hidden')})
  if (rowsarr.length < height) {
    for (let i = rowsarr.length - 1; i < height; ++i) {
      rows[i].setAttribute('style', 'display: block');
  }
}
else{
  for(let i = rowsarr.length-1; i >= height; --i) {
    rows[i].setAttribute('style', 'display: none');
  }
}
  document.getElementsByClassName('rangelabel')[0].textContent = height;
}


function changeHeight() {
  const rangevalue = document.getElementById('range').value;
  printPyramid(rangevalue);
}

function changeSymbol() {
  let select = document.getElementById("select");
  let symbol = select.options[select.selectedIndex].value;
  let rows = document.getElementsByClassName("row");
  for (let i = 0; i < rows.length; ++i){
    var qwe = rows[i].textContent;
    qwe = qwe.replace(/#/g, symbol);
    qwe = qwe.replace(/\$/g,  symbol);
    qwe = qwe.replace(/%/g,  symbol);
    rows[i].textContent = qwe;
  }
}
