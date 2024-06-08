import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productlists = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")
        setData(await response.json())
        setLoading(false)
    }

    const Loading = () => {
        return (
            <div className="text-center mt-4">
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

    const ShowProducts = () => {
        const filteredData = data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <Row>
                {filteredData.map((item) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={item.id}>
                        <Card className="border border-dark h-100" style={{ height: '400px' }}>
                            <Card.Img variant="top" style={{ height: '200px' }} src={item.image} />
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
                                <Link to={`/products/${item.id}`}><Button variant="dark">View Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container fluid>
            <Row className="mt-5 mb-3">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </Row>
        </Container>
    )
}

export default Productlists