export default class CardRandomizer {
    constructor(sets) {
        this.sets = sets
    }

    list = null
    activeSet = null

    shaffleArr = (arr) => {
        let j, temp;
        for (let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }


    createSetHandler = (n = 3, usersSet, boxSets) => {
        let userSet = [...usersSet]
        const createEmptyArr = (n) => {
            return new Array(n).fill([])
        }
        const fillEmptyArr = (n) => {
            const arrSet = createEmptyArr(n).map(el => [''])
            createEmptyArr(10 - n).forEach(el => {
                const randomSet = Math.floor(Math.random() * n)
                arrSet[randomSet].push('')
            })
            return arrSet
        }
        const createSet = () => {
            Object.keys(boxSets).forEach(el => {
                const id = {
                    ...boxSets[el]
                }.id
                this.sets.forEach(el => {
                    if (el.id === id) {
                        userSet.push(el.cards)
                    }

                })
            })
            return userSet
        }
        userSet = [...createSet()]

        const emptyArr = fillEmptyArr(n)
        const activeSet = emptyArr.map((el, i) => {
            const newEl = this.shaffleArr(userSet[i]).slice(0, el.length)
            return newEl

        })
        this.list = activeSet;
        return {
            createSet: createSet(),
            activeSet: activeSet,
            list: this.list
        }
    }

    firstRandom = (usersSet, boxSets) => {
        this.list =(this.shaffleArr(this.sets[0].cards).slice(-10)) 
        this.list = this.createSetHandler(1, usersSet, boxSets)
        return this.list
    }
    createList(cards, boxSets){
       const lengthList = !!boxSets.length ? boxSets.length : 1;
       const newSet = function(name, card){
           this.name = name
           this.card = [].push(card)
       }
        const cardList = new Array(lengthList)

        
        let count = 0
        cards.forEach((el,i,arr)=>{
            console.log(arr[i].set)
            if(cardList.length === 0 /* || arr[i].set !== arr[i-1].set */){
                console.log('test')
                cardList[count].push(new newSet(el.set, el))
            }
           console.log(new newSet(el.set, el), el)
        })
        console.log(cardList)   
    }

}