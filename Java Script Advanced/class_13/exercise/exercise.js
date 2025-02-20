class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }

    set name(nameInput){
        !nameInput ? "No name!" : this._name = nameInput;
    }

    get name(){
        console.log("We are getting the this.name...");
        return this._name;
        
    }

    set color(colorInput){
        !colorInput ? "No color!" : this._color = colorInput;
    }

    get color(){
        console.log("We are getting the color...");
        return this._color;
        
    }
}