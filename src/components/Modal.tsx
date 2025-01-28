import { useState } from 'react';

const SignupLoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  // State for form fields and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validation logic
    let isValid = true;

    if (!email) {
      setEmailError('Email is required*');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required*');
      isValid = false;
    }

    if (isValid) {
      // Submit the form (you can replace this with actual form submission logic)
      console.log('Form submitted:', { email, password });
      onClose(); // Close the modal after successful submission
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up / Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1 ">{passwordError}</p>}
          </div>
          <div className="flex justify-center gap-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-300 rounded-lg text-lg text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupLoginModal;
