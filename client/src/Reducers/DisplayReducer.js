import Items from '../Items/DisplayItems';

const initState = {
    items: Items,
    bought: []
}


const DisplayReducer = (state = initState, action) => {
    if(action.type === 'INCREMENT'){
        let newItems = state.bought.map(item => {
            if(item.id == action.Item.id) {
                item.price = item.price + (action.Item.price / item.count);
                item.count = action.Item.count + 1;
                
                return item
            } else {
                return item
            }
            
        })
        return {
            ...state,
            bought: newItems
        }
    }
    if(action.type === 'DECREMENT'){
        if(action.Item.count > 1){
            let newItems = state.bought.map(item => {
                if(item.id == action.Item.id) {
                    item.price = item.price - (action.Item.price / item.count);

                    item.count = action.Item.count - 1;
                    return item
                } else {
                    return item
                }
            })
            return {
                ...state,
                bought: newItems
            }
        } else {
            let newItemz = state.bought.filter(item => {
                return (item.id != action.Item.id)
            })
            return {
                ...state,
                bought: newItemz
            }
        }
    }
    if(action.type === 'REMOVE'){
        let newItemz = state.bought.filter(item => {
            return (item.id != action.Item.id)
        })
        
        return {
            ...state,
            bought: newItemz
        }
    }
    if(action.type === 'ADDTOCART'){
        
        if (state.bought.includes(action.item) == false) {
            let newBought = state.bought.map(b => {
                return b
            })
    
            newBought = [...newBought, action.item]
            return {
                ...state,
                bought: newBought
            }
        }
    
    }
    return state;
}

export default DisplayReducer