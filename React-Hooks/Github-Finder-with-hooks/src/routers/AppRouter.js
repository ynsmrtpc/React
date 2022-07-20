import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
    <nav>|
        <NavLink exact activeClassName='active' to="/">Home</NavLink> |
        <NavLink activeClassName='active' to="/contact#email">Contact</NavLink> |
        <NavLink exact activeClassName='active' to="/products">Product</NavLink> |
        <NavLink activeClassName='active' to="/products/16?orderby=price">Product Detail</NavLink> |
    </nav>
    )

const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
)

const HomePage = () => (
    <div>
        <div>Home Page</div>
    </div>
);

const ContactPage = (props) => {
    console.log(props)
    return (
    <div>
        <div>Contact Page</div>
    </div>
    )
}

const ProductPage = () => (
    <div>
        <div>Product Page</div>
    </div>
);

const ProductDetailsPage = (props) => {
    console.log(props)
    return (
        <div>
            <div>Product Details Page</div>
            <div> id :{props.match.params.id}</div>
        </div>
    )
}

const NotFound = () => (
    <div>
        <div>404 Page</div>
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Nav/>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/products" component={ProductPage} />
        <Route path="/products/:id" component={ProductDetailsPage} />
        <Route component={ NotFound }/>
    </Switch>
    </BrowserRouter>
)

export default AppRouter