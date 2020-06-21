import React, { Component } from 'react';



class Footer extends Component {

    render () {
        return (
            <div className='footer'>
                <div class='footer-container'>
                    <ul class='footer-left-sec'>
                        <li class='footer-main-list'>
                            <ul class='footer-low-list'>
                                <li style={{fontWeight: '500', fontSize: '110%'}}>Customer Service</li>
                                <li><a href='#'>Help/FAQ</a></li>
                                <li><a href='#'>Gift Cards</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                        </li>
                        <li class='footer-main-list'>
                            <ul class='footer-low-list'>
                                <li style={{fontWeight: '500', fontSize: '110%'}}>About</li>
                                <li><a href='#'>Our Story</a></li>
                                <li><a href='#'>Journal</a></li>
                                <li><a href='#'>Reviews</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class='footer-right-sec'>
                        <p>Said Mohamed</p>
                        <p>smoha020@ucr.edu</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer