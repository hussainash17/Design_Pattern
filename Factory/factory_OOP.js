class TailFactory{
    constructor(props){
        this.tailLength = props.tailLength
    }
}

class TorsoFactory {
    constructor(props){
        this.color = props.color
    }
}

class HeadFactory{
    constructor(props){
        this.snoutLength = props.snoutLength
    }
}

class ReptilePartFactory{
    constructor(type, props){
        if(type === 'tail'){
            return new TailFactory(props)
        }
        if(type === 'torso'){
            return new TorsoFactory(props)
        }
        if( type === 'head'){
            return new HeadFactory(props)
        }
    }
}

let alligator = {}
let alligatorProps = {
    tailLength: 2.5,
    color: 'green',
    snoutLength: 1
}

const tail = alligator.tail  = new ReptilePartFactory('tail', alligatorProps)
const torso = alligator.torso = new ReptilePartFactory('torso', alligatorProps)
const head = alligator.head = new ReptilePartFactory('head', alligatorProps)
console.log(tail,torso,head)
