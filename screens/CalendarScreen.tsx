// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import * as AuthSession from 'expo-auth-session';

// const CalendarScreen: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const [events, setEvents] = useState<Event[]>([]);
//   const [showNewEventForm, setShowNewEventForm] = useState(false);
//   const [newEventTitle, setNewEventTitle] = useState('');

//   useEffect(() => {
//     const fetchGoogleCalendarEvents = async () => {
//       try {
//         const redirectUrl = AuthSession.makeRedirectUri();
//         const { type, params } = await AuthSession.startAsync({
//           authUrl:
//             `https://accounts.google.com/o/oauth2/auth` +
//             `?client_id=567112323265-hgnv18thbvc9mdsn6ochp1t9e328nirm.apps.googleusercontent.com` +
//             `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
//             `&response_type=token` +
//             `&scope=${encodeURIComponent('https://www.googleapis.com/auth/calendar.readonly')}`,
//         });

//         if (type === 'success' && params.access_token) {
//           const response = await fetch(
//             `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
//             {
//               headers: {
//                 Authorization: `Bearer ${params.access_token}`,
//               },
//             }
//           );
//           const data = await response.json();
//           setEvents(data.items);
//         }
//       } catch (error) {
//         console.error('Error fetching Google Calendar events:', error);
//       }
//     };

//     fetchGoogleCalendarEvents();
//   }, []);

//   const onDayPress = (day: any) => {
//     setSelectedDate(day.dateString);
//     setShowNewEventForm(true);
//   };

//   const onAddNewEvent = () => {
//     if (newEventTitle.trim() === '') {
//       return;
//     }

//     const newEvent: Event = {
//       id: Date.now().toString(),
//       title: newEventTitle,
//       date: selectedDate!,
//     };

//     setEvents((prevEvents) => [...prevEvents, newEvent]);
//     setNewEventTitle('');
//     setShowNewEventForm(false);
//   };

//   const onDeleteEvent = (eventId: string) => {
//     setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
//   };

//   const renderEventsForSelectedDate = () => {
//     const selectedEvents = events.filter((event) => event.date === selectedDate);

//     if (selectedEvents.length === 0) {
//       return <Text>No events for this date.</Text>;
//     }

//     return selectedEvents.map((event) => (
//       <View key={event.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Text>{event.title}</Text>
//         <TouchableOpacity onPress={() => onDeleteEvent(event.id)} style={{ marginLeft: 10 }}>
//           <Text style={{ color: 'red' }}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     ));
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Calendar onDayPress={onDayPress} />

//       {selectedDate && (
//         <View style={{ marginHorizontal: 20 }}>
//           <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
//             Events for {selectedDate}
//           </Text>

//           {renderEventsForSelectedDate()}

//           {showNewEventForm && (
//             <View style={{ marginTop: 10 }}>
//               <Text style={{ fontSize: 16 }}>Add new event:</Text>

//               <View style={{ flexDirection: 'row', marginTop: 5 }}>
//                 <TouchableOpacity onPress={() => setShowNewEventForm(false)}>
//                   <Text style={{ color: 'red', marginRight: 10 }}>Cancel</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={onAddNewEvent}>
//                   <Text style={{ color: 'blue' }}>Save</Text>
//                 </TouchableOpacity>
//               </View>

//               <View style={{ marginTop: 5 }}>
//                 <TextInput
//                   value={newEventTitle}
//                   onChangeText={setNewEventTitle}
//                   placeholder="Event title"
//                 />
//               </View>
//             </View>
//           )}
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CalendarScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://calendar.google.com/calendar/u/0/embed?src=aidiswin@gmail.com&ctz=America/Los_Angeles' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});

export default CalendarScreen;
