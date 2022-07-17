const root = document.getElementById('root');

const app = {
    title: "Todo Application",
    description: "Yapacaklarınızı aşağıya yazın",
    items: ["Ornek Todo-1" ,"Ornek Todo-2"]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const item = e.target.elements.txtItem.value;

    if(item) {
        app.items.push(item)
    }
    e.target.elements.txtItem.value = ""
    render();   
}

const clearItems = () => {
    app.items = []
    render()
}

const render = () => {
    var template = (
    <div>
        <h1 id='header'>{app.title}</h1>
        <div>{app.description}</div>
        <ul>
            {
                app.items.map((item,index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>

        <div>
            <button onClick={clearItems}>Listeyi Temizle</button>
        </div>

        <p>{app.items.length}</p>

        <form onSubmit={onFormSubmit}>
            <input type='text' name='txtItem'/>
            <button type='submit'>Add Item</button>
        </form>
    </div>
    )

    ReactDOM.render(template, root)
}
render();