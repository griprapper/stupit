let nilaisika=parseInt(prompt("masukan nilai fisika:"));
let nilaimat=parseInt(prompt("masukan nilai matematika:"));
let nilaibing=parseInt(prompt("masukan nilai bahasa inggris:"));
let nilairata=(nilaifisika+nilaimat+nilaibing)/3;
if(ratarta>=90){
    nilai="A"
}
else if(ratarata>=80){
    nilai="B"
}
else if(ratarata>=70){
    nilai="C"
}
else{
    nilai="D"
}
document.write("Rata-Rata"+ratarata)
document.write("Nilai"+nilai)