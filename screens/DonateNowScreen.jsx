import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import CheckBox from 'expo-checkbox';

const AmountSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount !== null ? amount.toString() : '');
  };

  return (
    <View>
      <Text></Text>
      <Text style={{ fontWeight: 'bold' }}>Your Gift: </Text>
      <View>
        {[10, 25, 50, 100, 250].map((amount) => (
          <TouchableOpacity
            key={amount}
            onPress={() => handleAmountSelection(amount)}
            style={{
              padding: 10,
              margin: 5,
              backgroundColor: selectedAmount === amount ? 'blue' : 'transparent',
            }}>
            <Text style={{ color: selectedAmount === amount ? 'white' : 'black' }}>${amount}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => handleAmountSelection(null)}
          style={{
            padding: 10,
            margin: 5,
            backgroundColor: selectedAmount === null ? 'blue' : 'transparent',
          }}>
          <Text style={{ color: selectedAmount === null ? 'white' : 'black' }}>Other</Text>
        </TouchableOpacity>
      </View>
      <Text>Amount to charge:</Text>
      <TextInput
        value={customAmount}
        onChangeText={(text) => setCustomAmount(text)}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
    </View>
  );
};

const CheckboxWithInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>Make this a periodic or recurring gift?</Text>
      </View>
      {isChecked && (
        <View>
          <TextInput
            placeholder="Frequency(Monthly or Annuary)"
            onChangeText={(text) => setInputValue(text)}
          />
          <TextInput
            placeholder="Payment Start Date:"
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
      )}
    </View>
  );
};

const GiftTribute = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>Make this a Tribute/Memorial gift</Text>
      </View>
      {isChecked && (
        <View>
          <TextInput placeholder="Special Tribute:*" onChangeText={(text) => setInputValue(text)} />
          <TextInput placeholder="Tribute Date:*" onChangeText={(text) => setInputValue(text)} />
          <TextInput
            placeholder="Honoree First Name:* "
            onChangeText={(text) => setInputValue(text)}
          />
          <TextInput
            placeholder="Honoree Last Name:*  "
            onChangeText={(text) => setInputValue(text)}
          />
          <TextInput
            placeholder="Sentiment Message:* "
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
      )}
    </View>
  );
};

const GiftMatched = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>Enter the name of employer/business</Text>
      </View>
      {isChecked && (
        <View>
          <TextInput
            placeholder="Company or Organization Name:*"
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
      )}
    </View>
  );
};

const LastCheckBox1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>Make this a periodic or recurring gift?</Text>
      </View>
    </View>
  );
};

const LastCheckBox2 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>In the future, it is Ok to contact me by Mail</Text>
      </View>
    </View>
  );
};

const LastCheckBox3 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>In the future, it is Ok to contact me by Phone</Text>
      </View>
    </View>
  );
};

const LastCheckBox4 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>It is Ok to contact me for future donations</Text>
      </View>
    </View>
  );
};

const LastCheckBox5 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>NOT to be contacted</Text>
      </View>
    </View>
  );
};

const ProcessingFee = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setInputValue('');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
        <Text>I'd like to cover processing fee.</Text>
      </View>
    </View>
  );
};

const DonateNowScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View>
        <Image source={require('../assets/DonateNow.jpg')} style={{ width: '100%', height: 200 }} />
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 12, marginBottom: 10, fontWeight: 'bold' }}>
          The American River Parkway symbolizes something different for everyone: a place for
          recreation, family reunions, exploring or solitude. Your tax-deductible gift supports
          Sacramento’s best recreational asset through the American River Parkway Foundation’s
          volunteer programs, habitat restoration efforts, fire mitigation and environmental
          education. Fill out the form below with your information to donate.
        </Text>

        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Want to send a check instead?</Text>Make your check
          payable to <Text style={{ fontWeight: 'bold' }}>ARPF</Text> and note{' '}
          <Text style={{ fontWeight: 'bold' }}>Donation</Text> in the For section. Mail your check
          to:
        </Text>
        <Text style={{ fontWeight: 'bold' }}>ARPF</Text>
        <Text></Text>
        <Text style={{ fontSize: 9 }}>5700 Arden Way </Text>
        <Text></Text>
        <Text style={{ fontSize: 9 }}>Carmichael, CA 95608</Text>
        <Text></Text>
        <Text style={{ fontSize: 9 }}>
          Questions? Call our offices at (916) 486-2773 or email
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            onPress={() => Linking.openURL('mailto:info@arpf.org')}>
            {' '}
            info@arpf.org
          </Text>
        </Text>

        <AmountSelector />

        <Text style={{ fontWeight: 'bold' }}>
          Would you like to make this a periodic or recurring gift?
        </Text>
        <CheckboxWithInput />
        <Text></Text>

        <Text style={{ fontWeight: 'bold' }}>
          Is this gift a tribute, in memory or honor of someone?
        </Text>
        <GiftTribute />
        <Text></Text>

        <Text style={{ fontWeight: 'bold' }}>Will this gift be matched?</Text>
        <GiftMatched />
        <Text></Text>

        <Text style={{ fontWeight: 'bold' }}>Personal Information</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="First Name:*"
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Last Name:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Company or Organization Name:"
        />

        <Text style={{ fontWeight: 'bold' }}>Contact Information</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Email:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Phone:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Country:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Address:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="City:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="State:*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Zip: *"
        />

        <LastCheckBox1 />
        <LastCheckBox2 />
        <LastCheckBox3 />
        <LastCheckBox4 />
        <LastCheckBox5 />
        <Text></Text>

        <Text style={{ fontWeight: 'bold' }}>Payment Information</Text>
        <PickOptions />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Name On Card: *"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Card Number:`*"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Card Expiry: *"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="CVV: *"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Gift Comments:"
        />

        <ProcessingFee />
        <Text></Text>
        <Button title="SUBMIT" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const PickOptions = () => {
  const [selectedOption, setSelectedOption] = useState('Visa');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <ScrollView horizontal>
        <TouchableOpacity onPress={() => handleOptionSelect('Visa')}>
          <View style={selectedOption === 'Visa' ? styles.selectedOption : styles.option}>
            <Text>Visa</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOptionSelect('Master')}>
          <View style={selectedOption === 'Master' ? styles.selectedOption : styles.option}>
            <Text>Mastercard</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOptionSelect('AMX')}>
          <View style={selectedOption === 'AMX' ? styles.selectedOption : styles.option}>
            <Text>Amex</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = {
  option: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedOption: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
  },
};

export default DonateNowScreen;
