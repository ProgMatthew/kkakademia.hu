function loadBtns() {
    var mainBtnData = ["Keresztény Kultúrális Akadémia", "index.html"];
    var btnsData = [
        ["Főoldal", "index.html"],
        ["Aktuális", "aktualis.html"],
        ["Programszervezés", "programszervezes.html"],
        ["Cornelius-díj", "cornelius_dij.html"],
        ["Beszámolók", "beszamolok.html"],
        ["Ifjúsági erkölcstan", "ifjusagi_erkolcstan.html"]
    ];

    var btnsDiv = document.createElement("div");
    btnsDiv.setAttribute("id", "btnsDiv");
    document.body.appendChild(btnsDiv);

    var mainBtn = document.createElement("a");
    mainBtn.textContent = mainBtnData[0];
    mainBtn.setAttribute("id", "mainBtn");
    mainBtn.setAttribute("href", mainBtnData[1]);
    btnsDiv.appendChild(mainBtn);

    var littleBtnsDiv = document.createElement("div");
    littleBtnsDiv.setAttribute("id", "littleBtnsDiv");
    btnsDiv.appendChild(littleBtnsDiv);

    for (var btn of btnsData) {
        var btnA = document.createElement("a");
        btnA.textContent = btn[0];
        btnA.classList.add("btnA");
        btnA.setAttribute("href", btn[1]);
        littleBtnsDiv.appendChild(btnA);
    }
}

function loadBigMap() {
    var mainDiv = document.getElementById("mainDiv");

    var mapDiv = document.createElement("div");
    mapDiv.classList.add("bigMapResponsive");
    mainDiv.appendChild(mapDiv);

    var mapFrame = document.createElement("iframe");
    mapFrame.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1629.5824802227587!2d19.096805061233507!3d47.52230972403983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb68af9548641c4f3!2zQnVkYXBlc3QtSGVybWluYW1lesWRaSBTemVudGzDqWxlayBQbMOpYsOhbmlh!5e1!3m2!1shu!2shu!4v1668519237615!5m2!1shu!2shu");
    mapFrame.setAttribute("frameborder", "0");
    mapFrame.setAttribute("style", "border: 0");
    mapFrame.allowfullscreen
    mapDiv.appendChild(mapFrame);
}


function loadTable(headerData, tableData, centerList=NaN, tableTitle=NaN, tableWidth=NaN) {
    var mainDiv = document.getElementById("mainDiv");
    if (tableTitle) {
        var tableTitleH3 = document.createElement("h3");
        tableTitleH3.setAttribute("id", "tableTitle");
        tableTitleH3.style.marginTop = ".1vw";
        tableTitleH3.textContent = tableTitle;
        mainDiv.appendChild(tableTitleH3)
    }
    var table = document.createElement("table");
    if (tableWidth) {
        table.style.width = tableWidth;
        table.style.margin = "auto";
    }
    mainDiv.appendChild(table);

    var tr =  document.createElement("tr");
    table.appendChild(tr);
    for (title of headerData) {
        var th = document.createElement("th");
        th.textContent = title;
        tr.appendChild(th);
    }

    if (!centerList) {
        loadTableWithoutCenter(table, tableData)
    } else {
        loadTableWithCenter(table, tableData, centerList)
    }
}


function loadTableWithoutCenter(table, tableData) {
    for (line of tableData) {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (text of line) {
            var td = document.createElement("td");
            td.textContent = text;
            tr.appendChild(td);
        }
    }
}


function loadTableWithCenter(table, tableData, centerList) {
    for (line of tableData) {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var i = 0; i < line.length; i++) {
            var td = document.createElement("td");
            td.textContent = line[i];
            if (centerList.includes(i))
                td.setAttribute("style", "text-align: center");
            tr.appendChild(td);
        }
    }
}


function loadAboutData() {
    var mainDiv = document.getElementById("mainDiv");

    var aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("id", "aboutDiv");
    mainDiv.appendChild(aboutDiv);

    var aboutData = [
        ["church", "Budapest-Herminamezői Szentlélek Plébánia"],
        ["address", "Cím:"],
        ["email", "Email:"],
        ["telephone", "Telefonszám: +36 1 251 1359"],
        ["fax", "Fax: 06 1 221 4864"],
        ["bill", "Bankszámlaszám: 11714006-20150121 (OTP)"]
    ];

    for (data of aboutData) {
        var aboutLineDiv = document.createElement("div");
        aboutLineDiv.classList.add("aboutLineDiv");
        aboutDiv.appendChild(aboutLineDiv);

        var aboutIcon = document.createElement("img");
        aboutIcon.classList.add("aboutIcon");
        aboutIcon.setAttribute("src", "Images/icons/" + data[0] + ".png");
        aboutLineDiv.appendChild(aboutIcon);

        var aboutP = document.createElement("p");
        aboutP.classList.add("aboutP");
        aboutP.textContent = data[1];
        aboutLineDiv.append(aboutP);

        if (data[0] == "address") {
            var addressA = document.createElement("a");
            addressA.textContent = "1142 Budapest, Kassai tér 2.";
            address = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1629.5824802227587!2d19.096805061233507!3d47.52230972403983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb68af9548641c4f3!2zQnVkYXBlc3QtSGVybWluYW1lesWRaSBTemVudGzDqWxlayBQbMOpYsOhbmlh!5e1!3m2!1shu!2shu!4v1668519237615!5m2!1shu!2shu"
            addressA.setAttribute("href", address);
            addressA.setAttribute("target", "_blank");
            addressA.classList.add("aTag");
            aboutLineDiv.appendChild(addressA);
        } else if (data[0] == "email") {
            var emailA = document.createElement("a");
            email = "kassaiter1@gmail.com"
            emailA.textContent = email;
            emailA.classList.add("aTag");
            emailA.setAttribute("href", "mailto: " + email);
            aboutLineDiv.appendChild(emailA);
        }
    }
}


function loadChurchMates() {
    var mainDiv = document.getElementById("mainDiv");
    mateData = [
        ["Óbert János", "Közgazdász, nős, két leánya van. Szereti a német klasszikus és egyházi zenét, az olasz operát, de a színvonalas könnyűzenét is. Szabadidejében szívesen zongorázik, szépirodalmat, verseket olvas. Kedves időtöltése az egyháztörténelem tanulmányozása, a Keresztény Kulturális Akadémia jogi és pénzügyeinek gondozása, plébániánk és a templom funkcionális támogatása. Az előző két egyházközségi cikluson át is a képviselőtestület elnöki tisztségét töltötte be.", "1.", "+36 30 769 1354, +36 1 252 6942, Balatonalmádi: +36 88 798 751", "obert.janos@gmail.com", "1145, Budapest, Uzsoki u. 38. "],
        ["Dr. Szalay Kornél", "Egykori bencés diák, aki most ügyvédként a plébánia és a Keresztény Kulturális Akadémia jogi kérdéseiben, feladataiban fő segítségünk. Az arca kevésbé, de a hangja mindenképp ismerős lehet, mivel ő a vasárnap esti kántorunk és énekkarunk vezetője is. Jelenleg még nőtlen fiatalember teológus végzettséggel is rendelkezik.", "2.", "+36 70  778 8544", "szalaykg@gmail.com", "-"],
        ["László István", "Nős, 1 kisfiú édesapja, programtervező matematikus. András atya egykori, balassagyarmati kisdiákja volt, aki itt, Zuglóban felnőttként csatlakozott a kassai téri közösséghez. A Biblia Kör, a Fiatal Házasok közössége és a Betlehem Lovagjai férfikör lelkes tagja, egyúttal bármilyen aktuális feladatban kézsséges segítőnk.", "3.", "+36 30 475 8024", "laszloistvan.kassaiter@gmail.com", "-"],
        ["Bihary Zoltán", "Fiatal családapa, műszaki menedzser. A templomunk körzetének önkormányzati képviselője. Herminamezőn lakik. Eltökélt szándéka, hogy a lakókörnyezetében lévőkkel aktívan tudja tartani a kapcsolatot. Feleségével együtt lelkesen részt vesznek fiatal házas csoportunk tevékenységében is.", "4.", "-", "biharyzoltan.kassaiter@gmail.com", "-"],
        ["Gáspár Ferencné", "", "5.", "+36 20 823 0756, +36 1 221 7087", "gasparrita.kassaiter@gmail.com", "1149, Budapest, Nagy Lajos kir. u. 203. III. em. 11."],
        ["Furulyás Gábor", "Végzettsége szerint műszaki tanár és gépész üzemmérnök. A “Betlehem lovagjai férfikör” tagjaként részt vesz a Betlehem, a názáreti ház, a szent sír építésében és bontásában, a körmenetek alkalmával a baldahin hordozásában, s minthogy ő sekrestyésünk férje, gyakran spontán módon segít a templom technikai problémáinak elhárításában.", "6.", "+36 20 519 9278", "furulyasgabor.kassaiter@gmail.com", "1145, Budapest, Amerikai u. 61. I. em. 9. "],
        ["Kiss Máté", "Nemzetközi gazdálkodás szakon szerzett diplomát, jelenleg mesterfokú tanulmányait folytatja logisztikai menedzser szakon, édesanyja plébániai irodavezetőnk.", "7.", "+36 20 352 4961", "-", "Budapest, Ilosvai Selymes u. 92."],
        ["Vadászi Éva", "Évi néni a fő hitoktatónk.", "8.", "+36 20 3985 292, +36 1 220 3456", "vadaszieva.kassaiter@gmail.com", "1149, Budapest, Nagy Lajos király útja 224. I. 3. "],
        ["Dióspatonyi Márta", "Vendéglátó és teológiai végzettséggel csaknem két évtizede a Magyar Katolikus Püspöki Konferencia Titkárságán dolgozik. Felnőtt foglalkozásaink, rendezvényeink lelkes résztvevője, énekkarunk tagja, a Szentlélek Híradó helytörténeti cikkeinek szerzője.", "9.", "+36 30 751 2995, +36 30 343 1588", "diospatonyi.marta@gmail.com", "1145, Budapest, Columbus u. 52/a"],
        ["Horinka Gábor", "Húsz éve házas, jogász és szociológus az EMMI Kultúráért Felelős Államtitkárságán. Egyházközségünk életében is a kulturális és szellemmi programok lelkes támogatója, közösségépítő tagja.", "10.", "-", "horinkag@gmail.com", "-"],
        ["Dr. Ritter Eszter", "", "11.", "+36 20 228 2552", "dr.ritter.eszter@gmail.com", "-"],
        ["Molnár Zoltán", "", "12.", "+36 30 968 0187", "molnarzoltan000@gmail.com", "1149, Budapest, Nagy Lajos király útja 212-214. 4. em. 2."],
        ["Bíró Sándor", "", "13.", "+36 20 275 9617", "birosasa@yahoo.com", "1145, Budapest, Róna u. 205. A ép. 1. em. 3."],
        ["Bánhegyi Szabolcs István", "", "14.", "+36 20 438 2235", "sz.banhegyi@gmail.com", "1146, Budapest, Thököly u. 114/a. 2.1"],
        ["Lorch Katalin", "", "15.", "+36 30 934 6162", "entrancemanagementkft@gmail.com", "Kerékgyártó u. 9.b."],
        ["Zajka Gabriella", "", "16.", "+36 30 576 0888", "zajkagabriella@gmail.com", "-"],
        ["Borissza Gyula ", "", "17.", "+36 20 377 3155", "borisszagyula.kassaiter@gmail.com", "-"],
        ["Kiss János", "", "18.", "+36 20 921 1574", "-", "Budapest, Ilosvai Selymes u. 92."],
        ["Flaisz Attila", "", "19.", "+36 20 966 3978", "aflaisz@gmail.com", "Budapest, Laky Adolf u. 71."],
        ["Szántó Balázs", "", "20.", "+36 20 573 8385", "szanto.balazs@gmail.com", "Alsószentiván, 7012, Honvéd u. 13."]
    ];
    var dataList = ["Sorszám: ", "Mobil: ", "Email: ", "Cím: "];

    for (mate of mateData) {
        var nameH4 = document.createElement("h4");
        nameH4.textContent = mate[0];
        mainDiv.appendChild(nameH4);

        if (mate[1]) {
            var dataP = document.createElement("p");
            dataP.style.margin = 0;
            dataP.textContent = mate[1];
            mainDiv.appendChild(dataP);
        }

        for (var i = 0; i < dataList.length; i++) {
            var dataP = document.createElement("p");
            dataP.style.margin = 0;
            var dataTitle = dataList[i].bold()
            dataP.innerHTML = dataTitle + mate[i + 2];
            mainDiv.appendChild(dataP);
        }
    }
}


function loadRosaries() {
    var rosaryData = [
        ["Az örvendetes olvasó titkai", "1. Akit te, Szent Szűz a Szentlélektől fogantál. (Alázat)", "2. Akit te, Szent Szűz Erzsébetet látogatván hordoztál. (Szeretet)", "3. Akit te, Szent Szűz a világra szültél. (Szegénység)", "4. Akit te, Szent Szűz a templomban bemutattál. (Engedelmesség)", "5. Akit te, Szent Szűz a templomban megtaláltál. (Jámborság)"],
        ["A fájdalmas olvasó titkai", "1. Aki érettünk vérrel verítékezett. (Bűnbánat)", "2. Akit érettünk megostoroztak. (Tisztaság)", "3. Akit érettünk tövissel koronáztak. (Bátorság)", "4. Aki érettünk a keresztet hordozta. (Türelem)", "5. Akit érettünk keresztre feszítettek. (Önmegtagadás)"],
        ["A dicsőséges olvasó titkai", "1. Aki a halálból feltámadt. (Hit)", "2. Aki a mennybe felment. (Remény)", "3. Aki nekünk a Szentlelket elküldte. (Szeretet)", "4. Aki téged, Szent Szűz a mennybe fölvett. (Örök boldogság)", "5. Aki téged, Szent Szűz a mennyben megkoronázott. (Mária tisztelete)"],
        ["A világosság titkai", "1. Aki a Jordán vizében megkeresztelkedett.", "2. Aki a kánai menyegzőn kinyilvánította isteni erejét.", "3. Aki meghirdette Isten országát.", "4. Aki a Tábor hegyén megmutatta isteni dicsőségét.", "5. Aki az Eucharisztiában nekünk adta önmagát."],
        ["Rózsafüzér ígéretek", "1. Aki a rózsafüzér imádkozásával hűségesen szolgál, jelentős kegyelmekben fog részesülni.", "2. Különleges védelmem és legnagyobb kegyelmeket ígérem azoknak, akik a rózsafüzért imádkozzák.", "3. A rózsafüzér erőteljes védelem lesz a pokollal szemben. Felőrli az erkölcstelenséget, csökkenti a bűnt, és legyőzi az eretnekséget.", "4. Erényességet és jó munkát nyújt a gyarapodáshoz; a lélek bőséges isteni irgalomban fog részesülni; az emberek szívét visszahúzza a világ hiúságainak szeretetétől, és örökkévaló dolgok iránti vágyakozásra emeli. A lelkek ezáltal megtisztulnak.", "5. Az a lélek, amelyik a rózsafüzér imádkozásával rám bízza magát, nem fog elveszni.", "6. Aki őszintén imádkozza a rózsafüzért, fontolóra veszi és alkalmazza magára a szent hittitkokat, azt sosem győzi le a szerencsétlenség. Isten nem fogja büntetni az igazságszolgáltatásakor, nem fognak elveszni egy felkészületlen halállal; ha igazságosak, akkor Isten kegyelmében maradnak és méltók lesznek az örök életre.", "7. Aki igaz áhítattal imádkozza a rózsafüzért, nem fog az Egyház oltáriszentsége nélkül meghalni.", "8. Akik hűen imádkozzák a rózsafüzért, azok életükben és halálukban Isten világosságában és bőséges kegyelmében lesznek; haláluk pillanatában pedig a paradicsomban a szentek érdemében részesülnek.", "9. A tisztítótűztől megszabadítom azokat, akik hűek voltak a rózsafüzérhez.", "10. A rózsafüzér hűséges gyermekei nagy dicsőségben fognak részesülni a mennyben.", "11. Mindent meg fogsz kapni, amit a rózsafüzér imádkozásakor kérsz tőlem.", "12. Akik terjesztik a szent rózsafüzért, azokat szükségükben segíteni fogom.", "13. Isteni fiamnál elértem, hogy a rózsafüzér pártolóinak életükben és haláluk órájában közbenjárójuk lesz a teljes égi törvényszéken.", "14. Akik imádkozzák a rózsafüzért, azok gyermekeim, és egyetlen fiamnak, Jézus Krisztusnak testvérei."]
    ];

    var mainDiv = document.getElementById("mainDiv");
    for (rosary of rosaryData) {
        var titleH4 = document.createElement("h4");
        titleH4.textContent = rosary[0];
        mainDiv.appendChild(titleH4);
        for (var i = 1; i < rosary.length; i++) {
            var titleP = document.createElement("p");
            titleP.textContent = rosary[i];
            titleP.setAttribute("style", "margin: 0");
            mainDiv.appendChild(titleP);
        }
    }
}


function loadFooter() {
    var footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footerDiv");
    document.body.appendChild(footerDiv);
    footerDiv.innerHTML = '\
        <div class="footerSubDiv" style="margin-left: 7vw"> \
            <p class="footerTitle">Elérhetőségeink</p> \
            <p class="footerSubTitle" style="margin: .7vw 0 .5vw 0;">Keresztény Kulturális Akadémia Alapítvány</p> \
            <p class="footerSubTitle">Levélcím:</p> \
            <a href="https://www.google.com/maps/place/Budapest-Herminamez%C5%91i+Szentl%C3%A9lek+Pl%C3%A9b%C3%A1nia/@47.522522,19.095883,2301m/data=!3m1!1e3!4m5!3m4!1s0x0:0xb68af9548641c4f3!8m2!3d47.5225372!4d19.0958802?hl=hu" target="_blank">Keresztény Kulturális Akadémia Alapítvány 1142 Budapest, Kassai tér 2.</a> \
            <p class="footerSubTitle">Email:</p> \
            <a href="mailto:kerkultakademia@gmail.com">kerkultakademia@gmail.com</a> \
        </div> \
        \
        <div class="footerSubDiv" style="margin-left: 9vw"> \
            <p class="footerTitle">Fő támogatóink</p> \
            <p class="footerSubTitle" style="margin: .7vw 0 1.1vw 0">Magyar Művészeti Akadémia</p> \
            <p class="footerSubTitle" style="margin: 0 0 1.1vw 0">Emberi Erőforrások Minisztériuma</p> \
            <a href="https://2015-2019.kormany.hu/hu/emberi-eroforrasok-miniszteriuma" target="_blank" style="display: contents;"> \
                <img src="Images/footer/eem.png" style="margin: 0 auto 0 0;"> \
            </a> \
        </div> \
        \
        <div class="footerSubDiv" style="margin-left: 3vw"> \
            <p class="footerTitle">Hasznos linkek</p> \
            <a href="https://katolikus.hu/" target="_blank" style="margin-top: .5vw;">Magyar Művészeti Akadémia</a> \
            <a href="https://www.esztergomi-ersekseg.hu/" target="_blank">Esztergom-Budapesti Főegyházmegye</a> \
            <a href="https://kassaiter.hu/" target="_blank">Budapest-Herminamezői Szentlélek Plébánia</a> \
            <a href="https://andrasatya.blog.hu/" target="_blank">Szem, lélek, értelem blog.</a> \
        </div> ';
}