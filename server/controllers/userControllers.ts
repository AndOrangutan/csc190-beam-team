import asyncHandler from 'express-async-handler';

import { supabase } from '../server';

const getUsers = asyncHandler(async (req, res) => {
  const { data, error } = await supabase.from('users').select();
  res.send(data);
});

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { data, error } = await supabase
    .from('users')
    .insert([{ first_name: firstName, last_name: lastName, email }]);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  await supabase.auth.signUp({
    email,
    password,
  });
  // Send a success response
  res.status(200).json({ message: 'User created successfully' });
});

module.exports = { getUsers, registerUser };
