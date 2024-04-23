import { useState, ChangeEvent, FormEvent } from 'react';
import { Rating } from '@mui/material';
import axios from 'axios';
import './addBook.css';

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    opinion: '',
    resume: '',
    image_url: '',
    evaluation: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000', formData);

      setFormData({
        title: '',
        opinion: '',
        resume: '',
        image_url: '',
        evaluation: 0,
      });
      alert('> Book regitered!');
    } catch (error) {
      console.error('> Error:', error);
      alert('> Sorry! Try again');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          maxLength={100}
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="opinion"
          maxLength={500}
          placeholder="Opinião"
          value={formData.opinion}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="resume"
          maxLength={500}
          placeholder="Resumo"
          value={formData.resume}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="image_url"
          placeholder="Link da Imagem"
          value={formData.image_url}
          onChange={handleInputChange}
          required
        />

        <Rating
          className='rating'
          value={formData.evaluation}
          precision={1}
          size='large'
          onChange={(_, newValue) => {
            if (newValue != null) {
              setFormData({
                ...formData,
                evaluation: newValue,
              });
            }
          }}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            '& .MuiRating-iconFilled': {
              color: 'yellow',
            },
            '& .MuiRating-iconEmpty': {
              color: 'white',
            },
          }}
        />

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default AddBook;
