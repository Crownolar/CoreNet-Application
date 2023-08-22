// import React, { useState } from "react";
// import "./AdminDashCreateWriterNextContent.css";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateformDataWriter } from "../../../../../Redux/ActionState/ActionState";
// import { updateWriter } from "../../../../../Redux/ActionState/ActionState";
// import Loader from "../../../../../Loader/Loader";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// const AdminDashCreateWriterNextContent = ({ editorID }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const formDataWriter = useSelector((state) => state.stores.formDataWriter);
//   const dispatch = useDispatch();
//   const Nav = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const user = useSelector((state) => state.stores.user);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [showPopup, setShowPopup] = useState(false);
//   const [showPopuperror, setShowPopupError] = useState(false);

//   // const EditorId = user.editorId

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateformDataWriter({ [name]: value }));
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const SignUp = (e) => {
//     // e.persist();
//     e.preventDefault();
//     setLoading(true);

//     const errors = {};

//     if (!formDataWriter.FullName) {
//       errors.FirstName = "First Name is required";
//     }

//     if (!formDataWriter.UserName) {
//       errors.UserName = "Username is required";
//     }

//     if (!formDataWriter.Email) {
//       errors.Email = "Email is required";
//     } else if (!isValidEmail(formDataWriter.Email)) {
//       errors.Email = "Invalid email address";
//     }
//     if (!formDataWriter.Password) {
//       errors.Password = "Password is required";
//     }

//     if (Object.keys(errors).length > 0) {
//       setLoading(false);
//       setValidationErrors(errors);
//       return;
//     }

//     const url = `https://corenet-api.onrender.com/api/createwriter/${editorID}`;
//     console.log(url);
//     if (!user.editorId) {
//       console.error("user's editorId is missing!");
//       return;
//     }

//     axios
//       .post(url, formDataWriter)
//       .then((res) => {
//         console.log(res);
//         dispatch(updateWriter(res.data.data));
//         setLoading(false);
//         setShowPopup(true);
//         setTimeout(() => {
//           setShowPopup(false);
//           Nav("/adminpage/adminallwriter");
//         }, 10000);
//         // dispatch(
//         //   updateformDataWriter({
//         //     FullName: "",
//         //     UserName: "",
//         //     Email: "",
//         //     Password: "",
//         //   })
//         // );
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setShowPopupError(true);
//         setTimeout(() => {
//           setShowPopupError(false);
//         }, 10000);
//         setLoading(false);
//         if (error.response) {
//           console.error("Response Data:", error.response.data);
//         }
//       });
//     // console.log(SignUp);
//   };

//   return (
//     <div className="signup-form-container">
//       <h2>Create New Writer</h2>
//       {showPopup && (
//         <div className="popup">
//           <p>Writer Successfully Created</p>
//         </div>
//       )}
//       {showPopuperror && (
//         <div className="popup">
//           <p>Something went wrong!</p>
//         </div>
//       )}
//       <form>
//         {validationErrors.FullName && (
//           <p className="error-message">{validationErrors.FullName}</p>
//         )}
//         <input
//           placeholder="Full Name"
//           type="text"
//           name="FullName"
//           value={formDataWriter.FullName}
//           onChange={handleChange}
//         />
//         {validationErrors.UserName && (
//           <p className="error-message">{validationErrors.UserName}</p>
//         )}
//         <input
//           placeholder="Username"
//           type="text"
//           name="UserName"
//           value={formDataWriter.UserName}
//           onChange={handleChange}
//         />
//         {validationErrors.Email && (
//           <p className="error-message">{validationErrors.Email}</p>
//         )}
//         <input
//           placeholder="Email"
//           type="email"
//           name="Email"
//           value={formDataWriter.Email}
//           onChange={handleChange}
//         />
//         {validationErrors.Password && (
//           <p className="error-message">{validationErrors.Password}</p>
//         )}
//         <input
//           placeholder="Password"
//           type={showPassword ? "text" : "password"}
//           name="Password"
//           value={formDataWriter.Password}
//           onChange={handleChange}
//         />
//         {showPassword ? (
//           <FiEyeOff onClick={() => setShowPassword(false)} className="Show" />
//         ) : (
//           <FiEye onClick={() => setShowPassword(true)} className="Show" />
//         )}
//         <button type="submit" onClick={SignUp}>
//           {loading ? <Loader /> : "Create Writer"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminDashCreateWriterNextContent;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../Loader/Loader";
import "./AdminDashCreateWriterNextContent.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminCreateWriter({ editorID }) {
  const [formDataWriter, setFormDataWriter] = useState({
    FullName: "",
    UserName: "",
    Email: "",
    Password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopuperror, setShowPopupError] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const Nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataWriter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = `https://corenet-api.onrender.com/api/createwriter/${editorID}`;
  const CreateWriter = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, formDataWriter);
      console.log(response.data);
      setLoading(false);
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          Nav("/adminpage/adminallwriter");
        }, 10000);
    } catch (error) {
      console.error(error.response.data);
      setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
      setLoading(false);
      setValidationErrors(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="signup-form-container">
        <h2>Create New Writer</h2>
        {showPopup && (
        <div className="popup">
          <p>Writer Successfully Created</p>
        </div>
      )}
      {showPopuperror && (
        <div className="popup">
          <p>Something went wrong!</p>
        </div>
      )}
        <form>
        {validationErrors.Password && (
          <p className="error-message">{validationErrors.Password}</p>
        )}
          <input
            placeholder="Full Name"
            type="text"
            name="FullName"
            value={formDataWriter.FullName}
            onChange={handleChange}
          />
          {validationErrors.Password && (
          <p className="error-message">{validationErrors.Password}</p>
        )}
          <input
            placeholder="Username"
            type="text"
            name="UserName"
            value={formDataWriter.UserName}
            onChange={handleChange}
          />
          {validationErrors.Password && (
          <p className="error-message">{validationErrors.Password}</p>
        )}
          <input
            placeholder="Email"
            type="email"
            name="Email"
            value={formDataWriter.Email}
            onChange={handleChange}
          />
          {validationErrors.Password && (
          <p className="error-message">{validationErrors.Password}</p>
        )}
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="Password"
            value={formDataWriter.Password}
            onChange={handleChange}
          />
          {showPassword ? (
          <FiEyeOff onClick={() => setShowPassword(false)} className="Show" />
        ) : (
          <FiEye onClick={() => setShowPassword(true)} className="Show" />
        )}
          <button type="submit" onClick={CreateWriter}>
            {loading ? <Loader /> : "Create Writer"}
          </button>
        </form>
      </div>
    </div>
  );
}
