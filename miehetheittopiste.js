function haeNumero(tunnus) {
    return parseFloat(document.getElementById(tunnus).value)
}

function moukariPisteet(moukaritulos, moukariika) {
    if (moukariika < 30 | moukaritulos < 7) {
        kmoukaritulos = 7;
        moupaino = "----";
    }   else if (moukariika >= 30 & moukariika < 35) {
        kmoukaritulos = moukaritulos * 1;
        moupaino = 7260; 
    }   else if (moukariika >= 35 & moukariika < 40) {
        kmoukaritulos = moukaritulos * 1.03;
        moupaino = 7260;
    }   else if (moukariika >= 40 & moukariika < 45) {
        kmoukaritulos = moukaritulos * 1.1252;
        moupaino = 7260;
    }   else if (moukariika >= 45 & moukariika < 50) {
        kmoukaritulos = moukaritulos * 1.2397;
        moupaino = 7260;
    }   else if (moukariika >= 50 & moukariika < 55) {
        kmoukaritulos = moukaritulos * 1.1864;
        moupaino = 6000;
    }   else if (moukariika >= 55 & moukariika < 60) {
        kmoukaritulos = moukaritulos * 1.3145;
        moupaino = 6000;
    }   else if (moukariika >= 60 & moukariika < 65) {
        kmoukaritulos = moukaritulos * 1.3082;
        moupaino = 5000;
    }   else if (moukariika >= 65 & moukariika < 70) {
        kmoukaritulos = moukaritulos * 1.4656;
        moupaino = 5000;
    }   else if (moukariika >= 70 & moukariika < 75) {
        kmoukaritulos = moukaritulos * 1.4524;
        moupaino = 4000;
    }   else if (moukariika >= 75 & moukariika < 80) {
        kmoukaritulos = moukaritulos * 1.649;
        moupaino = 4000;
    }   else if (moukariika >= 80 & moukariika < 85) {
        kmoukaritulos = moukaritulos * 1.8654;
        moupaino = 3000;
    }   else if (moukariika >= 85 & moukariika < 90) {
        kmoukaritulos = moukaritulos * 2.2212;
        moupaino = 3000;
    }   else if (moukariika >= 90 & moukariika < 95) {
        kmoukaritulos = moukaritulos * 2.7616;
        moupaino = 3000;
    }   else if (moukariika >= 95 & moukariika < 100) {
        kmoukaritulos = moukaritulos * 3.6895;
        moupaino = 3000;
    }   else {
        kmoukaritulos = moukaritulos * 5.6369;
        moupaino = 3000;
    }    
    pisteetmou = parseInt(13.0449*((kmoukaritulos-7) ** 1.05));  
    document.getElementById("moukaritulostus").innerHTML = (" > Pisteet: " + pisteetmou);
    document.getElementById("moukaripaino").innerHTML = ("Moukarin paino: " + moupaino + " g");
    return pisteetmou;
}

function kuulaPisteet(kuulatulos, kuulaika) {
    if (kuulaika < 30 | kuulatulos < 1.5) {
        kkuulatulos = 1.5;
        kuupaino = "----"; 
    }   else if (kuulaika >= 30 & kuulaika < 35) {
        kkuulatulos = kuulatulos * 1;
        kuupaino = 7260; 
    }   else if (kuulaika >= 35 & kuulaika < 40) {
        kkuulatulos = kuulatulos * 1.0372;
        kuupaino = 7260;
    }   else if (kuulaika >= 40 & kuulaika < 45) {
        kkuulatulos = kuulatulos * 1.1137;
        kuupaino = 7260;
    }   else if (kuulaika >= 45 & kuulaika < 50) {
        kkuulatulos = kuulatulos * 1.2023;
        kuupaino = 7260;
    }   else if (kuulaika >= 50 & kuulaika < 55) {
        kkuulatulos = kuulatulos * 1.1721;
        kuupaino = 6000;
    }   else if (kuulaika >= 55 & kuulaika < 60) {
        kkuulatulos = kuulatulos * 1.2706;
        kuupaino = 6000;
    }   else if (kuulaika >= 60 & kuulaika < 65) {
        kkuulatulos = kuulatulos * 1.2482;
        kuupaino = 5000;
    }   else if (kuulaika >= 65 & kuulaika < 70) {
        kkuulatulos = kuulatulos * 1.3607;
        kuupaino = 5000;
    }   else if (kuulaika >= 70 & kuulaika < 75) {
        kkuulatulos = kuulatulos * 1.2806;
        kuupaino = 4000;
    }   else if (kuulaika >= 75 & kuulaika < 80) {
        kkuulatulos = kuulatulos * 1.3993;
        kuupaino = 4000;
    }   else if (kuulaika >= 80 & kuulaika < 85) {
        kkuulatulos = kuulatulos * 1.5053;
        kuupaino = 3000;
    }   else if (kuulaika >= 85 & kuulaika < 90) {
        kkuulatulos = kuulatulos * 1.6866;
        kuupaino = 3000;
    }   else if (kuulaika >= 90 & kuulaika < 95) {
        kkuulatulos = kuulatulos * 1.9535;
        kuupaino = 3000;
    }   else if (kuulaika >= 95 & kuulaika < 100) {
        kkuulatulos = kuulatulos * 2.4044;
        kuupaino = 3000;
    }   else {
        kkuulatulos = kuulatulos * 3.3512;
        kuupaino = 3000;
    }    
    pisteetkuu = parseInt(51.39*((kkuulatulos-1.5) ** 1.05));
    document.getElementById("kuulatulostus").innerHTML = (" > Pisteet: "+ pisteetkuu);
    document.getElementById("kuulapaino").innerHTML = ("Kuulan paino: " + kuupaino + " g");
    return pisteetkuu;
}
function kiekkoPisteet(kiekkotulos, kiekkoika) {
    if (kiekkoika < 30 | kiekkotulos < 4.1) {
        kkiekkotulos = 4;
        kiepaino = "----";
    }   else if (kiekkoika >= 30 & kiekkoika < 35) {
        kkiekkotulos = kiekkotulos * 1;
        kiepaino = 2000; 
    }   else if (kiekkoika >= 35 & kiekkoika < 40) {
        kkiekkotulos = kiekkotulos * 1.0143;
        kiepaino = 2000;
    }   else if (kiekkoika >= 40 & kiekkoika < 45) {
        kkiekkotulos = kiekkotulos * 1.1014;
        kiepaino = 2000;
    }   else if (kiekkoika >= 45 & kiekkoika < 50) {
        kkiekkotulos = kiekkotulos * 1.2049;
        kiepaino = 2000;
    }   else if (kiekkoika >= 50 & kiekkoika < 55) {
        kkiekkotulos = kiekkotulos * 1.0218;
        kiepaino = 1500;
    }   else if (kiekkoika >= 55 & kiekkoika < 60) {
        kkiekkotulos = kiekkotulos * 1.1103;
        kiepaino = 1500;
    }   else if (kiekkoika >= 60 & kiekkoika < 65) {
        kkiekkotulos = kiekkotulos * 1.0628;
        kiepaino = 1000;
    }   else if (kiekkoika >= 65 & kiekkoika < 70) {
        kkiekkotulos = kiekkotulos * 1.1637;
        kiepaino = 1000;
    }   else if (kiekkoika >= 70 & kiekkoika < 75) {
        kkiekkotulos = kiekkotulos * 1.2781;
        kiepaino = 1000;
    }   else if (kiekkoika >= 75 & kiekkoika < 80) {
        kkiekkotulos = kiekkotulos * 1.4332;
        kiepaino = 1000;
    }   else if (kiekkoika >= 80 & kiekkoika < 85) {
        kkiekkotulos = kiekkotulos * 1.6441;
        kiepaino = 1000;
    }   else if (kiekkoika >= 85 & kiekkoika < 90) {
        kkiekkotulos = kiekkotulos * 1.9508;
        kiepaino = 1000;
    }   else if (kiekkoika >= 90 & kiekkoika < 95) {
        kkiekkotulos = kiekkotulos * 2.4402;
        kiepaino = 1000;
    }   else if (kiekkoika >= 95 & kiekkoika < 100) {
        kkiekkotulos = kiekkotulos * 3.3478;
        kiepaino = 1000;
    }   else {
        kkiekkotulos = kiekkotulos * 5.6116;
        kiepaino = 1000;
    }    
    pisteetkie = parseInt(12.91*((kkiekkotulos-4) ** 1.1));
    document.getElementById("kiekkotulostus").innerHTML = (" > Pisteet: "+ pisteetkie);
    document.getElementById("kiekkopaino").innerHTML = ("Kiekon paino: " + kiepaino + " g");
    return pisteetkie;
}
function keihasPisteet(keihastulos, keihasika) {
    if (keihasika < 30 | keihastulos < 7.12) {
        kkeihastulos = 7;
        keipaino = "----";
    }   else if (keihasika >= 30 & keihasika < 35) {
        kkeihastulos = keihastulos * 1;
        keipaino = 800; 
    }   else if (keihasika >= 35 & keihasika < 40) {
        kkeihastulos = keihastulos * 1.0126;
        keipaino = 800;
    }   else if (keihasika >= 40 & keihasika < 45) {
        kkeihastulos = keihastulos * 1.0862;
        keipaino = 800;
    }   else if (keihasika >= 45 & keihasika < 50) {
        kkeihastulos = keihastulos * 1.1716;
        keipaino = 800;
    }   else if (keihasika >= 50 & keihasika < 55) {
        kkeihastulos = keihastulos * 1.2278;
        keipaino = 700;
    }   else if (keihasika >= 55 & keihasika < 60) {
        kkeihastulos = keihastulos * 1.3380;
        keipaino = 700;
    }   else if (keihasika >= 60 & keihasika < 65) {
        kkeihastulos = keihastulos * 1.4140;
        keipaino = 600;
    }   else if (keihasika >= 65 & keihasika < 70) {
        kkeihastulos = keihastulos * 1.5620;
        keipaino = 600;
    }   else if (keihasika >= 70 & keihasika < 75) {
        kkeihastulos = keihastulos * 1.6801;
        keipaino = 500;
    }   else if (keihasika >= 75 & keihasika < 80) {
        kkeihastulos = keihastulos * 1.8932;
        keipaino = 500;
    }   else if (keihasika >= 80 & keihasika < 85) {
        kkeihastulos = keihastulos * 2.0952;
        keipaino = 400;
    }   else if (keihasika >= 85 & keihasika < 90) {
        kkeihastulos = keihastulos * 2.4378;
        keipaino = 400;
    }   else if (keihasika >= 90 & keihasika < 95) {
        kkeihastulos = keihastulos * 2.9137;
        keipaino = 400;
    }   else if (keihasika >= 95 & keihasika < 100) {
        kkeihastulos = keihastulos * 3.6206;
        keipaino = 400;
    }   else {
        kkeihastulos = keihastulos * 8.70346;
        keipaino = 400;
    }    
    pisteetkei = parseInt(10.14*((kkeihastulos-7) ** 1.08));
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
        paipaino = 15.88; 
    }   else if (painoika >= 35 & painoika < 40) {
        kpainotulos = painotulos * 1.0203;
        paipaino = 15.88;
    }   else if (painoika >= 40 & painoika < 45) {
        kpainotulos = painotulos * 1.0898;
        paipaino = 15.88;
    }   else if (painoika >= 45 & painoika < 50) {
        kpainotulos = painotulos * 1.1697;
        paipaino = 15.88;
    }   else if (painoika >= 50 & painoika < 55) {
        kpainotulos = painotulos * 1.0488;
        paipaino = 11.34;
    }   else if (painoika >= 55 & painoika < 60) {
        kpainotulos = painotulos * 1.1225;
        paipaino = 11.34;
    }   else if (painoika >= 60 & painoika < 65) {
        kpainotulos = painotulos * 1.0424;
        paipaino = 9.08;
    }   else if (painoika >= 65 & painoika < 70) {
        kpainotulos = painotulos * 1.1153;
        paipaino = 9.08;
    }   else if (painoika >= 70 & painoika < 75) {
        kpainotulos = painotulos * 1.1408;
        paipaino = 7.26;
    }   else if (painoika >= 75 & painoika < 80) {
        kpainotulos = painotulos * 1.2286;
        paipaino = 7.26;
    }   else if (painoika >= 80 & painoika < 85) {
        kpainotulos = painotulos * 1.3043;
        paipaino = 5.45;
    }   else if (painoika >= 85 & painoika < 90) {
        kpainotulos = painotulos * 1.4452;
        paipaino = 5.45;
    }   else if (painoika >= 90 & painoika < 95) {
        kpainotulos = painotulos * 1.6714;
        paipaino = 5.45;
    }   else if (painoika >= 95 & painoika < 100) {
        kpainotulos = painotulos * 2.1057;
        paipaino = 5.45;
    }   else {
        kpainotulos = painotulos * 3.2456;
        paipaino = 5.45;
    }

    pisteetpai = parseInt(47.8338*((kpainotulos-1.5) ** 1.05));
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