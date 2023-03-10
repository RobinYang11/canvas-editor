import { Config, IElemet } from "./shapes/Shape";

type EditorProps = {
	root: HTMLElement;
	height: number;
	width: number;
}

abstract class IEditor<EditorProps> {
	ctx: CanvasRenderingContext2D;
	canvas: HTMLCanvasElement
	abstract append(shape: IElemet<Config>): IEditor<EditorProps>
}

export class Editor extends IEditor<EditorProps> {

	constructor(props: EditorProps) {
		super();
		const { root, height, width } = props;
		const canvas = document.createElement("canvas")
		this.canvas = canvas
		this.ctx = canvas.getContext("2d");
		canvas.width = width || 700;
		canvas.height = height || 400;
		canvas.style.background = "blue"
		root.appendChild(canvas);
	}

	createElement(shapeName: string): IElemet<Config> {
		return null;
	}

	append(shape: IElemet<Config>): Editor {
		if (shape['drawFunc']) {
			shape['drawFunc'](this.ctx)
			return this;
		}
		this.ctx.fillStyle = shape.fillStyle
		this.ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
		return this;
	}
}

