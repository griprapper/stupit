let jabatan=prompt("masukan jabatan pegawai");
switch (jabatan){
    case"derektur":
        gaji=20000000;
        break
    case"manager":
        gaji=10000000;
        break
    default:
        gaji=7500000;
        break;
}
document.write("jabatan: "+jabatan+"</br>")
document.write("Gaji "+gaji);