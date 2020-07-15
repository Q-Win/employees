import React from 'react';

const EmployeeDetail = ({employee}) => {
  const {name, email, phone, avatar} = employee;
  //above line does all 4 below lines. We dont have to use props because of the {employee}
  // const name = employee.name
  // const email = employee.email
  // const phone = employee.phone
  // const avatar = employee.avatar

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  )
};

export default EmployeeDetail;
