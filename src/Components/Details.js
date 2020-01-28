import React, {Component} from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.detailsProduct;
                    return (
                        <div className="container py-5">
                            {/*titre*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted textBlue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* fin titre*/}

                            {/* prooduct info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3
                                text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                    {/* product text */}

                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3
                                text-capitalize">
                                    <h2>model : {title} </h2>
                                    <h4 className="text-title text-uppercase
                                    text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">
                                        {company}</span>
                                    </h4>
                                    <h4 className="textBlue">
                                        <strong>
                                            price : {price} <span>€</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        info produit :
                                    </p>

                                    <p className="text-muted lead">
                                        {info} </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Retour aux produits
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart
                                                         disabled={inCart ? true : false}
                                                         onClick={() => {
                                                             value.addToCart(id);
                                                             value.openModal(id);
                                                         }}
                                        >
                                            {inCart ? "En panier" : "Ajouter dans le panier"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
