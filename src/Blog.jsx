import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blog() {

  return (
    <Container className='blog mt-5 animate'>
      <h3 className='text-center mb-4'>Blog</h3>
      <Row>
        <Col md={6} className='mb-4'>
          <Card>
            <Card.Body>
              <Card.Title>はてなブログ</Card.Title>
              <Card.Text>
                Japanese blogging platform.
              </Card.Text>
              <Button variant='primary' href='https://dagechan.hatenablog.com/?_gl=1*uxzpma*_gcl_au*MjYwMjQ4NTY5LjE3MjIwMTAxNzM.' target='_blank'>
                Visit はてなブログ
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mb-4'>
          <Card>
            <Card.Body>
              <Card.Title>アメブロ</Card.Title>
              <Card.Text>
                About my pet frog.
              </Card.Text>
              <Button variant='primary' href='https://profile.ameba.jp/me' target='_blank'>
                Visit アメブロ
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
