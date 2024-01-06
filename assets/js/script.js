/* jshint esversion: 6 */

// dictionary for each item and what it wins against (move to json / separate file).
const data = {
    'rock': {
        'wins': ['lizard', 'scissors'],
        'img': '',
        'alt': 'rock'
    },
    'paper': {
        'wins': ['rock', 'spock'],
        'img': '',
        'alt': 'paper'
    },
    'scissors': {
        'wins': ['lizard', 'paper'],
        'img': '',
        'alt': 'scissors'
    },
    'lizard': {
        'wins': ['paper', 'spock'],
        'img': '',
        'alt': 'lizard'
    },
    'spock': {
        'wins': ['rock', 'scissors'],
        'img': '',
        'alt': 'spock'
    }
}