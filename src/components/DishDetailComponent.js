import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


class DishDetail extends Component{
        renderDish(dish){
        if(dish == null){
            return(<div></div>);
        }
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }
        const showcmnts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>-- {cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </li>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcmnts}
                </ul>
            </div>
        );
    }

    render(){
        if (this.props.dish) {
            
            const dish = this.props.dish;
            const dishDetail = this.renderDish(dish);
			const dishcomments = this.renderComments(dish.comments);
			
            return (
                <div class="container">
                <div className="row">
                    {dishDetail}
                    {dishcomments}
                </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}      


export default DishDetail;