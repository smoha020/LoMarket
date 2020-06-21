import React, { Component } from 'react';
import Background from '../Images/HomeBackground.jpg'
import giftSection from '../Images/giftSection.jpg';
import Display from './Display';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Home extends Component {

    render () {

        let i = 0;
        const display = this.props.items.map(item => (
            <div className='display-coat'>
                <Display item={item} key={i++} />
            </div>
            
        ))

        let j = -1;
        const title = ['Fragrance', 'Household', 'Electronics', 'Style']
        const display1 = this.props.giftItems.map(item => (
            <Link className='prod-link' to={`/description/${item.id}`}>
                <div className='gift-display'>
                   <div key={j++} className='gift-item'>
                        <h5 className='gift-title'>{title[j]}</h5>
                        <img src={item.img} alt='jpg' />
                    </div> 
                </div>
                
            </Link>
        ))
        return (
            <div className='home-parent'>
                <div className='home-background-img'>
                    <img src={Background} alt='jpg'/>
                </div>
                <div className='display-section'>
                    {display}
                </div>
                <div className='gift-pic'>
                    <img src={giftSection} alt='jpg' />
                </div>
                <h4 className='gift-sec-header'>Gifts You'll Love</h4>
                <div className='gift-sec'>
                    {display1}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.Display.items,
        giftItems: state.GiftDisplay.items
    }
}

export default connect(mapStateToProps)(Home)