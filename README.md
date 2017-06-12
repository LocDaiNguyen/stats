# Stats

[Demo https://ldn-stats.herokuapp.com/signin](https://ldn-stats.herokuapp.com/signin)

## Setup

Install gulp globally `npm install -g gulp`
might need to use sudo `sudo npm install -g gulp`

`git clone git@github.com:LocDaiNguyen/stats.git`

`cd stats`

`npm install`

Create mongo db and import all `leaders-assist.json, leaders-gaa.json, leaders-goal.json, leaders-plus-minus.json, leaders-point.json, leaders-so.json, leaders-sv.json, leaders-win.json, players.json` files from the `data` folder

Name of collections should be `assists, gaas, goals, plusminus, points, sos, svs, wins`

In `server.js` file change `mongoose.connect('localhost:27017/db_name_here');` to point to your mongo db

## Build

Run `gulp` and `node server.js` or `nodemon server.js` if you have `nodemon` installed
