import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodForm = ({ onSubmit, editedFood }) => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedFood) {
      const updatedFood = { ...editedFood, nama, deskripsi, lokasi, review };
      onSubmit(updatedFood);
    } else {
      const newFood = { nama, deskripsi, lokasi, review };
      onSubmit(newFood);
    }
    setNama('');
    setDeskripsi('');
    setLokasi('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editedFood ? 'Edit Food' : 'Add Food'}</h2>
      <div className="form-group">
        <label htmlFor="nama">Nama      :</label>
        <input
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deskripsi">Deskripsi  :</label>
        <textarea
          id="deskripsi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="lokasi">Lokasi      :</label>
        <input
          type="text"
          id="lokasi"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="review">Review      :</label>
        <input
          type="number"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">{editedFood ? 'Update Food' : 'Add Food'}</button>
    </form>
  );
};

const FoodList = ({ food, onDelete, onEdit }) => {
  if (!Array.isArray(food) || food.length === 0) {
    return <p>No food available.</p>;
  }

  return (
    <div className="tabel">
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Lokasi</th>
            <th>Deskripsi</th>
            <th>Review</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {food.map((makanan) => (
            <tr key={makanan.id}>
              <td>{makanan.nama}</td>
              <td>{makanan.lokasi}</td>
              <td>{makanan.deskripsi}</td>
              <td>{makanan.review} / 10</td>
              <td>
                <button onClick={() => onEdit(makanan)}>Edit</button>
                <button onClick={() => onDelete(makanan.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Food = ({ data }) => {
  const [food, setFood] = useState(data);
  const [editedFood, setEditedFood] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      setFood(data);
    } else {
      fetchFood();
    }
  }, [data]);

  const fetchFood = async () => {
    try {
      const response = await axios.get('/api/food');
      setFood(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (makanan) => {
    setEditedFood(makanan);
  };

  const addFood = async (makanan) => {
    try {
      const response = await axios.post('/api/food', makanan);
      const newFood = response.data;
      setFood((prevFood) => [...prevFood, newFood]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFood = async (updatedFood) => {
    try {
      const response = await axios.put(`/api/food/${updatedFood.id}`, updatedFood);
      const updatedFoodData = response.data;
      setFood((prevFood) =>
        prevFood.map((makanan) => (makanan.id === updatedFoodData.id ? updatedFoodData : makanan))
      );
      setEditedFood(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(`/api/food/${id}`);
      setFood((prevFood) => prevFood.filter((makanan) => makanan.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="halaman">
      <h2 id='judulList'>Food List</h2>
      <FoodForm onSubmit={editedFood ? updateFood : addFood} editedFood={editedFood} />
      <h2>Food</h2>
      <FoodList food={food} onDelete={deleteFood} onEdit={handleEdit} />
    </div>
  );
};

export default Food;
