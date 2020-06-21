import React from 'react'
import { connect } from 'react-redux'
import Products from './Products'
import shirtsBackground from '../Images/shirts-background.jpg'
import pantssBackground from '../Images/pants-background.jpg'
import shoesBackground from '../Images/shoes-background.jpg'
import phonesBackground from '../Images/phones-background.jpg'
import tabletsBackground from '../Images/tablets-background.jpg'
import giftsBackground from '../Images/gifts-background.jpg'


const ProdNav = (props) => {
    const { items } = props
    
    const display = items.map(item => {
        
        /*Shirts*/
        if(props.match.params.num == 1) {
            if(item.id > 0 && item.id < 13) {
                return (
                    <Products item={item} />
                )
            }
        }
        /*Pants*/
        if(props.match.params.num == 2) {
            if(item.id > 12 && item.id < 25) {
                return (
                    <Products item={item} />
                )
            }
        }
        /*Shoes*/
        if(props.match.params.num == 3) {
            if(item.id > 56 && item.id < 69) {
                return (
                    <Products item={item} />
                )
            }
        }
        /*Phones*/
        if(props.match.params.num == 4) {
            if(item.id > 32 && item.id < 45) {
                return (
                    <Products item={item} />
                )
            }
        }
        /*Tablets*/
        if(props.match.params.num == 5) {
            if(item.id > 44 && item.id < 57) {
                return (
                    <Products item={item} />
                )
            }
        }
        /*Gifts*/
        if(props.match.params.num == 6) {
            if(item.id > 68 && item.id < 81) {
                return (  
                    <Products item={item} />
                )
            }
        }
    })

    const testArray = [
        shirtsBackground, 
        pantssBackground, 
        shoesBackground, 
        phonesBackground, 
        tabletsBackground, 
        giftsBackground
    ]

    const test = testArray[props.match.params.num-1];

    console.log(test)
    return (
        <React.Fragment>
            <div className='prod-page-image'><img src={test} alt='jpg'/></div>
            <div className='prod-container'>
                {display}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.Items.items
    }
}
export default connect(mapStateToProps)(ProdNav)