import asyncHandler from 'express-async-handler';

import { supabase } from '../server';

const getUsers = asyncHandler(async (req, res) => {
  const { data, error } = await supabase.from('profiles').select();
  res.send(data);
});

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(400).json({ error: 'Please fill all fields' });
    return;
  }

  // checks if user already exists
  const userExist = await supabase.from('profiles').select().eq('email', email);
  if (userExist.data && userExist.data.length > 0) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  const userInfo = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { firstname: firstname, lastname: lastname },
    },
  });

  // Create user
  // const { data, error } = await supabase
  //   .from('profiles')
  //   .insert([{ firstname: firstName, lastname: lastName }])
  //   .eq('id', userInfo.data.user?.id);
  // if (error) {
  //   res.status(400).json({ error: error.message });
  //   return;
  // }
  // Send a success response
  res.status(200).json({ message: 'User created successfully', userInfo });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.auth.admin.deleteUser(id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'User deleted successfully', data });
});

const updateUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { firstname, lastname },
  });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'User updated successfully', data });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: 'Please fill all fields' });
    return;
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({
    message: 'User logged in successfully',
    data: {
      id: data.user.id,
      email: data.user.email,
      token: data.session.access_token,
      name: data.user.user_metadata.firstname + ' ' + data.user.user_metadata.lastname,
    },
  });
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: 'Please provide an email address' });
    return;
  }
  const userNotExist = await supabase.from('profiles').select().eq('email', email);
  if (userNotExist.data && userNotExist.data.length === 0) {
    res.status(400).json({ error: 'User does not exist'});
    return;
  }
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    console.error('Error initiating password reset:', error);
    res.status(500).json({ error: 'Failed to initiate password reset' });
    return;
  }
  res.status(200).json({ data: data,  message: 'Password reset initiated successfully' });
});

module.exports = { getUsers, registerUser, deleteUser, updateUser, loginUser, forgotPassword };
