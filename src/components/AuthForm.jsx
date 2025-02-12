import React,{ useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "freelancer",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };
    return (
        <div>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">{type === "login" ? "Login" : "Register"}</h2>
      {type === "register" && (
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
         )}
         <div className="mb-4">
           <label className="block text-gray-700">Email</label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             className="w-full p-2 border rounded"
             required
           />
         </div>
         <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {type === "register" && (
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>
        </div>
           
        )}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>
        </div>
    );
};

export default AuthForm;