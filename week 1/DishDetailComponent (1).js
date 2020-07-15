import React , { Component } from 'react';
import { Card , CardText ,CardTitle ,CardBody ,CardImg , CardImgOverlay } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if(comments == null) {
            return(
                <div>

                </div>
            )
        }
        else
        {
            const comment = comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US' ,{ year:'numeric',month:'long',day:'2-digit',}).format(new Date(comment.date))}</p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">{comment}</ul>
                </div>
            )
        }
    }

    renderDish(dish){
        if(dish!= null)
        {
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            )
        }   
        else
        {
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish
        if(dish == null) {
            return(
                <div>

                </div>
            )
        }
        const dishItem  = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return(
            <div className="row">
                { dishItem }
                { commentItem }
            </div>
        )
    }
}

export default Dishdetail;