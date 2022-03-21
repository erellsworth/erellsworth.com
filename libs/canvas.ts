interface CanvasDimensions {
    width: number;
    height: number;
    centerX: number;
    centerY: number;
}

class Painter {
    private context: CanvasRenderingContext2D;
    private dimensions: CanvasDimensions;
    private shapes: any[] = [];
    private circles: Map<Circle, Painter>;

    constructor(wrapper: HTMLElement, canvas: HTMLCanvasElement, ratio: number = 0.56) {
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
        const width = wrapper.clientWidth;
        const height = wrapper.clientWidth * ratio;
        const centerX = width / 2;
        const centerY = height / 2;

        this.dimensions = {
            width,
            height,
            centerX,
            centerY
        };

        this.circles = new Map();

    }

    public addCircle(x: number, y: number, radius: number): Shape {
        const circle = new Circle(x, y, radius);

        this.context.fill(circle.path);

        return circle;
    }

    public animateTo(shape: Shape, x: number, y: number) {

        if (shape.data.x === x && shape.data.y === y) {
            return;
        }

        if (shape.data.x < x) {
            shape.data.x++;
        }

        if (shape.data.y < y) {
            shape.data.y++;
        }

        if (shape.data.x > x) {
            shape.data.x--;
        }

        if (shape.data.y > y) {
            shape.data.y--;
        }

        shape.draw();
        //this.context.clearRect()
        //requestAnimationFrame
    }
}

abstract class Shape {
    abstract path: Path2D;
    abstract data: {
        x: number;
        y: number;
        radius?: number;
        width?: number;
        height?: number;
    };
    abstract draw(): void;
}

class Circle extends Shape {
    public path: Path2D;

    public data = {
        x: 0,
        y: 0,
        radius: 0
    }

    constructor(x: number, y: number, radius: number) {
        super();
        this.path = new Path2D();

        this.data = {
            x,
            y,
            radius
        };

        this.path.arc(x, y, radius, 0, Math.PI * 2);
    }

    public draw() {
        const { x, y, radius } = this.data;
        this.path.arc(x, y, radius, 0, Math.PI * 2);
    }
}

export default Painter;