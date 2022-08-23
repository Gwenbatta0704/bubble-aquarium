export function random(min:number, max:number, ceil:boolean = true){
    if (ceil){
       return Math.ceil(min + Math.random()*(max-min))
    }
    return Math.floor(min + Math.random()*(max-min));
}