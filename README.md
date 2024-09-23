# Like/Dislike Honden App - JavaScript

## Omschrijving

In deze opdracht maak ik een like/dislike-app voor hondenafbeeldingen. De afbeeldingen worden opgehaald van een API, en gebruikers kunnen de afbeelding liken of disliken. De app maakt gebruik van **localStorage** om het aantal likes en dislikes op te slaan, zodat de informatie bewaard blijft, zelfs als de pagina wordt vernieuwd.

We gebruiken de Dog API om elke keer een nieuwe hondenafbeelding te laden wanneer de gebruiker op de like- of dislike-knop klikt. Dit project combineert de technieken die ik heb geleerd, zoals het omgaan met **localStorage** en **HTML events**.

## Functionaliteiten

- **Titel**: Er is een h1-element toegevoegd als titel van de pagina.
- **Afbeelding**: De afbeelding van een hond wordt opgehaald van de [Dog API](https://dog.ceo/dog-api/documentation/).
- **Like knop**: Een knop waarmee je kunt aangeven dat je de afbeelding leuk vindt.
- **Dislike knop**: Een knop waarmee je kunt aangeven dat je de afbeelding niet leuk vindt.
- **Like counter**: Houdt het aantal likes bij en slaat dit op in localStorage.
- **Dislike counter**: Houdt het aantal dislikes bij en slaat dit op in localStorage.

## Leerdoelen

- Het toepassen van **localStorage** om variabelen tussen sessies op te slaan en persistentie te creëren in een webapplicatie.
- Het werken met **HTML events** om interactie toe te voegen aan de pagina.

## Verwachte uitkomst

Wanneer de app draait, kan de gebruiker hondenafbeeldingen liken of disliken. Het aantal likes en dislikes wordt opgeslagen in de localStorage, zodat deze informatie behouden blijft, zelfs na het herladen van de pagina. Na elke interactie (like/dislike) zal de afbeelding worden vernieuwd met een nieuwe hondenfoto van de API.

## Nakijkcriteria

- Een afbeelding van een hond wordt toegevoegd aan de pagina.
- Er is een h1-element als titel toegevoegd.
- Er zijn twee tellers zichtbaar op de pagina die het aantal likes en dislikes bijhouden.
- De likes en dislikes worden opgeslagen in **localStorage**.
- Bij het verversen van de pagina blijven de aantallen likes en dislikes hetzelfde.
- Wanneer op de like- of dislike-knop wordt geklikt, wordt een nieuwe hondenafbeelding geladen.

## Gebruikte API

- **Dog API**: [https://dog.ceo/dog-api/documentation/](https://dog.ceo/dog-api/documentation/)
