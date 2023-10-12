## Vecka 41 Måndag (2023-10-09)

Idag har jag gjort planeringen och mål för spelet och lagt till denna loggbok. Jag har även gjort Player klassen och sedan importerat den i Game.js för att testa att den fungerar

## Vecka 41 Tisdag (2023-10-10)

Idag är både steg 4-5 klara med InputHandler och Projektiler

Jag gjorde först en ny klass som hette InputHandler som i sig skulle hantera olika inputs och sedan flytta på kuben när jag trycker på tangenterna. Därefter gjorde jag projektiler som skjöts från kuben med knappen s ifrån inputhandler

Jag har haft lite problem med att skicka parametrar till draw eftersom jag hade glömt att titta efter parametrar när jag felsökte. 

## Vecka 41 Torsdag (2023-10-12)

Idag påbörjade jag med att lägga till mario liknande platformar genom att göra en klass för Platform och sedan använda den i game genom att göra en array med en massa nya platforms med olika x och y koordinater, widths och heights. Därefter ritas alla ut med hjälp av en foreach-loop som går igenom arrayen med platforms och sedan ritar ut dem.