// Masala: a[0], a[1], ....a[100] masssiv yarating va indexlari toqlari yigindisi va  indexlari juftlari ayrimasini toping


let a=[];
let b=[];
let sum=0;
let ayirma=0;

for(i=0; i<=100; i++){
    if(i%2==0){
        a.push(i);
        for(i=0; i<a.length; i++){
            sum = sum + i;
        }
    }

    else{
        b.push(i);
        for(i=b.length; i>=0; i--){
            ayirma = ayirma -i;
        }
    }
}

console.log(sum);

console.log(ayirma);

