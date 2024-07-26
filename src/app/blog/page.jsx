"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'; // Axios for making HTTP requests
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const PostBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(content));
      formData.append('author', author);
      images.forEach((image, index) => {
        formData.append('image', image);
      });

      await axios.post('/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Clear form after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setImages([]);
      setErrorMessage('');
      
      // Optionally, navigate to a different route or display a success message
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <>
    {/* <div className='container-form'>
      <br />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className='form-data'>
      <h2 className='fs-2 text-center text-success'>Post  Blog</h2>
        <label className='fs-6 fw-medium text-dark my-1'>Title:</label>
        <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label className='fs-6 fw-medium text-dark my-1'>Content (JSON array):</label>
        <textarea value={content}   onChange={(e) => setContent(e.target.value)} required />

        <label className='fs-6 fw-medium text-dark my-1'>Author:</label>
        <input type="text" className='input' value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label className='fs-6 fw-medium text-dark my-1'>Upload Images:</label>
        <input type="file" className='my-3 file' onChange={handleImageChange} multiple />

        <button type="submit" className='mt-3'>Post Blog</button>
      </form>
      <br />
      <br />
    </div> */}

    <Container className='p-4'>
      <Row className='d-flex justify-content-center align-items-center mt-5 pt-2'>
        <Col md={6} className=' box-containe d-flex justify-content-center align-items-center p-4'>
        <Form onSubmit={handleSubmit} className='form-content'>
        <h2 className='fs-2 text-center text-dark fw-bolder'>Post Blog</h2>
        {errorMessage && <div className="error text-danger my-3 text-center">{errorMessage}</div>}
                <Form.Group controlId="formEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </Form.Group>
                <br />
                <Form.Group controlId="formPassword">
                  <Form.Label>Content</Form.Label>
                  <Form.Control  as="textarea" value={content} spellCheck="true"  onChange={(e) => setContent(e.target.value)} required />
                </Form.Group>
                <br />
                <Form.Group controlId="formEmail">
                  <Form.Label>Auth</Form.Label>
                  <Form.Control type="text" className='input' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </Form.Group>
                <br />
                <Form.Group controlId="formPassword">
                  <Form.Label>Upload Images:</Form.Label>
                  <Form.Control type="file" className='input'  onChange={handleImageChange} multiple />
                </Form.Group>
                <br />
                <Button type="submit" className='button'> Post Blog</Button>
                {/* <ToastContainer />
                 */}
              </Form>
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default PostBlogForm;
