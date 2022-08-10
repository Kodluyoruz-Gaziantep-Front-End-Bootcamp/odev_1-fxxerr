let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 },
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];


//1- arr1 başına 'a' elemanını ekleyiniz
arr1.unshift('a')
console.log(arr1)

//2- arr1 sonuna 6 elemanını ekleyiniz
arr1.push(6)
console.log(arr1)

//3- arr1 sonundaki elemanı siliniz
arr1.pop()
console.log(arr1)

//4- arr1 başındaki elemanı siliniz
arr1.shift()
console.log(arr1)

//5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
var arr12=arr1.concat(arr2);
console.log(arr12)

var arr12=[...arr1,...arr2]
console.log(arr12)


//6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
//    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
//    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız

function degerkontrol(arr,deger){
  return arr.includes(deger)
}

console.log(degerkontrol(arr2,'h'))

//7- arr2 içindeki 'h' elemanın indexsini bulunuz

console.log(arr2.indexOf('h'))

//8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
for(var i=0;i<4;i++)
{
    arr2.pop() //arr2.shift()
}
console.log(arr2.length)


//9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
//    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   

function numsum(arr){
    var sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i]=='number')
        {
            sum+=arr[i]
        }
    }
    return sum
}

console.log(numsum(arr1))

//10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız

let strarr=arr1.map(function(e){
    return e+"";
})
console.log(strarr)
    
//11- arr3 içindeki id değeri 221 olan elemanı bulunuz

console.log(arr3.find(element => element.id==221))


//12- arr3 içindeki user değerleri ali olan elemanları bulunuz

console.log(arr3.filter(element => element.name=='ali'))

//13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

const idSum = arr3.reduce((pre, cur)=> pre+cur.id,0);
console.log(idSum);