import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")
        setData(await response.json())
        setFilter(data)
        setLoading(false)
    }

    const Loading = () => {
        return (
            <div className="mt-4 text-center">
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

    const filterProduct = (cat) => {
        const updatedItems = data.filter((item) => item.category === cat)
        setFilter(updatedItems)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex flex-wrap justify-content-center mb-4">
                    <Button onClick={() => setFilter(data)} className='me-2 mb-2' variant="outline-dark">All Brands</Button>
                    <Button onClick={() => filterProduct("men's clothing")} className='me-2 mb-2' variant="outline-dark">Men</Button>
                    <Button onClick={() => filterProduct("women's clothing")} className='me-2 mb-2' variant="outline-dark">Women</Button>
                    <Button onClick={() => filterProduct("jewelery")} className='me-2 mb-2' variant="outline-dark">Jewelery</Button>
                    <Button onClick={() => filterProduct("electronics")} className='me-2 mb-2' variant="outline-dark">Electronics</Button>
                    <Button as={Link} to="./Productlists" variant="outline-dark" className="me-2 mb-2">All Products</Button>
                </div>
                <div className="row justify-content-center">
                    {filter.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5" key={item.id}>
                            <Card className="border border-dark h-100">
                                <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'contain' }} />
                                <Card.Body>
                                    <Card.Title>{item.title.substring(0, 12)}</Card.Title>
                                    <Card.Text className='fw-bold'>
                                        $ {item.price}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.description.substring(0, 50)}...
                                    </Card.Text>
                                    <Card.Text>
                                        Rating: {item.rating.rate} ({item.rating.count})
                                    </Card.Text>
                                    <Link to={`/products/${item.id}`}> <Button variant="dark">View Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 text-center'>Shop with us</h1>
                        <hr />
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products