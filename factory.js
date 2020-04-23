function Developer (name) {
    this.name = name,
    this.type = 'Developer'
}

function Tester(name){
    this.name = name,
    this.type = 'Tester'
}

function EmployeeFactory (){
    this.create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name) 
        }
    }
}

function say(){
    console.log('I am ' + this.name + ' and I am a ' +this.type)
}

const employeeFactory = new EmployeeFactory()
employees = []
employees.push(employeeFactory.create('Ashraf', 1))
employees.push(employeeFactory.create('Hussain', 2))
employees.forEach(element => {
    say.call(element)
});