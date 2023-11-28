import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://apoorvmathur.online/contact/form-details.php')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://apoorvmathur.online/contact/delete.php?id=${id}`)
      .then(() => {
        fetchData(); // Reload data after delete
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div>
      <h2 className='text-center pt-5 pb-3 mt-5'>Contact Form Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-container">
          <table className="contact-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date / Time</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="6">No data available</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.submission_date}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.message}</td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FormData;
