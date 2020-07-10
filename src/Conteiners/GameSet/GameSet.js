import React, {Component} from 'react';
import '../../Components/CardPlace/CardPlace';
import './gameSet.scss';
import CardPlace from '../../Components/CardPlace/CardPlace';
import GamesCheck from '../../Components/GamesCheck/GamesCheck';
import CardRandomizer from '../../BLogic/CardRandomizer';

export default class GameSet extends Component{
constructor(){
    super()
    this.randomizer = new CardRandomizer(this.state.sets)
}
   state = {
        gameCheckIsOpen:false,
        activeSet: null,
        list: null,
        backSideSrc: './img/backSide.jpg',
        usersSet:[],
        boxSets:[],
        viewMode: 'cards',
        formSetIsValid:true,
        box:[
            {name: 'Dominion', id:1, src:'./img/icon/dominion2ed.png', checked: false},
            {name: 'Intriue', id:2, src:'./img/icon/intrigue.png', checked: false},
            {name: 'Seaside', id:3, src:'./img/icon/Seaside.png', checked: false},
            {name: 'Prosperity', id:4, src:'./img/icon/Prosperity.png', checked: false},
            {name: 'Darkage', id:5, src:'./img/icon/Darkage.png', checked: false},
            {name: 'Empire', id:6, src:'./img/icon/Empire.png', checked: false},
            {name: 'Alchemy', id:7, src:'./img/icon/Empire.png', checked: false},
        ],
        sets:[
            {
                id:1,
                name:'Dominion',
                cards:[
                    {name: 'Artisan', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/dominion/artisan.jpg', id:1,set:'Dominion'},
                    {name: 'Bandit', text:'Gain a Gold. Each other players the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest.', price:5, type:'Action-Attack', src:'./img/dominion/bandit.jpg', id:2,set:'Dominion'},
                    {name: 'Bureaucrat', text:'Gain a Silver onto your dech. Each other player reveals a Victory card from their hand and puts it onto their deck (or reveals a hand with no Victory cards).', price:4, type:'Action-Attack', src:'./img/dominion/bureaucrat.jpg', id:3,set:'Dominion'},
                    {name: 'Cellar', action:'+1 Action', text:'Discard any number of cards, then draw that many.', price:2, type:'Action', src:'./img/dominion/cellar.jpg', id:4,set:'Dominion'},
                    {name: 'Chapel', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/dominion/chapel.jpg', id:5,set:'Dominion'},
                    {name: 'Council-room', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/dominion/council-room.jpg', id:6,set:'Dominion'},
                    {name: 'Festival', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/festival.jpg', id:7,set:'Dominion'},
                    {name: 'Gardens', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/gardens.jpg', id:8,set:'Dominion'},
                    {name: 'Harbinger', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/dominion/harbinger.jpg', id:9,set:'Dominion'},
                    {name: 'Laboratory', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/laboratory.jpg', id:10,set:'Dominion'},
                    {name: 'Library', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/library.jpg', id:11,set:'Dominion'},
                    {name: 'Market', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/market.jpg', id:12,set:'Dominion'},
                    {name: 'Merchant', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/dominion/militia.jpg', id:13,set:'Dominion'},
                    {name: 'Militia', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/mine.jpg', id:14,set:'Dominion'},
                    {name: 'Mine', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/moat.jpg', id:15,set:'Dominion'},
                    {name: 'Moat', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/dominion/moneylender.jpg', id:16,set:'Dominion'},
                    {name: 'Moneylender', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/poacher.jpg', id:17,set:'Dominion'},
                    {name: 'Poacher', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/remodel.jpg', id:18,set:'Dominion'},
                    {name: 'Remodel', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/sentry.jpg', id:19,set:'Dominion'},
                    {name: 'Sentry', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/smithy.jpg', id:20,set:'Dominion'},
                    {name: 'Smithy', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/throne-room.jpg', id:21,set:'Dominion'},
                    {name: 'Throne Room', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/dominion/vassal.jpg', id:22,set:'Dominion'},
                    {name: 'Vassal', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/dominion/village.jpg', id:23,set:'Dominion'},
                    {name: 'Village', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/dominion/witch.jpg', id:24,set:'Dominion'},
                    {name: 'Witch', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/dominion/workshop.jpg', id:25,set:'Dominion'},
                    {name: 'Workshop', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/dominion/merchant.jpg', id:26,set:'Dominion'},
                ]
            },
            {
                id:2,
                name:'Intrigue',
                cards:[
                    {name: 'Baron', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/baron.jpg', id:1,set:'Intrigue'},
                    {name: 'bridge', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/bridge.jpg', id:2,set:'Intrigue'},
                    {name: 'conspirator', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/conspirator.jpg', id:3,set:'Intrigue'},
                    {name: 'courtier', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/courtier.jpg', id:4,set:'Intrigue'},
                    {name: 'courtyard', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/intrigue/courtyard.jpg', id:5,set:'Intrigue'},
                    {name: 'diplomat', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/diplomat.jpg', id:6,set:'Intrigue'},
                    {name: 'duke', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/duke.jpg', id:7,set:'Intrigue'},
                    {name: 'harem', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/intrigue/harem.jpg', id:8,set:'Intrigue'},
                    {name: 'ironworks', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/ironworks.jpg', id:9,set:'Intrigue'},
                    {name: 'lurker', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/intrigue/lurker.jpg', id:10,set:'Intrigue'},
                    {name: 'masquerade', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/intrigue/masquerade.jpg', id:11,set:'Intrigue'},
                    {name: 'mill', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/mill.jpg', id:12,set:'Intrigue'},
                    {name: 'mining-village', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/mining-village.jpg', id:13,set:'Intrigue'},
                    {name: 'minion', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/minion.jpg', id:14,set:'Intrigue'},
                    {name: 'nobles', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/intrigue/nobles.jpg', id:15,set:'Intrigue'},
                    {name: 'patrol', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/patrol.jpg', id:16,set:'Intrigue'},
                    {name: 'pawn', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:2, type:'Action', src:'./img/intrigue/pawn.jpg', id:17,set:'Intrigue'},
                    {name: 'replace', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/replace.jpg', id:18,set:'Intrigue'},
                    {name: 'secret-passage', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:4, type:'Action', src:'./img/intrigue/secret-passage.jpg', id:19,set:'Intrigue'},
                    {name: 'shanty-town', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/intrigue/shanty-town.jpg', id:20,set:'Intrigue'},
                    {name: 'steward', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/intrigue/steward.jpg', id:21,set:'Intrigue'},
                    {name: 'swindler', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/intrigue/swindler.jpg', id:22,set:'Intrigue'},
                    {name: 'torturer', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/torturer.jpg', id:23,set:'Intrigue'},
                    {name: 'trading-post', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/trading-post.jpg', id:24,set:'Intrigue'},
                    {name: 'upgrade', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:5, type:'Action', src:'./img/intrigue/upgrade.jpg', id:25,set:'Intrigue'},
                    {name: 'wishing-well', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:3, type:'Action', src:'./img/intrigue/wishing-well.jpg', id:26,set:'Intrigue'},
                ]
            },
            {
                id:3,
                name:'Seaside',
                cards:[
                    {name: 'Baron', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/ambassador.jpg', id:1,set:'seaside'},
                    {name: 'bridge', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/bazaar.jpg', id:2,set:'seaside'},
                    {name: 'conspirator', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/caravan.jpg', id:3,set:'seaside'},
                    {name: 'courtier', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/cutpurse.jpg', id:4,set:'seaside'},
                    {name: 'courtyard', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/embargo.jpg', id:5,set:'seaside'},
                    {name: 'diplomat', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/explorer.jpg', id:6,set:'seaside'},
                    {name: 'duke', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/fidhing-village.jpg', id:7,set:'seaside'},
                    {name: 'harem', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/ghost-ship.jpg', id:8,set:'seaside'},
                    {name: 'ironworks', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/haven.jpg', id:9,set:'seaside'},
                    {name: 'lurker', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/island.jpg', id:10,set:'seaside'},
                    {name: 'masquerade', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/lighthouse.jpg', id:11,set:'seaside'},
                    {name: 'mill', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/lookout.jpg', id:12,set:'seaside'},
                    {name: 'mining-village', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/merchant-ship.jpg', id:13,set:'seaside'},
                    {name: 'minion', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/native-village.jpg', id:14,set:'seaside'},
                    {name: 'nobles', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/navigator.jpg', id:15,set:'seaside'},
                    {name: 'patrol', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/outpost.jpg', id:16,set:'seaside'},
                    {name: 'pawn', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/pearl-diver.jpg', id:17,set:'seaside'},
                    {name: 'replace', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/pirate-ship.jpg', id:18,set:'seaside'},
                    {name: 'secret-passage', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/salvager.jpg', id:19,set:'seaside'},
                    {name: 'shanty-town', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/sea-hag.jpg', id:20,set:'seaside'},
                    {name: 'steward', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/smugglers', id:21,set:'seaside'},
                    {name: 'swindler', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/tactician.jpg', id:22,set:'seaside'},
                    {name: 'torturer', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/treasure-map.jpg', id:23,set:'seaside'},
                    {name: 'trading-post', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/treasury.jpg', id:24,set:'seaside'},
                    {name: 'upgrade', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/warehouse.jpg', id:25,set:'seaside'},
                    {name: 'wishing-well', text:'Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.', price:6, type:'Action', src:'./img/seaside/wharf.jpg', id:26,set:'seaside'},
                ]
            }
        ]
    }

    changeViewModeHandler = (_,mode) =>{
        this.setState({
            viewMode: mode,
        })
    }

    checkSetHandler = () =>{
        this.setState({
            gameCheckIsOpen: !this.state.gameCheckIsOpen
        })
    }

    createSetHandler=()=>{
        if(this.state.boxSets.length !== 0){
            const {activeSet, list} =  this.randomizer.createSetHandler(this.state.boxSets.length, this.state.usersSet, this.state.boxSets)
        this.setState({
            activeSet,
            list,
            formSetIsValid:true
        })
        } else{
            this.setState({formSetIsValid: false})
        }
    }
componentDidMount(){
    const firstSet = [{name: "Dominion", id: 1}]
    if(this.state.activeSet===null){
        const {activeSet,list} = this.randomizer.firstRandom([], firstSet)
        //const activeSet = this.randomizer.firstRandom()
        console.log(activeSet, list)
        this.setState({
          activeSet:activeSet,
          list:list
      })
    }
   
}
   


    showCheck=(evt, {name, id})=>{  
        const box = [...this.state.box]
        box.map(el=>{
            if(el.name === name){
                el.checked = !el.checked
                return el
            }
        })
        if(evt.target.checked){
            const boxSets = this.state.boxSets.concat()
            boxSets.push({name,id})
            this.setState({boxSets})
        } else{
            const boxSets = this.state.boxSets.concat().filter(el=>{
                return el.id !==id
            })
            this.setState({boxSets})
        }
    }



    render(){    
        console.log(this.state.activeSet, this.state.list)
        return(
            <div className='game-set-conteiner' ref = {this.ref}>
                <CardPlace 
                cards = {this.state.activeSet ? this.state.activeSet.flat() : null}
                backSide = {this.state.backSideSrc}
                isOpen = {this.state.gameCheckIsOpen}
                viewMode = {this.state.viewMode}
                activeSet = {this.state.boxSets}
                list = {this.state.activeSet}
                />
                <GamesCheck
                isValid = {this.state.formSetIsValid}
                isOpen = {this.state.gameCheckIsOpen}
                checkSetHandler = {this.checkSetHandler}
                clickHundler = {this.createSetHandler}
                checkHandler = {this.showCheck}
                boxes = {this.state.box}
                changeViewModeHandler = {this.changeViewModeHandler}
                />
            </div>  
        )
    }
}