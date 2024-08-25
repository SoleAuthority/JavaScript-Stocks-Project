const config = require('./stockServerConfig.json');

function getRand(varRange, upOnly) {
    if (upOnly) {
	return Math.floor(Math.random() * varRange);
    } else {
	return Math.floor(Math.random() * varRange - varRange/2);
    }
}


class Stock {
    constructor(ticker, initPrice, rate, name, baseVolume, volRate, volTrend) {
	this._ticker = ticker;
	this._last = parseInt(initPrice);
	this.rate = parseFloat(rate)
	this.name = name;
	this._volume = parseInt(baseVolume);
	this.volRate = parseFloat(volRate);
	this.volTrend = volTrend;
    }
    get ticker() {
	return this._ticker;
    }
    set last(value) {
	this._last = value;
    }
    get last() {
	return this._last;
    }
    set volume(value) {
	this._volume = value;
    }
    get volume() {
	return this._volume;
    }
    trade() {
	this.last = this.last + getRand(this.last * this.rate);
	if (this.volTrend == "up") {
	    this.volume = this.volume + getRand(this.volume * this.volRate, true);
	} else {
	    this.volume = this.volume + getRand(this.volume * this.volRate, false);
	}
    }
}
    
//export function items()
function stockArray(){
    const stocks = config.stocks;
    for (let i = 0; i < stocks.length; i++) {
        let a = [];
        let id = stocks[i];
        console.log(id);
        let newItem = new Stock(id, config[id].initPrice, config[id].rate, config[id].fullName, config[id].baseVolume, config[id].volumeRate, config[id].volumeTrend);
        a.push(newItem);
    }
    return a;
}

function refreshAmzn() {
    let i = stockArray();
    var s = i[1];
    console.log("In amazn.html script");
    console.log(s);

    var price = document.createElement('p');
    var t = document.createTextNode(s.last());
    price.appendChild(t);
    document.getElementById("d1").appendChild(price);
}




// function clickAmzn(){
// 	requestListener(req.url = "/AMZN");
// 	req.url = "/AMZN";
// }

// function refreshAmzn() {
// 	console.log("In amazn.html script")
// 	console.log(items['AMZN'])

// 	let s = items[0]
// 	var price = document.createElement('p');
// 	var t = document.createTextNode(s.last());
// 	price.appendChild(t);
// 	document.getElementById("d1").appendChild(price);
// }



// for (let i = 0; i < items.length; i++) {
// 	console.log("Reading items, ", items)
// 	var btn = document.createElement(items[i].fullName); // Create a button element
// 	btn.id = items[i].fullName;
// }




