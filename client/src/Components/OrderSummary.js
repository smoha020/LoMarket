import React, { Component} from 'react';


class OrderSummary extends Component {
    constructor(props) {
       super(props) 
    }
    
    render() {
        const { b, increment, decrement, removeItem } = this.props;

        let key = 0;
        return (
            <React.Fragment key={key++}>
                <div className="row ItemsRow">
                    <div className="col s3 pad sum-item"><img src={b.img} className={'image-'+ b.id} alt='none'/></div>
                    <div className="col s3 pad"><p>{b.name}</p>
                        <a className='remove' onClick={removeItem.bind(this, b)} href='#'>Remove</a>
                    </div>
                    <div className="col s3 pad sum-inc">
                        <a onClick={increment.bind(this, b)}  className="mybtn ">+</a>
                            {b.count}
                        <a onClick={decrement.bind(this, b)} className="mybtn ">-</a>
                    </div>
                    <div className="col s3 pad">${b.price}</div>
                </div>
                <div className="divider"></div>
            </React.Fragment>
        )

    }
}


export default OrderSummary