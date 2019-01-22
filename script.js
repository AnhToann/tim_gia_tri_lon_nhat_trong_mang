var x = prompt("Moi nhap_mang");
var arr = x.split(',');
document.write('Mang ban nhap vao la <br>');
for (var i=0; i<arr.length;i++)
    document.write(i===arr.length-1 ? (arr[i]+'<br>'):(arr[i]+'.'));
    var max = arr [0];
    var index = 0;
for (var i = 1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}
document.write("max: "+max + "at position" +index);


