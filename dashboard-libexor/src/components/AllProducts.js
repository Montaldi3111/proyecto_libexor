import React,{Component} from 'react'

class AllProducts extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/allProducts')
        .then((response) => response.json()).then(data => {
            this.setState(
                {count: data.count})
        }).catch(err => console.log(err))
    }
    render() {
        if(this.props.estado === 1){
            return(
                <div className='active'>
                <h4>Cantidad total de productos: {this.state.count}</h4>
                </div>
            )
        } else {
            return(
                <div className='hidden'>
                <h4>Cantidad total de productos: {this.state.count}</h4>
                </div>
            )
        }
        
    }
}

export default AllProducts
