# Planering

## Målgrupp och syfte
Spelet är en 2d side-scroller där du är en unge som hoppar och tar sönder andras pumpor eftersom man blev nekad till godis på halloween och fick mjuka mandariner istället. Man får fler poäng desto mer pumpor man tar sönder men man ska akta sig för grannen som är i fönsterna innan man hoppar på pumpan för då är det "game over" eftersom man blir tagen. Temat är halloween och målgruppen för spelet kommer att vara dem som är intresserad av side-scrollers och har stort intresse för halloween och spel i allmänheten.

## Innehåll
Spelet i sig ska innehålla följande:

* Grafik
* Ljud, bakgrundsmusik
* Player controls för att gå vänster och höger 
* Gravity för att hoppa 
* Pumpor (Typ av enemy)
* Grannar i husen (Typ av enemy)

Allt detta ska uppnås med hjälp av klasser och funktioner. Pumporna är en typ av enemy som kommer kunna förstöras och öka score då spelaren hoppar på toppen av pumpan medans grannarna kommer vara en annan typ som kollar ut genom fönstren då och då och ifall spelar hoppar på pumpan medans grannen tittar kommer man att förlora. Grafik kommer att sakta men säkert föras in med layers och ritas ut i olika ordningar för att få best effekt.

Jag möter målgruppen genom att göra spelet så bra som möjligt så att det passar in med halloween temat samtidigt som när jag får grafiken kan jag ändra placeholders så att grafiken även passar in tydligt och signalerar halloween till den som spelar mitt spel.

## Design/Struktur
Delarna som jag behöver är en enemy klass och sedan använda mig av extends för att göra grannarna och pumporna. För ljud kommer jag använda dokumentationen i Game-base och till sist för att fixa grafiken kommer jag också använda mig av Sprite-Animation steget i Game-base. Detta kommer alltså att göras i olika klasser och sedan användas i game för att få allt att fungera tillsammans. 

## Ordningsplanering
I följande ordning kommer jag att arbeta med spelet från och med nu:

* Fixa klart pumporna så att de ökar score och försvinner när spelaren hoppar på dem
* Fixa klassen grannar och deras funktioner med game over mekaniken och intervall där dem "tittar ut"
* Föra in grafiken
* Föra in bakgrundsljud

