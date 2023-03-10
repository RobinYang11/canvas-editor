

interface EL {
	add(): void;
}


declare var El: {
	prototype: typeof El;
	new(): EL
}

var el = new El()
el.add()