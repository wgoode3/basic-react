'use strict'


// Ticking clock!

function setTime(){
	let t = new Date().toLocaleTimeString();
	let myButton = React.createElement(
		'h1', 
		null, 
		`The time is: ${t}`
	);
	ReactDOM.render(myButton, document.getElementById('clock'));
}
setTime();

setInterval( function() {
	setTime();		
}, 1000);


// Composable squares

const Block = (props) => {
	const { text, style } = props;
	return React.createElement('h1', style, text);
}

const Blocks = (props) => {
	return React.createElement('div', null,
		props.map( prop => React.createElement(Block, prop) )
	);
}

const myBlocks = [
	{
		text: "White on blue",
		style: {
			className: 'box blue'
		},
		key: 0
	},
	{
		text: "Blue on Red",
		style: {
			className: 'box red'
		},
		key: 1
	},
	{
		text: "Green on Pink",
		style: {
			className: 'box pink'
		},
		key: 2
	},
];

ReactDOM.render(Blocks(myBlocks), document.getElementById('squares'));


// Checkerboard

const s = document.getElementById("size");

// hard coding a listener on the input
document.addEventListener('DOMContentLoaded',function() {
    s.onchange = () => {
		renderCheckerboard(parseInt(s.value));
	}
}, false);

let bool = true;

const cellA = {
	className: "cell a"
}

const cellB = {
	className: "cell b"
}

const rowStyle = {
	className: "row"
}

function CheckerBoard (props) {
	let rows = [];
	for (var i=0; i<props; i++) {
		rows.push(Row(props));
	}
	return React.createElement('div', null, rows);
}

function Row (props,num) {
	let row = [];
	for (let i=0; i<props; i++) {
		row.push(Cell(i));
	}
	if (props % 2 == 0) {
		bool = !bool;
	}
	return React.createElement('div', rowStyle, row);
}

function Cell (props) {
	bool = !bool;
	return React.createElement('div', bool ? cellA : cellB, null);
} 

function renderCheckerboard(size){
	ReactDOM.render(CheckerBoard(size), document.getElementById('checkerboard'));
}

renderCheckerboard(parseInt(s.value));