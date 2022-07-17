// Ana Yapı
class TodoApp extends React.Component {
    // this özelliğini kaybeden fonksiyonlara tekrar this özelliği kazandırıyoruz
    constructor(props) {
        super(props)
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('items')
        const items = JSON.parse(json)

        if(items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }
    }

    componentWillUnmount() {
        console.log("Component Deleted!")
    }

    // FONKSİYONLAR

    // temizleme fonksiyonu
     clearItems() {
        this.setState({
            items: []
        })
    }

    // ekleme fonksiyonu
    addItem(item) {
        if(!item) {
            return "Please enter any todo..."
        } else if(this.state.items.indexOf(item) > -1) {
            return "You cannot add same todo!"
        }
        this.setState((prevState) => {
            return {items : prevState.items.concat(item)}
        })
    }

    // silme fonksiyonu
    deleteItem(item){
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i 
            })
            return {
                items: arr
            }
        })
    }

    render(){
        const app = {
            title: "Todo Application",
            description: "Write todos below...",
        }
        return (
            <div>
                <Header title={app.title} description={app.description} />
                <Action addItem = {this.addItem}/>
                <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className='description'>{props.description}</div>
        </div>
    )
}

const TodoList = (props) => {
    return (
        <ul>
        {
            props.items.map((item,index) =>
                <TodoItem className='items' deleteItem={props.deleteItem} key={index} item={item}/>
            )
        }
        <br />
        <div>
            <button className='clear' onClick={props.clearItems}>Clear Todos</button>
        </div>
        </ul>
    )
}

const TodoItem = (props) => {
    return (
        <li> 
            <button className='delete' onClick={() => props.deleteItem(props.item)}>X</button>
            {props.item}
        </li>
    )
}


// Action kısmı, butonlar ve formlar
class Action extends React.Component {
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this) // this özelliği kaybolan yapılara tekrar this özelliği kazandırmak için binding işlemi
        this.state = { // state ile ekleme yapacağımız alana erişiyoruz (state özel bir addır değişmez)
            error: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItem(item)
        this.setState({
            error:error
        })
        e.target.elements.txtItem.value = ""
    }
    render() {
        return (
            <div>
                {this.state.error && <label>{this.state.error}</label>}
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='txtItem'/>
                    <button type='submit'>Add Item</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))


// CLASS İLE YAPIMI

// Başlık Kısmı
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div className='description'>{this.props.description}</div>
//             </div>
//         )
//     }
// }



// Todo Liste Kısmı
// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//             {
//                 this.props.items.map((item,index) =>
//                     <TodoItem className='items' deleteItem={this.props.deleteItem} key={index} item={item}/>
//                 )
//             }
//             <br />
//             <div>
//                 <button className='clear' onClick={this.props.clearItems}>Clear Todos</button>
//             </div>
//             </ul>
//         )
//     }
// }


// Todo Listedeki Itemler
// class TodoItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.deleteItem = this.deleteItem.bind(this);  // this özelliği kaybolan yapılara tekrar this özelliği kazandırmak için binding işlemi
//     }
//     render() {
//         return (
//             <li> 
//                 <button className='delete' onClick={() => this.props.deleteItem(this.props.item)}>X</button>
//                 {this.props.item}
//             </li>
//         )
//     }
// }