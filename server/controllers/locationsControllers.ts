import asyncHandler from 'express-async-handler';

import { supabase } from '../server';

const createLocation = asyncHandler(async (req, res) => {
  const { name, data } = req.body;
  if (!name || !data) {
    res.status(400).json({ error: 'Please fill all fields' });
    return;
  }

  const locationExist = await supabase.from('locations').select().eq('name', name);
  if (locationExist.data && locationExist.data.length > 0) {
    res.status(400).json({ error: 'Location already exists' });
    return;
  }
  const locationInfo = await supabase.from('locations').insert({
    name,
    data,
  });

  res.status(200).json({ message: 'Location created successfully', locationInfo });
});

const getLocations = asyncHandler(async (req, res) => {
  const { data, error } = await supabase.from('locations').select();
  res.send(data);
});

// Not added yet because I'm not really sure how we would want to do it
const deleteLocations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('locations').delete().eq('id', id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'Locations deleted successfully', data });
});

const updateLocation = asyncHandler(async (req, res) => {
  const { id, name, data } = req.body;

  const { error } = await supabase
    .from('locations')
    .update({
      name,
      data,
    })
    .eq('id', id);
  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }
  res.status(200).json({ message: 'Location updated successfully', data });
});

export { createLocation, getLocations, deleteLocations, updateLocation };