function haeNumero(tunnus) {
    return parseFloat(document.getElementById(tunnus).value);
}

function moukariPisteet(moukaritulos, moukariika) {
    if (moukariika < 30 | moukaritulos < 6) {
        kmoukaritulos = 6;
        moupaino = "----";
    }   else if (moukariika >= 30 & moukariika < 35) {
        kmoukaritulos = moukaritulos * 1;
        moupaino = 4000; 
    }   else if (moukariika >= 35 & moukariika < 40) {
        kmoukaritulos = moukaritulos * 1.0942;
        moupaino = 4000;
    }   else if (moukariika >= 40 & moukariika < 45) {
        kmoukaritulos = moukaritulos * 1.1763;
        moupaino = 4000;
    }   else if (moukariika >= 45 & moukariika < 50) {
        kmoukaritulos = moukaritulos * 1.2717;
        moupaino = 4000;
    }   else if (moukariika >= 50 & moukariika < 55) {
        kmoukaritulos = moukaritulos * 1.2838;
        moupaino = 3000;
    }   else if (moukariika >= 55 & moukariika < 60) {
        kmoukaritulos = moukaritulos * 1.3984;
        moupaino = 3000;
    }   else if (moukariika >= 60 & moukariika < 65) {
        kmoukaritulos = moukaritulos * 1.5353;
        moupaino = 3000;
    }   else if (moukariika >= 65 & moukariika < 70) {
        kmoukaritulos = moukaritulos * 1.7038;
        moupaino = 3000;
    }   else if (moukariika >= 70 & moukariika < 75) {
        kmoukaritulos = moukaritulos * 1.9160;
        moupaino = 3000;
    }   else if (moukariika >= 75 & moukariika < 80) {
        kmoukaritulos = moukaritulos * 1.8918;
        moupaino = 2000;
    }   else if (moukariika >= 80 & moukariika < 85) {
        kmoukaritulos = moukaritulos * 2.163;
        moupaino = 2000;
    }   else if (moukariika >= 85 & moukariika < 90) {
        kmoukaritulos = moukaritulos * 2.5284;
        moupaino = 2000;
    }   else if (moukariika >= 90 & moukariika < 95) {
        kmoukaritulos = moukaritulos * 3.0478;
        moupaino = 2000;
    }   else if (moukariika >= 95 & moukariika < 100) {
        kmoukaritulos = moukaritulos * 3.8446;
        moupaino = 2000;
    }   else {
        kmoukaritulos = moukaritulos * 5.2219;
        moupaino = 2000;
    }    
    pisteetmou = parseInt(17.5458*((kmoukaritulos-6) ** 1.05));  
    document.getElementById("moukaritulostus").innerHTML = (" > Pisteet: " + pisteetmou);
    document.getElementById("moukaripaino").innerHTML = ("Moukarin paino: " + moupaino + " g");
    return pisteetmou;
}

function kuulaPisteet(kuulatulos, kuulaika) {
    if (kuulaika < 30 | kuulatulos < 1.53) {
        kkuulatulos = 1.5;
        kuupaino = "----";
    }   else if (kuulaika >= 30 & kuulaika < 35) {
        kkuulatulos = kuulatulos * 1;
        kuupaino = 4000; 
    }   else if (kuulaika >= 35 & kuulaika < 40) {
        kkuulatulos = kuulatulos * 1.0368;
        kuupaino = 4000;
    }   else if (kuulaika >= 40 & kuulaika < 45) {
        kkuulatulos = kuulatulos * 1.1100;
        kuupaino = 4000;
    }   else if (kuulaika >= 45 & kuulaika < 50) {
        kkuulatulos = kuulatulos * 1.1943;
        kuupaino = 4000;
    }   else if (kuulaika >= 50 & kuulaika < 55) {
        kkuulatulos = kuulatulos * 1.2607;
        kuupaino = 3000;
    }   else if (kuulaika >= 55 & kuulaika < 60) {
        kkuulatulos = kuulatulos * 1.3706;
        kuupaino = 3000;
    }   else if (kuulaika >= 60 & kuulaika < 65) {
        kkuulatulos = kuulatulos * 1.5015;
        kuupaino = 3000;
    }   else if (kuulaika >= 65 & kuulaika < 70) {
        kkuulatulos = kuulatulos * 1.6600;
        kuupaino = 3000;
    }   else if (kuulaika >= 70 & kuulaika < 75) {
        kkuulatulos = kuulatulos * 1.8559;
        kuupaino = 3000;
    }   else if (kuulaika >= 75 & kuulaika < 80) {
        kkuulatulos = kuulatulos * 1.8324;
        kuupaino = 2000;
    }   else if (kuulaika >= 80 & kuulaika < 85) {
        kkuulatulos = kuulatulos * 2.0742;
        kuupaino = 2000;
    }   else if (kuulaika >= 85 & kuulaika < 90) {
        kkuulatulos = kuulatulos * 2.3894;
        kuupaino = 2000;
    }   else if (kuulaika >= 90 & kuulaika < 95) {
        kkuulatulos = kuulatulos * 2.8176;
        kuupaino = 2000;
    }   else if (kuulaika >= 95 & kuulaika < 100) {
        kkuulatulos = kuulatulos * 3.4328;
        kuupaino = 2000;
    }   else {
        kkuulatulos = kuulatulos * 4.3917;
        kuupaino = 2000;
    }    
    pisteetkuu = parseInt(56.0211*((kkuulatulos-1.5) ** 1.05));
    document.getElementById("kuulatulostus").innerHTML = (" > Pisteet: "+ pisteetkuu);
    document.getElementById("kuulapaino").innerHTML = ("Kuulan paino: " + kuupaino + " g");
    return pisteetkuu;
}

function kiekkoPisteet(kiekkotulos, kiekkoika) {
    if (kiekkoika < 30 | kiekkotulos < 3.0) {
        kkiekkotulos = 3;
        kiepaino = "----";
    }   else if (kiekkoika >= 30 & kiekkoika < 35) {
        kkiekkotulos = kiekkotulos * 1;
        kiepaino = 1000; 
    }   else if (kiekkoika >= 35 & kiekkoika < 40) {
        kkiekkotulos = kiekkotulos * 1.0368;
        kiepaino = 1000;
    }   else if (kiekkoika >= 40 & kiekkoika < 45) {
        kkiekkotulos = kiekkotulos * 1.1150;
        kiepaino = 1000;
    }   else if (kiekkoika >= 45 & kiekkoika < 50) {
        kkiekkotulos = kiekkotulos * 1.2058;
        kiepaino = 1000;
    }   else if (kiekkoika >= 50 & kiekkoika < 55) {
        kkiekkotulos = kiekkotulos * 1.3128;
        kiepaino = 1000;
    }   else if (kiekkoika >= 55 & kiekkoika < 60) {
        kkiekkotulos = kiekkotulos * 1.4407;
        kiepaino = 1000;
    }   else if (kiekkoika >= 60 & kiekkoika < 65) {
        kkiekkotulos = kiekkotulos * 1.5961;
        kiepaino = 1000;
    }   else if (kiekkoika >= 65 & kiekkoika < 70) {
        kkiekkotulos = kiekkotulos * 1.7927;
        kiepaino = 1000;
    }   else if (kiekkoika >= 70 & kiekkoika < 75) {
        kkiekkotulos = kiekkotulos * 2.0542;
        kiepaino = 1000;
    }   else if (kiekkoika >= 75 & kiekkoika < 80) {
        kkiekkotulos = kiekkotulos * 2.1546;
        kiepaino = 750;
    }   else if (kiekkoika >= 80 & kiekkoika < 85) {
        kkiekkotulos = kiekkotulos * 2.522;
        kiepaino = 750;
    }   else if (kiekkoika >= 85 & kiekkoika < 90) {
        kkiekkotulos = kiekkotulos * 3.0404;
        kiepaino = 750;
    }   else if (kiekkoika >= 90 & kiekkoika < 95) {
        kkiekkotulos = kiekkotulos * 3.827;
        kiepaino = 750;
    }   else if (kiekkoika >= 95 & kiekkoika < 100) {
        kkiekkotulos = kiekkotulos * 5.1626;
        kiepaino = 750;
    }   else {
        kkiekkotulos = kiekkotulos * 7.9302;
        kiepaino = 750;
    }    
    pisteetkie = parseInt(12.331*((kkiekkotulos-3) ** 1.1));
    document.getElementById("kiekkotulostus").innerHTML = (" > Pisteet: "+ pisteetkie);
    document.getElementById("kiekkopaino").innerHTML = ("Kiekon paino: " + kiepaino + " g");
    return pisteetkie;
}

function keihasPisteet(keihastulos, keihasika) {
    if (keihasika < 30 | keihastulos < 3.87) {
        kkeihastulos = 3.8;
        keipaino = "----";
    }   else if (keihasika >= 30 & keihasika < 35) {
        kkeihastulos = keihastulos * 1;
        keipaino =600; 
    }   else if (keihasika >= 35 & keihasika < 40) {
        kkeihastulos = keihastulos * 1.0621;
        keipaino = 600;
    }   else if (keihasika >= 40 & keihasika < 45) {
        kkeihastulos = keihastulos * 1.1475;
        keipaino = 600;
    }   else if (keihasika >= 45 & keihasika < 50) {
        kkeihastulos = keihastulos * 1.2479;
        keipaino = 600;
    }   else if (keihasika >= 50 & keihasika < 55) {
        kkeihastulos = keihastulos * 1.3147;
        keipaino = 500;
    }   else if (keihasika >= 55 & keihasika < 60) {
        kkeihastulos = keihastulos * 1.4482;
        keipaino = 500;
    }   else if (keihasika >= 60 & keihasika < 65) {
        kkeihastulos = keihastulos * 1.6118;
        keipaino = 400;
    }   else if (keihasika >= 65 & keihasika < 70) {
        kkeihastulos = keihastulos * 1.8171;
        keipaino = 400;
    }   else if (keihasika >= 70 & keihasika < 75) {
        kkeihastulos = keihastulos * 2.0992;
        keipaino = 400;
    }   else if (keihasika >= 75 & keihasika < 80) {
        kkeihastulos = keihastulos * 2.2794;
        keipaino = 400;
    }   else if (keihasika >= 80 & keihasika < 85) {
        kkeihastulos = keihastulos * 2.7129;
        keipaino = 400;
    }   else if (keihasika >= 85 & keihasika < 90) {
        kkeihastulos = keihastulos * 3.3500;
        keipaino = 400;
    }   else if (keihasika >= 90 & keihasika < 95) {
        kkeihastulos = keihastulos * 4.2782;
        keipaino = 400;
    }   else if (keihasika >= 95 & keihasika < 100) {
        kkeihastulos = keihastulos * 6.3171;
        keipaino = 400;
    }   else {
        kkeihastulos = keihastulos * 11.3370;
        keipaino = 400;
    }    
    pisteetkei = parseInt(15.9803*((kkeihastulos-3.8) ** 1.04));
    document.getElementById("keihastulostus").innerHTML = (" > Pisteet: " + pisteetkei);
    document.getElementById("keihaspaino").innerHTML = ("Keihään paino: " + keipaino + " g");
    return pisteetkei;
}

function painoPisteet(painotulos, painoika) {
    if (painoika < 30 | painotulos < 1.5) {
        kpainotulos = 1.5;
        paipaino = "----"; 
    }   else if (painoika >= 30 & painoika < 35) {
        kpainotulos = painotulos * 1;
        paipaino = 9.08; 
    }   else if (painoika >= 35 & painoika < 40) {
        kpainotulos = painotulos * 1.0922;
        paipaino = 9.08; 
    }   else if (painoika >= 40 & painoika < 45) {
        kpainotulos = painotulos * 1.1852;
        paipaino = 9.08; 
    }   else if (painoika >= 45 & painoika < 50) {
        kpainotulos = painotulos * 1.2955;
        paipaino = 9.08; 
    }   else if (painoika >= 50 & painoika < 55) {
        kpainotulos = painotulos * 1822;
        paipaino = 7.26;
    }   else if (painoika >= 55 & painoika < 60) {
        kpainotulos = painotulos * 1.2918;
        paipaino = 7.26;
    }   else if (painoika >= 60 & painoika < 65) {
        kpainotulos = painotulos * 1.2108;
        paipaino = 5.45;
    }   else if (painoika >= 65 & painoika < 70) {
        kpainotulos = painotulos * 1.3260;
        paipaino = 5.45;
    }   else if (painoika >= 70 & painoika < 75) {
        kpainotulos = painotulos * 1.4667;
        paipaino = 5.45;
    }   else if (painoika >= 75 & painoika < 80) {
        kpainotulos = painotulos * 1.3955;
        paipaino = 7.26;
    }   else if (painoika >= 80 & painoika < 85) {
        kpainotulos = painotulos * 1.5624;
        paipaino = 4.00;
    }   else if (painoika >= 85 & painoika < 90) {
        kpainotulos = painotulos * 1.7304;
        paipaino = 4.00;
    }   else if (painoika >= 90 & painoika < 95) {
        kpainotulos = painotulos * 1.9798;
        paipaino = 4.00;
    }   else if (painoika >= 95 & painoika < 100) {
        kpainotulos = painotulos * 2.3272;
        paipaino = 4.00;
    }   else {
        kpainotulos = painotulos * 2.8449;
        paipaino = 4.00;
    }    
    pisteetpai = parseInt(52.1403*((kpainotulos-1.5) ** 1.05));
    document.getElementById("painotulostus").innerHTML = (" > Pisteet: " + pisteetpai);
    document.getElementById("painopaino").innerHTML = ("Painon paino: " + paipaino + " kg");
    return pisteetpai;
}

function laskepisteet() {
    moukariPisteet(haeNumero("moukaritulos"), haeNumero("ika"));
    kuulaPisteet(haeNumero("kuulatulos"), haeNumero("ika"));
    kiekkoPisteet(haeNumero("kiekkotulos"), haeNumero("ika"));
    keihasPisteet(haeNumero("keihastulos"), haeNumero("ika"));
    painoPisteet(haeNumero("painotulos"), haeNumero("ika"));
    document.getElementById("yhteispisteet").innerHTML = (pisteetmou + pisteetkuu + pisteetkie + pisteetkei + pisteetpai);
}
