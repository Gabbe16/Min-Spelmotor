# Utvärdering av spelet

## Vad 
Spelet som jag har gjort är en 2d sidescroller med temat halloween. Du är en unge som hoppar och tar sönder andras pumpor eftersom man blev nekad till godis på halloween och fick mjuka mandariner istället. Man får fler poäng desto mer pumpor man tar sönder men man ska akta sig för grannen som är i fönsterna innan man hoppar på pumpan för då är det "game over" eftersom man blir tagen.

Kraven som jag själv satte på spelet och det spelet skulle innehålla var följande:

* Grafik
* Ljud, bakgrundsmusik
* Player controls för att gå vänster, höger och att kunna hoppa 
* Gravity för att landa på marken efter man hoppat
* Två typer av enemies, Pumpkins och Neighbours

## Hur
Det sättet jag arbetat på är objektorienterad programmering genom att strukturera koden runt objekt. Jag har gjort klasser för de olika delar inom spelet som Camera, Inputhandler, player och mer men i dessa klasser finns det även en konstruktor som är ritningen för hur man gör detta objekt. När jag väl gjort klart dessa klasser gjorde jag instanser av dessa i game klassen där de ska användas och sedan ritas dem ut på en canvas så att den som spelar ser det som behövs för att spelet ska fungera korrekt som t.ex enemies, spelaren eller världen.  

## Vad gick bra?
Det som gick bra var att göra klasser och fixa deras konstruktorer och därefter instansiera dem och få objekt som går att använda till spelet. Det gick även felfritt att få grafik från estet och sedan föra in det i olika lager. Till sist var det spel mekaniken med kontrollerna, gravitation och enemies, detta gick utmärkt och jag anser att detta gick bra eftersom jag lärde mig mycket om objektorienterad programmering under projektets gång.

## Vad gick mindre bra?
Det som gick mindre bra med detta projekt var att följa de olika stegen som fanns i game-base dokumentationen som vi fick. Det tog ett litet längre tag att lära mig om dessa olika steg och sedan använda dem själv med min egna spelmotor. Jag gjorde även några skrivfel med namn på variabler men jag anser att detta är ett mindre problem och går relativt fort att fixa. Dessa två problem var det problemen som gjorde att det gick mindre bra och utöver det var det nästan inget som gick mindre bra.

## Varför
Varför vissa saker gick bra var på grund av att jag har lärt mig mycket om klasser och objekt men även att jag hade en bra planering från början som jag följde. Det som gjorde att saker gick mindre bra var dels mitt egna fel med fel variabel namn på några saker men också att game-base dokumentationen tog för lång tid för mig att förstå mig på och använda i min egna spelmotor.

## Vad har jag lärt mig
Jag har lärt mig mer om objektorienterad programmering (OOP) och varför strukturen av min kod är viktig och hur jag använder mig av klasser och objekt för att göra detta. Detta är Speciellt viktigt för större och längre projekt som spel projektet som vi har gjort. Detta hör även ihop med själva spelmotorn i sig där jag har lärt mig hur en spelmotor skulle kunna se ut och fungera i javascript. Till sist vad det jag lärde mig mest om, metoder/funktioner för klasser och hur jag kan göra egna för mina enemies eller spelaren, ett exempel på detta skulla vara timern där Neighbours kommer fram och försvinner i intervall.

