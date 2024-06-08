import React, { useState, useEffect } from "react";

const EditUserForm = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address.street);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address.street);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      email,
      address: {
        ...user.address,
        street: address
      },
    };
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUserForm;
