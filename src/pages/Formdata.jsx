import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Formdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Details | Swasthik Technology';
    window.scrollTo(0, 0);
  }, []);

  const fetchData = () => {
    axios.get('https://apoorvmathur.online/contact/form-details.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (id) => {
    axios.get(`https://apoorvmathur.online/contact/delete.php?id=${id}`)
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
              data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
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
    </div>
  );
};

export default Formdata;
