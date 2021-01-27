import React from 'react';
import { connect } from 'react-redux';
import { changeQuantity } from '../store/cart-reducer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapDispatchToProps = { changeQuantity };

function Cart(props) {
  console.log('Props on Cart:', props);
  
  // Callback functions go here.
  const updateQuantity = (item) => {
    props.changeQuantity(item);
  }

  return (
    <Container maxWidth='md'>
      <Typography variant="h3">
        Your Cart
      </Typography>
      <Card > 
        {props.product.cart.map((item, idx) => (
          <CardContent key={idx}>
            <Typography color="secondary">
              Category: {item.category}
            </Typography>
            <Typography>
              Description: {item.description}
            </Typography>
            <Typography>
              Price: {item.price}
            </Typography>
            <button onClick={()=> updateQuantity(item)}></button>
          </CardContent>
        ))}
      </Card> 
    </Container>
  )
}

const mapStateToProps = (state) => ({
  product: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);