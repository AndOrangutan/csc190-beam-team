import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

const AboutusScreen = ({ navigation }) => {
  return (
    <View>
      {/* Abous Us dropdown list */}
      <List.Accordion style={{ padding: 30 }} title="About us">
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Mission, Vision, Values and Staff"
          left={(props) => <List.Icon {...props} icon="barley" />}
          onPress={() => {
            navigation.navigate('Mission');
          }}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Board of Directors"
          left={(props) => <List.Icon {...props} icon="clipboard-account-outline" />}
          onPress={() => {}}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Join Email List"
          left={(props) => <List.Icon {...props} icon="email" />}
          onPress={() => {}}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Contact Us"
          left={(props) => <List.Icon {...props} icon="phone" />}
          onPress={() => {}}
        />
      </List.Accordion>

      {/* Get Involved dropdown list */}
      <List.Accordion style={{ padding: 30 }} title="Give to ARPF">
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Donate Now"
          left={(props) => <List.Icon {...props} icon="cash" />}
          onPress={() => {}}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Membership"
          left={(props) => <List.Icon {...props} icon="account" />}
          onPress={() => {}}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Tribute Tables"
          left={(props) => <List.Icon {...props} icon="table" />}
          onPress={() => {}}
        />
        <List.Item
          className="p-6 shadow-md bg-zinc-50"
          title="Mile Stewards"
          left={(props) => <List.Icon {...props} icon="handshake-outline" />}
          onPress={() => {}}
        />
      </List.Accordion>
    </View>
  );
};

export default AboutusScreen;
