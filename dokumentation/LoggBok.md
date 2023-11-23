## Vecka 41 Måndag (2023-10-09)

Idag har jag gjort planeringen och mål för spelet och lagt till denna loggbok. Jag har även gjort Player klassen och sedan importerat den i Game.js för att testa att den fungerar

## Vecka 41 Tisdag (2023-10-10)

Idag är både steg 4-5 klara med InputHandler och Projektiler

Jag gjorde först en ny klass som hette InputHandler som i sig skulle hantera olika inputs och sedan flytta på kuben när jag trycker på tangenterna. Därefter gjorde jag projektiler som skjöts från kuben med knappen s ifrån inputhandler

Jag har haft lite problem med att skicka parametrar till draw eftersom jag hade glömt att titta efter parametrar när jag felsökte. 

## Vecka 41 Torsdag (2023-10-12)

Idag påbörjade jag med att lägga till mario liknande platformar genom att göra en klass för Platform och sedan använda den i game genom att göra en array med en massa nya platforms med olika x och y koordinater, widths och heights. Därefter ritas alla ut med hjälp av en foreach-loop som går igenom arrayen med platforms och sedan ritar ut dem.

## Vecka 42 Måndag (2023-10-16)

Sist gjorde jag platform klassen och använde den i game. Det gick bra förutom att jag inte kunde testa den och se att den fungerade eftersom jag var på en lånedator. Idag ska jag testa och se att platforms fungerar som dem ska och därefter möjligtvis fixa så att kuben kan hoppa med gravitation. Jag behehöver lära mig mer om klasser och hur dem fungerar men också deras användning så att det inte blir en massa slarvfel. Just nu tror jag inte att jag behöver hjälp från Jens.

Idag har jag fixat platforms och sett till att den klassen fungerar att använda. Därefter har jag försökt fixat en hopp-metod i player klassen men har problem med gravitationen och grounded eftersom kuben flyger rakt nedåt när jag försöker hoppa eller vara på marken.

## Vecka 42 Tisdag (2023-10-17)

Idag har jag gjort steg 6 och 7.

Både UserInterface och enemies är klara och går att fortsätta ändra i. Jag har lagt till några egna saker i dessa som i ui har jag lagt till något som kan hålla koll på score och i enemies har jag gjort att man måste sätta x och y på grund av att det kommer att vara pumpor som är stilla. Jag måste däremot fortfarande ändra mer på vart enemies spawnar och hur ofta. Samtidigt behöver jag göra en ny function för collisions så att dem försvinner när man hoppar på pumporna.

Det sista jag gjort idag var att ta bort den gamla koden för collisions med platformar och även gravitationen eftersom jag hade missat alldeles för mycket och hoppat fram för långt. Platform klassen är kvar och fortfarande utritade men har inga collisions. Nästa steg som är 8 och även mario delen handlar om collisions + hopp och då kommer jag att fixa detta så att det fungerar att både hoppa, landa på platforms och landa på pumpor så att dem försvinner.

## Vecka 43 Måndag (2023-10-23)

Idag har jag äntligen fixat så att man kan hoppa och att det finns gravitation.

Problemet jag hade förut var att jag inte hade någon platform som agerade som en typ av mark som gjorde att jag var grounded. Nu har jag lagt till platform marken och lagt till kollisioner för att därefter nu kunna hoppa och sedan falla ned. Detta tog ett tag eftersom jag borde insett det tidigare men det gav mig tiden att fixa ui och enemies.

## Vecka 43 Tisdag (2023-10-24)

Idag har jag fixat varierande saker som ui, enemies och en kamera som följer spelaren.

I ui har jag fixat så att score ligger under tiden istället för att texten är bredvid varandra. På enemies har jag fixat så att dem inte buggar fast i marken och till sist har jag följt dokumentationen för mario-kamera.md för att få en fungerande kamera som följer spelaren

## Vecka 45 Tisdag (2023-11-07)

Idag har jag fixat klart pumporna så att det går att hoppa på dem och öka poängen med hjälp av en collisionCheck mellan spelaren och pumpan. Därefter gjorde jag en neighbour klass som är en till typ av enemy som har x och y koordinater. Nästa gång kommer jag fixa att neighbours kan spawnas in och ifall man hoppar på en pumpa när dem kollar så aktiveras gameover, jag kan även fixat att efter x antal score så vinner man också för då har jag win condition och hur man förlorar.

## Vecka 46 Torsdag (2023-11-16)

Idag har jag gjort klart neighbour klassen så att deras game over mekanik fungerar korrekt med att när dem är uppe och man hoppar på pumpan så är det game over och när dem är borta får man score och kan fortsätta. Detta gjordes med en typ av flagga som jag kallade för activeNeighbours som sattes till false automatiskt och när neighbours spawnades in blev den true. Därefter var det bara att koppla denna flagga till hoppmekaniken som kollar score.

## Vecka 47 Tisdag (2023-11-21)

Idag har jag fört in både foreground och middleground samtidigt som jag har tittat på hur man gör sprite animationer. Jag gjorde detta genom att göra på samma sätt jag förde in sky_image alltså himlen med att lägga till två fler lager i Layers[]. Jag hade lite problem med bild sökvägarna men jag fixade det tillslut eftersom jag hade skrivfel här och där i min kod. Därefter förde jag in sprite bilderna och nu ska jag bara börja göra klart sprites.

## Vecka 47 Torsdag (2023-11-23)

Idag har jag fört in playerSprite och försökt fixa mitt spel med alla problem som detta medförde. Jag kunde inte fixa alla problem idag men jag är nästan klar med det att fixa det. Jag kommer nog mest troligt behöva hjälp med det sista för att spelet ska fungera korrekt. Det sista efter det är bara att föra in sprites för pumporna och neighbours.