# REST_API-Node.js-Express-MongoDB: Elégedettségi kérdőív adatai

## REST API megvalósítása Node.js, Express és MongoDB segítségével

## Elégedettségi kérdőívre adott válaszok adatbázisba mentésére és kiolvasására alkalmas API.
Két végpontot tartalmaz:
  1. POST /kerdoiv/bekuldes
	Payload json formában tartalmazza a szolgáltatás értékelését: minoseg, gyorsaság, ár
	- Status: 400 és hibaüzenet json formában, ha az adatok hiányoznak, vagy nem 1-5 közé esnek
	- Siker esetén visszaadja a lementett adatot (_id -vel együtt)
  2. GET /kerdoiv/letoltes
	Visszaadja az adatbázis teljes tartalmát json formában

## FONTOS:
A .env file nem része a repository-nak, mivel ez tartalmazza majd a titkos adatokat, ebben az
esetben a connection string-et. A fejlesztés során MongoDB Atlas cloud database-t használtam.

Megadása:
	CONNECTION_STRING=<MongoDB eléréséhez szükséges connection string>

## HASZNÁLATA (git clone után):
Szükséges packege-ek telepítése: npm install	

Development módban való indítása:  npm run dev			

   Environmentben, vagy .env file-ban megadható a SERVER_PORT=<használni kívánt port száma>	
   
   Ha nincs megadva, akkor a használt port száma: 12345 (pl. localhost:12345/kerdoiv/bekuldes)
