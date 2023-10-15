import asyncHandler from 'express-async-handler';

import { supabase } from '../server';

const createRoute = asyncHandler(async (req, res) => {
  const { name, data } = req.body;
  if (!name || !data) {
    res.status(400).json({ error: 'Please fill all fields' });
    return;
  }

  const routeExist = await supabase.from('routes').select().eq('name', name);
  if (routeExist.data && routeExist.data.length > 0) {
    res.status(400).json({ error: 'Route already exists' });
    return;
  }
  const routeInfo = await supabase.from('routes').insert({
    name,
    data,
  });

  res.status(200).json({ message: 'Route created successfully', routeInfo });
});

const getRoutes = asyncHandler(async (req, res) => {
  const { data, error } = await supabase.from('routes').select();
  res.send(data);
});

// Not added yet because I'm not really sure how we would want to do it
const deleteRoute = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('routes').delete().eq('id', id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'Route deleted successfully', data });
});

const updateRoute = asyncHandler(async (req, res) => {
  const { id, name, data } = req.body;

  const { error } = await supabase
    .from('routes')
    .update({
      name,
      data,
    })
    .eq('id', id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'Route updated successfully', data });
});

export { createRoute, getRoutes, deleteRoute, updateRoute };
