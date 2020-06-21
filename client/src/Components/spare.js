increment = function(newitem) {

    let newItems = this.state.Itemz.map(item => {
        if(item.id == newitem.id) {
            item.price = item.price + (newitem.price / item.count);
            item.count = newitem.count + 1;
            
            return item
        }else {
            return item
        }
    })
    this.setState({Itemz: newItems})
}

decrement = function(newitem) {
    if(newitem.count > 1){

        let newItems = this.state.Itemz.map(item => {
            if(item.id == newitem.id) {
                item.price = item.price - (newitem.price / item.count);

                item.count = newitem.count - 1;
                return item
            } else {
                return item
            }
        })
        this.setState({Itemz: newItems})
    } else {
        let newItemz = this.state.Itemz.filter(item => {
            return (item.id != newitem.id)
        })
        this.setState({Itemz: newItemz})
        
    }
}

removeItem = function(remItem) {
    let newItemz = this.state.Itemz.filter(item => {
        return (item.id != remItem.id)
    })
    console.log(newItemz);
    this.setState({Itemz: newItemz});
    
}



/* Display*/ 
<div>
                        <img className='air' src={airjordan} alt='jpg'/>
                    </div>
                    <div>
                        <img className='dkny' src={DKNY} alt='jpg'/>
                    </div>
                    <div>
                        <img className='iphone' src={iphone11} alt='jpg'/>
                    </div>
                    <div>
                        <img className='ray' src={rayban} alt='jpg'/>
                    </div>

/*alternative to using different link takgs for products in navbar 
if(props.match.params.num == 4) {
    if(item.id > 12 && item.id < 25) {
        return (
            <div className='prod-item'>
                <Link className='prod-link' to={`/description/${item.id}`}>
                    <img src={item.img} alt='none'/>
                    <p className='prod-name'>{item.name}</p>
                    <p className='prod-price'>${item.price}</p>
                </Link>
            </div>
        )
    }
}*/