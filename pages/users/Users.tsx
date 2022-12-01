import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination';

const Users = ({ resultFromApi }) => {
  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const ModifiedUserst = resultFromApi?.slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  return (
    <div className="container-controls">
      <Link to="/">
        <button className="link-button">Home page</button>
      </Link>

      {ModifiedUserst.length !== 0 ? (
        <div>
          <div style={{ margin: '0 1em' }}>
            {ModifiedUserst.map((data, index) => {
              return (
                <div key={index}>
                  <div className="profile-tile">
                    <div className="pic-tile">
                      <img src={data.picture.medium} alt="dp" />
                    </div>
                    <div className="info-tile">
                      <h4>
                        {data.name.last} {data.name.first}
                      </h4>
                      <div className="info-box" key={index}>
                        <p> {data.email}</p>
                        <p> {data.cell}</p>
                        <Link to={`/use/${data.login.uuid}`}>
                          <button> View profile</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            resultFromApi={resultFromApi}
            setcurrentPage={setcurrentPage}
            postPerPage={postPerPage}
          />
          <br />
          <br />
        </div>
      ) : (
        <div className="loading-state">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Users;
