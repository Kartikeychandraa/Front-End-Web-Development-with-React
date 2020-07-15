import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';   //  Added about
import Contact from './ContactComponent';
import { Switch , Route , Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state= {
      dishes:DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }


  render() {
    const HomePage =() =>{
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
       />
      );
    }

    const DishWithId =({match}) =>{
     return(
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
     );
    
    }

  return (
    
    

    <div className="App">
      <Header />
      <Switch>
        <Route path="/Home" component = {HomePage} />
        <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />} />
        <Route exact path='/aboutus' component={()=> <About leaders={this.state.leaders} />} />
        <Redirect to="/home" />
      </Switch>
        <Footer />
    </div>
  );
  }
}

export default Main;