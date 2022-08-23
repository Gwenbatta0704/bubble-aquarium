import {settings} from "./settings";
import {canvas} from "./canvas";
import {animation} from "./animation";
import {Bubble} from "./Bubble";

const app = {
    init() {
        this.bubbles = [];
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.mouse = {x: 0, y: 0}
        this.ctx = this.canvasElement.getContext('2d');
        this.canvas = canvas.init(this.mouse);
        this.loadBubbles();
        this.animation = animation.init(this.canvas, this.bubbles);
    },
    loadBubbles() {
        for (let i = 0; i < settings.bubble.maxCount; i++) {
            this.bubbles.push(new Bubble(this.ctx, this.canvasElement, this.mouse));
        }
    }
}
app.init();
