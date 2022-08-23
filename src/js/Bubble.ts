import {settings} from "./settings";
import {random} from "./helpers/math";

export class Bubble { //extends après Bubble
    private radius:number;
    private color:string;
    private position:{x:number,y:number};
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private opacity:number;
    private speed: {x:number,y:number};
    private mouse: {x:number,y:number};
    private hypothenuse: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, mouse:{x:number, y:number}) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.mouse = mouse;
        this.genrate();
    }
    genrate(){
        this.opacity = Math.random();
        this.speed = {
            x: random(settings.bubble.speed.x.min, settings.bubble.speed.x.max),
            y:random(settings.bubble.speed.y.min,settings.bubble.speed.y.max)};
        this.radius = random(settings.bubble.radius.min,settings.bubble.radius.max);
        this.position = {x: random(this.radius, this.canvas.width-this.radius),y:random( -this.canvas.height*1.5, this.canvas.height+ this.radius*2)};
        this.color = settings.bubble.colors[random(0,settings.bubble.colors.length,false)];
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x,this.position.y,this.radius, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
    }
    update(){
        if (this.position.y<= - this.radius){
            this.genrate();
        }
           this.hypothenuse = Math.sqrt(Math.pow((this.mouse.x - this.position.x),2) + Math.pow((this.mouse.y - this.position.y),2));
            if (this.hypothenuse <= this.radius + settings.mouse.radius){
                console.log(this.hypothenuse, this.radius+settings.mouse.radius);
                this.opacity = 0;
            }
        this.position.y -= this.speed.y;
        this.position.x += this.speed.x;
        this.draw();
    }

}