//imports
import minimist from 'minimist';
import fetch from "node-fetch";
import Deck from "card-deck";

const args = minimist(process.argv.slice(2));

var myDeck = new Deck();

//TODO: add corresponding questions for each card in the deck
// game ends when drawn ten four times
// round ends when ten is drawn
// find way to output to console and also to a log 
//or otherwise save progress
// 