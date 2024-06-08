import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';


const Product = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const send = (item) => {
        dispatch(ADD(item))
        alert("Item added successfully")
    }
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
    }
    const Loading = () => {
        return (
            <div className="d-flex justify-content-center my-4">
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
            </div>
        )
    }
    const ShowProduct = () => {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <img src={product.image} alt={product.image} className="img-fluid" style={{ maxWidth: '60%', height: 'auto' }} />

                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                        <h4 className='text-uppercase'>{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className='fw-bolder'>Rating {product.rating && product.rating.rate}</p>
                        <h3>$ {product.price}</h3>
                        <p>{product.description}</p>
                        <Button onClick={() => send(product)} variant="dark">Add to Cart</Button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}

export default Product