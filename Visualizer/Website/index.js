var arrSizeTxt = document.getElementById("arrSizeTxt");
var arrSizeSlider = document.getElementById("arrSizeSlider");

arrSizeSlider.value = 0;
onArrSizeChange();

function onArrSizeChange(){
    var size = arrSizeSlider.value;
    arrSizeTxt.innerHTML = "Array size(" + (parseInt(size)+3) + ")"
}