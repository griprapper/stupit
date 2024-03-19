let a=parseInt(prompt("masukan jumlah pembelian"));
let b=parseInt(prompt("masukan uang yang dibayarkan"));
if(a>=1500000){
    diskon=0.25*a;
}
else if(a>500000){
    diskon=0.1*a;
}
else{
    diskon=0;
}
let kembalian=b-diskon
document.write("diskon "+diskon+"</br>");
document.write("kembalian "+kembalian);