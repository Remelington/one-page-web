## **Název projektu**
Vizitka / Osobní webové portfolio

## **Žák**
Josef Michalec

## **Stručný popis tématu (3–5 vět)**
Jednoduchá responzivní jedno­stránková vizitka/portfolio s temným atmosférickým designem. Stránka slouží k rychlému představení autora, jeho zájmů a technických dovedností. Obsahuje interaktivní prvky (Kurzor s následovníkem, dynamické načítání dat přes AJAX/fetch z vlastního backendu). Cílem je vytvořit moderní, přehlednou a technicky zajímavou prezentaci, která ukazuje jak design, tak programování.

## **Cílová skupina**
- Potenciální zaměstnavatelé a klienti v IT oblasti
- Lidé se zájmem o webový vývoj, technologie a kreativní projekty
- Širší komunita (přátelé, spolužáci, sociální sítě)

## **Návrh obsahových sekcí**

* **Úvodní sekce**  
  Velký nadpis.

* **O mně**  
  Stručné představení, dynamicky načtený obsah přes AJAX z vlastního backendu.

* **Dovednosti / Zajímavosti**  
  Seznam technických a osobních dovedností / zájmů.

* **Interaktivní prvky**  
  Kurzor s následujícím objektem, případně další malé animace.

* **Kontakt**  
  Kontaktní údaje, odkazy na sociální sítě / profily, případně jednoduchý formulář.

* **Footer**  
  Copyright, drobná poznámka, případně odkaz na repozitář nebo další materiály.

## **Návrh designu / wireframe**

* Tmavý minimalistický styl s výraznými akcenty  
* Tmavá paleta barev s jedním dominantním akcentem  
* Kombinace speciálních fontů pro nadpisy a čitelného textu pro obsah  
* Responzivní layout – mobile-first přístup  
* Jemné interaktivní prvky a animace pro osobitost

## **Použité technologie**

* **Frontend:** HTML5, CSS3 (vlastní styly, keyframes), JavaScript (vanilla – fetch, event listeners, typewriter efekt, custom cursor s rotací)

* **Interaktivní prvky:**  
  - Kurzor s následujícím objektem 
  - AJAX / fetch pro načítání dat bez refresh stránky

* **Backend:** Node.js + Express (jednoduchý lokální server na portu 3001)

* **Data:** JSON soubor (načítán přes fetch z endpointu /api/about)

* **Verzování:** GitHub

* **Vývojové nástroje:** VS Code + Live Server extension (lokální http server)
