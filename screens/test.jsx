import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sauaodbpjybvwlqeyjqu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdWFvZGJwanlidndscWV5anF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNjc0MjEsImV4cCI6MjAxMDg0MzQyMX0.Mh8nr9mRT0Tcrv2pQtkdjq0ZldGQaRqIeqPhSi6pT0I';

const supabase = createClient(supabaseUrl, supabaseKey);
// Example: Inserting data into a table
const insertData = async () => {
  const { data, error } = await supabase
    .from('your_table_name')
    .insert([{ column1: 'value1', column2: 'value2' }]);
  if (error) console.error('Error inserting data:', error);
  else console.log('Data inserted successfully:', data);
};

// Example: Querying data from a table
const fetchData = async () => {
  const { data, error } = await supabase.from('your_table_name').select().limit(10);
  if (error) console.error('Error fetching data:', error);
  else console.log('Fetched data:', data);
};
