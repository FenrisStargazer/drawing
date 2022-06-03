const contain = document.querySelector('section');
const press = document.querySelector('button');
const cols = ['#4d0000', '#ff1a1a', '#ff8080', '#791616', '#d72828', '#ff6600', '#993d00', '#ff8533', '#bd4b00', '#ff9900'];
let params = {
	fitted: true
};
const two = new Two(params);
two.appendTo(contain);
runSq();

function runSq() {
	let fate = Math.floor(Math.random() * 50) + 5;
	let x, y, w, h, col = 0;
	let shape = null;
	for(let i = 0; i < fate; i++){
		x = Math.floor(Math.random() * contain.offsetWidth);
		y = Math.floor(Math.random() * contain.offsetHeight);
		w = Math.floor(Math.random() * (contain.offsetWidth - 100) + 10);
		h = Math.floor(Math.random() * (contain.offsetHeight - 100) + 10);
		col = Math.floor(Math.random() * cols.length);
	
		shape = two.makeRectangle(x,y,w,h);
		if(fate % 2 == 0)
			shape.noStroke();
		shape.fill = cols[col];
	}
	two.play();
}

press.addEventListener('click', () => {
	runSq();
}); //adapted code from in class example working with canvas/pictionary thing