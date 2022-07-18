# Trello-event-handler

![Version](https://img.shields.io/badge/version-0.2.2-blue.svg?cacheSeconds=2592000)

## Description

The purpose of this library is to make the retrieval of the different actions done on your Trello simple and to be able to easily use the resulting data.

## Installation

```shell
npm i trello-event-handler
```

## Usage

```javascript
const trello = new TrelloEventHandler(key, token);

trello.addBoardFromUrl(url, name);
/// Or
trello.addBoardFromId(id, name);

trello.start();

/// exemple
trello.on("createCard", (action) => {
  console.log(action);
});
```
