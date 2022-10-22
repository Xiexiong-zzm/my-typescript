class cat {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
}

class dog {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
}

class fish {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
}

class animalFactory {
    create(name) {
        if(name == 'cat') {
            return new cat('mimi','red');
        }
        if(name == 'dog') {
            return new cat('hh','yeed');
        }
        if(name == 'fish') {
            return new cat('xx','red');
        }
        
    }
}

const cata  = new animalFactory()
console.log(cata.create('cat'));