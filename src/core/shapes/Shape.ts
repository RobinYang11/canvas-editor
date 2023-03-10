


interface IElementEvent {
	onMove(): void;
	onSelect(): void;
	onKeyDown(): void;
}

export type Config = {
	x: number;
	y: number;
	name?: string;
	width?: number
	height?: number;
	fillStyle?: string
}
HTMLDivElement

export interface IElemet<T extends Config> extends IElementEvent {
	name: string;
	x: number;
	y: number;
	width?: number;
	height?: number;
	parent: IElemet<T>
	fillStyle: string
	drawFunc?(gl: CanvasRenderingContext2D): void

}

export class Group implements IElemet<Config>{
	name: string;
	x: number;
	y: number;
	width?: number;
	height?: number;
	parent: IElemet<Config>;
	fillStyle: string;
	onMove(): void {
		throw new Error("Method not implemented.");
	}
	onSelect(): void {
		throw new Error("Method not implemented.");
	}
	onKeyDown(): void {
		throw new Error("Method not implemented.");
	}
	drawFunc(gl) { }
}

export class Layer extends IElemet<Config>{

	constructor(props: Config) {
		super(props)
		this.name = "LAYER"
	}

	drawFunc(gl: CanvasRenderingContext2D) {
		gl.fillStyle = 'rgba(255,0,0,.4)';
		gl.fillRect(0, 0, 1000, 1000);
	}

}

export class Rect extends IElemet<Config> {
	public drawFunc = null
	constructor(props: Config) {
		super(props);
		this.name = "RECT"
	}
}








