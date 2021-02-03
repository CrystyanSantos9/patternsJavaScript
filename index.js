const button = document.querySelector('button')
const quadro = document.querySelector('table')
const inputValue = document.querySelector('input[name="name"]')
const selectValue = document.querySelector('select[name="tipo"]')

//Evento
button.addEventListener('click',(e)=>{
    e.preventDefault()
    let personName = inputValue.value
    let personTypo = selectValue.value
    const personDone = () => personFactory(personName,personTypo)
    imprime(personDone())
    
})

//factory

function personFactory(name,tipo){
   let count = 0

   switch(tipo){
       case 'warrior':
        return{
            count: () => count++,
            name:name,
            type:'warrior'
        }
        case 'archer':
            return{
                count: () => count++,
                name:name,
                type:'archer'
            }
            case 'wizard':
                return{
                    count: () => count++,
                    name:name,
                    type:'wizard'
                }
        default:
            return{
                count: () => count++,
                name:'Jorge do peixe',
                type:'Camelô'
            }
        }
   console.log('Iniciando')
}


//responsável por imprimir 

function imprime(person){
   
    let row = document.createElement('tr')

    console.log(person)

    const personPrinted = {
        name:person.name,
        type:person.type
    }

    for (let key in personPrinted){
        let td = document.createElement('td')
        td.innerHTML = personPrinted[key]
        row.append(td)
    }

    quadro.append(row)
}