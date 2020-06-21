import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropContainer: 'drop-container'
        }
    }
    onClick = () => {
        const newClass = 'drop-containerOpen';
        const oldClass= 'drop-container';
        if (this.state.dropContainer == 'drop-container') {
            this.setState({
                dropContainer: newClass
            })
    
        } else {
            this.setState({
                dropContainer: oldClass
            })
        }
    }
    handleClick = () => {
        const oldClass= 'drop-container';
        this.setState({
            dropContainer: oldClass
        })
    }
    
    render () {
        return (
            <div className='Nav'>
                {/* <nav class='navHeight'> */}
                    <div className='myLogo'><Link className='logo-text' to='/'>eMarket</Link></div>
                    <a href='#' onClick={this.onClick}><div className='icon'></div></a>
                    <div className={this.state.dropContainer}>
                        <a className='drop-hover' href="#">Attire</a>
                        <div className='drop-div attire'>
                            <Link className='drop-link' to='/ProdNav/1' onClick={this.handleClick}>Shirts</Link>
                            <Link className='drop-link' to='/ProdNav/2'onClick={this.handleClick}>pants</Link>
                            <Link className='drop-link' to='/ProdNav/3' onClick={this.handleClick}>Shoes</Link>
                        </div>
                    </div>
                    <div className={this.state.dropContainer}>
                        <a className='drop-hover' href="#">Gadgets</a>
                        <div className='drop-div gadgets'>
                            <Link className='drop-link' to='/ProdNav/4'onClick={this.handleClick}>Phones</Link>
                            <Link className='drop-link' to='/ProdNav/5' onClick={this.handleClick}>Tablets</Link>
                        </div>
                    </div>
                    <div className={this.state.dropContainer}>
                        <Link className='drop-hover single' to='/ProdNav/6' onClick={this.handleClick}>Gifts</Link>
                    </div>
                    <div className={this.state.dropContainer + ' cart'}>
                        <Link className='drop-hover single' to='/Cart' onClick={this.handleClick}>My Cart</Link>
                    </div>
                {/* </nav> */}
            </div>
        )
    }
}

export default Nav