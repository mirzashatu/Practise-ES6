class Father{
    constructor(fName){
        this.father='kolimuddin'
    }
}

class Child extends Father{
    constructor(cName){
        super()
        this.childName=cName
    }
 //    ichha korle function ke daka jay
    bapBataAksatheDekha(){
    return this.childName+" "+this.father
    }
}
const VAlue=new Child('rana')
console.log(VAlue.bapBataAksatheDekha())