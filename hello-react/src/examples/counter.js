class Counter extends React.Component {
        constructor(props){
                 super(props)
                 this.addOne = this.addOne.bind(this)
                 this.minusOne = this.minusOne.bind(this)
                 this.reset = this.reset.bind(this)
                 this.state = {
                        number:0
                 }
        }
        
        addOne() {
                this.setState((prevState) => {
                        return {
                                number: prevState.number + 1
                        }
                })
        }

        minusOne() {
                this.setState((prevState) => {
                        return {
                                number: prevState.number - 1
                        }
                })
        }
        
        reset() {
                this.setState({
                        number: 0
                })
        }

        render() {
                return (
          <div>
                <h1>Number: {this.state.number}</h1>
                <button id='btnPlusOne' onClick={this.addOne}> +1</button>
                <button id='btnMinesOne' onClick={this.minusOne}>-1</button>
                <button id='reset' onClick={this.reset}>Reset</button>
          </div>
                )
        }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))


// Butonlarla Numara Arttırma Azalatma - Data Binding
// var number = 0;

// const addOne = () => {
//         number++
//         renderApp();
// }

// const minusOne = () => {
//         number--
//         renderApp();
// }

// function renderApp() {
//         var template2 = (
//                 <div>
//                         <h1>Number: {number}</h1>
//                         <button id='btnPlusOne' className='btnBlue' onClick={addOne}> +1</button>
//                         <button id='btnMinesOne' className='btnRed' onClick={minusOne}>-1</button>
//                 </div>
//         )
// ReactDOM.render(template2, root)
// }
// renderApp();