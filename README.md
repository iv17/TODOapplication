# TODOapplication

TODO aplikacija predstavlja jednostavan sistem za vođenje dnevnih obaveza. Omogućava korisniku dodavanje i kompletiranje TODO itema, koji predstavljaju dnevne obaveze. Takođe, aplikacija korisniku ispisuje motivacioni citat svaki put kad se učita stranica.


- [x] **Zadatak 1** (branch task1)

Aplikaciju je potrebno implementirati korišćenjem ReactJS i Redux biblioteke za in-memory store.

- [x] **Zadatak 2** (branch task2)

Potrebno je implementirati API aplikaciju korišćenjem .NET standard framework-a, koja podržava potrebne CRUD operacije i koristi sesiju za čuvanje podataka. U okviru Redux-a kreirati potrebne akcije za komunikaciju sa API aplikacijom.

**NAPOMENA:** Nakon sto se pokrene server, kreira se sessionID (vrednost je prikazana u URL-u, npr: (S(grbatn5bf5mhesxsqbqlppzt)) ). Tu vrednost kopirati u client/src/actions/index.js.

- [x] **Zadatak 3** (branch task3)

Potrebno je kreirati SQL Server bazu podataka sa potrebnim entitetima i uvezati je sa API aplikacijom. Podatke na API aplikaciji više ne čuvati u sesiji, već u bazi podataka.

- [x] **Zadatak 4** (branch task4)

API aplikaciju implementirati u “layered” arhitekturi, sa slojevima za koje vi mislite da su potrebni.

- [x] **Zadatak 5** (branch task5)

Potrebno je implementirati Dependency Injection u API aplikaciji, uz oslonac na biblioteku koju sami odaberete (Autofac, Castle Windsor itd).
