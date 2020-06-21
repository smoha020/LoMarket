import { combineReducers } from 'redux'
import DisplayReducer from './DisplayReducer'
import ShirtReducer from './ShirtReducer'
import PantsReducer from './PantsReducer'
import PhonesReducer from './PhonesReducer'
import ItemsReducer from './ItemsReducer'
import GiftDisplayReducer from './GiftDisplayReducer'


const rootReducer = combineReducers({
    Display: DisplayReducer,
    GiftDisplay: GiftDisplayReducer,
    Shirt: ShirtReducer,
    Pants: PantsReducer,
    Phones: PhonesReducer,
    Items: ItemsReducer
})

export default rootReducer