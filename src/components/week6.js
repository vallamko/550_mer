import React,{ useState } from 'react';
import './Week6.css';

const Week6 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('guest');

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const WelcomeComponent = () => 
    <div className="welcome">
      <h5>This is ternary</h5> 
    </div>;
  const LoginComponent = () => <div className="login"></div>;
  const UserTypeComponent = ({ type }) => <div className="user-type">User type: {type}</div>;
  
  let outputComponent;
  switch (userType) {
    case 'admin':
      outputComponent = <div>Admin content goes here</div>;
      break;
    case 'user':
      outputComponent = <div>User content goes here</div>;
      break;
    case 'default':
      outputComponent = <div>Default content goes here</div>;
      break;
    default:
      outputComponent = <div>No content available</div>;
  };

  // Define the student details
  const students = [
    {
      rollNo: 1,
      group: 'Science',
      name: 'John',
      subjects: ['Math', 'Physics', 'Biology']
    },
    {
      rollNo: 2,
      group: 'Arts',
      name: 'Emily',
      subjects: ['History', 'Literature', 'Geography']
    }
  ];

  // StudentDetails component to render student information in cards
  const StudentDetails = () => (
    <div className="student-details">
      {/* <h2>Student Details</h2> */}
      {/* Map through the students array and render each student as a card */}
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <h3>Student {index + 1}</h3>
          <p>Roll No: {student.rollNo}</p>
          <p>Group: {student.group}</p>
          <p>Name: {student.name}</p>
          <p>Subjects: {student.subjects.join(', ')}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="parent-container">
      <div className="container1">
        <div className="output">
          <h2>Ternary Operator:</h2>
          {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
          <button onClick={isLoggedIn ? handleLogout : handleToggleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>

          <hr />

          <h2>Logical Operator:</h2>
          {isLoggedIn && <div className="user-info">
            <h5>This is logical</h5>
          </div>}

          <hr />

          <h2>If-Else Condition:</h2>
          {isLoggedIn && <div>
            <h5>This is if else</h5>
          </div>}

          <hr />

          <h2>Switch-Case Condition:</h2>
          {/* Output based on selected user type */}
          {outputComponent}
          {/* Buttons for Switch-Case Condition */}
          <div>
            <button onClick={() => setUserType('admin')}>Set Admin</button>
            <button onClick={() => setUserType('user')}>Set User</button>
            <button onClick={() => setUserType('default')}>Set Default</button>
          </div>
        </div>
      </div>
      
      {/* Render the StudentDetails component */}
      <hr></hr>
      <h2>Student Details</h2>
      <div className="cont2">
       
        <StudentDetails />
      </div>
    </div>
  );
};

export default Week6;