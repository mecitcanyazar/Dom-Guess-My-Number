" use strict"

// document.querySelector(".message").textContent = "Doğru sayı"
// document.querySelector(".number").textContent = 14
// document.querySelector(".score").textContent = 10

// document.querySelector(".guess").value = 4


let gizliNumara = Math.trunc(Math.random() * 20 + 1)
let puan = 20
let yüksekPuan = 0;                           // highscore için değişken tanımladık.

// Şimdi kodu sadeleştirmek adına tekrar tekrar kullandığım ifadeleri fonksiyonun içine atabilirim
const ekranMesajı = function (mesaj){
    document.querySelector(".message").textContent = mesaj
}
const score = function (skor){
    document.querySelector(".score").textContent = skor
}
const tahminEdilenSayi = function(number){
    document.querySelector(".number").textContent = number
}

// document.querySelector(".number").textContent = gizliNumara
// Math.random ile 0 ile 1 arasında rastgele bir sayı tanımladım ve bunun başına Math.trunc koyarak bu sayıyı ondalıklı kısımlardan arındırıp tam sayı haline getirdim.
// Daha sonra kullanıcının tahminiyle örtüşüp örtüşmediğini kontrol ettiğim gizli sayıyı gizliNumara diye tanımladığım değişkeninin içine attım.Artık her sayfayı yenilediğimde random olarak yeni bir sayı tanımlanacak ve bu sayı kullanıcan tahmin etmesini istediğim sayı olacak.


// check butonunu aktifleştirmek istiyorum.
document.querySelector(".check").addEventListener("click",function(){
    // Bir butonu aktifleştirmek istediğimde addEventListener metodunu kullanıyorum ve buradaki ilk parametre ne işi yapacağını (buradaki gibi tıklama= click),ikinci parametre de tıklanmanın ardından hangi foksiyonun aktif olacağı.eventHandler.
    const tahmin  = Number(document.querySelector(".guess").value )
    console.log(tahmin, typeof tahmin);     // Oluşturduğumuz gizliNumara ile tahmin değişkenlerini kıyaslatacağımız için her ikisinin de türünün aynı olması lazım.Bu yüzden string olan .guess class'ının tipini Number olarak değiştirdim ve tahmin değişkeninde sakladım.
    
    if(!tahmin){                   // Tahmin değişkenine bir değer atamadığımız için undefined ve undefined değerler falsy bir değerdir bunun da karşılığı 0'dır.Başına ! operatörünğ koyarak 0'ı 1e çeviriyorum ki if bloğundan true değeri gelsin ve if bloğunun altındaki koşullar çalışsın.
        // Tahmin olmazsa  
        ekranMesajı("Bir değer girilmedi.")
    }
    
    else if(tahmin === gizliNumara){
        // Oyuncu kazanır
        tahminEdilenSayi(gizliNumara)             // Değerler birbirine eşit olması durumunda number class'ının altında gizlenen numara gizliNumara'ya eşit olmuş olacak.
        ekranMesajı("Doğru sayı")        
        document.querySelector("body").style.backgroundColor = "#60b347"       // Tahmin doğru olduğunda bg-color yeşil olsun.
        document.querySelector(".number").style.width = "30rem"               // Buralar hep string değer olmak zorunda.
        if(puan > yüksekPuan){
            yüksekPuan = puan 
            document.querySelector(".highscore").textContent = yüksekPuan     // Başlangıçta puana 20 yüksekPuana da 0 değerlerini atamıştım.Yani oyun bitene kadar puan değişkeni yüksekPuan değişkeninden yüksek olduğu her durumda yüksekPuan artık puan değerini alacak.
        }
    } 
        
    else if(tahmin !==gizliNumara){
        // Tahminin yanlış olduğunda
        if(puan > 1) {
            ekranMesajı ( tahmin > gizliNumara ? "Çok yüksek" : "Çok düşük")
            puan--;
            score(puan)
        }else{
            ekranMesajı("Oyunu kaybettiniz")
            puan--
            score(0)
        }
    }





    // Kodu daha da sadeleştirmek adına tahmin>gizliNumara ve tahmin<gizliNumara koşulları aslında tahmin !== gizliNumara demek.Bunları da yukarıdaki gibi ternary operatör yardımıyla tek bir koşul üzerinden yazarsam bu aşağıdaki kod bloğu temizlenmiş olacak.
    
    // else if (tahmin > gizliNumara ){
    //      // Tahmin çok büyük
    //     //  Score 0'a inince oyunun bittiğini ekranda yazdırmak için bir if bloğu daha tanımlamam lazım.
    //      if(puan > 1){
    //         ekranMesajı("Çok yüksek")        
    //         puan--;        
    //         score(puan) 
    //      }else{
    //         ekranMesajı("Oyunu kaybettiniz." ) 
    //         score(0) 
    //      }
       
    // }
    // else if (tahmin < gizliNumara){
    //      // Tahmin çok düşük
    //     //  Score 0'a inince oyunun bittiğini ekranda yazdırmak için bir if bloğu daha tanımlamam lazım.
    //     if(puan > 1){
    //         ekranMesajı("Çok düşük") 
    //         puan--;        
    //         score(puan) 
    //     }else{
    //         ekranMesajı("Oyunu kaybettiniz." )  
    //         score(0)
    //     }
        
    // }
})

// again butonunu aktifleştirmek istiyorum.

document.querySelector(".again").addEventListener("click",function(){
    // Again butonu aktif olduğunda ayarları ilk baştaki haline geri döndürsün.
    
    gizliNumara = Math.trunc(Math.random() * 20) + 1;
    puan = 20;
    // again butonu aktif olarak çalıştığında 1 ile 20 arasında yeni bir sayı random etsin ve score 20'den başlasın.
    ekranMesajı("Start guessing...") 
    tahminEdilenSayi("?") 
    score(puan) 
    document.querySelector(".number").style.width = "15rem" 
    document.querySelector("body").style.backgroundColor = "#222" 
    // document.querySelector(".guess").value = ""  // Tahmin değişkenini yukarıda check classının altında const ile tanımladığım için burada kullanacaksam tekrar tanımlamam lazım ya da yaptığım gibi onu kullanmadan da direkt document üzerinden calıştırabilirim.
    const tahmin = document.querySelector(".guess").value = ""
})

