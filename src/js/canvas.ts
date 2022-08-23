import {settings} from "./settings";

export const canvas = {
    init(mouse: { x: number, y: number }) {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.mouse = mouse;
        this.resizeCanvas();
        this.addEventListeners();
        this.generateGradient();
        this.draw();
        return this;
    },
    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < settings.gradient.length; i++) {
// TODO
        }
        this.gradient.addColorStop(0, settings.gradient[0]);
        this.gradient.addColorStop(1, settings.gradient[1]);
        return this;
    },
    resizeCanvas() {
        this.canvas.width = window.innerWidth * settings.canvasRationWidth;
        this.canvas.height = window.innerHeight * settings.canvasRationHeight;
        this.generateGradient();
        return this;
    },
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = 'yellow';
        this.ctx.arc(this.mouse.x, this.mouse.y, settings.mouse.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    },
    addEventListeners() {
        window.addEventListener('resize', (e) => {
            this.resizeCanvas();
        });
        this.canvas.addEventListener('mousemove', (event: MouseEvent) => {
            this.mouse.y = Math.max(event.y - (this.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(this.canvas,).borderWidth)), 0);
            this.mouse.x = Math.max(event.x - (this.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(this.canvas,).borderWidth)), 0);
        });
    },
};
