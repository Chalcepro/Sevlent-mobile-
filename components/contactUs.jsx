import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

// Configure your API client
const apiService = axios.create({
  baseURL: 'http://10.0.2.2:8000/api', // Use 10.0.2.2 for Android emulator to access localhost
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});

// API helper functions
const submitContact = async (payload) => {
  try {
    const response = await apiService.post('/contacts', payload);
    return response.data;
  } catch (error) {
    console.error('Submit Error:', error);
    throw new Error(error.response?.data?.message || 'Failed to submit contact');
  }
};

const fetchContacts = async () => {
  try {
    const response = await apiService.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch contacts');
  }
};



export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const loadContacts = async () => {
      try {
        setLoading(true);
        const data = await fetchContacts();
        setSubmissions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Load Error:', error);
        Alert.alert(
          'Error',
          'Could not load contacts. Please check your connection.'
        );
      } finally {
        setLoading(false);
      }
    };

    loadContacts();
  }, []);


  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.comments) {
      Alert.alert('Validation Error', 'Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      // Map 'comments' to 'message' for Laravel
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.comments,
      };

      await submitContact(payload);
      Alert.alert('Success', 'Form submitted successfully!');
      setSubmissions(prev => [payload, ...prev]);
      setForm({ name: '', email: '', phone: '', comments: '' });
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      Alert.alert('Submission Error', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Contact Us</Text>

        {['name','email','phone','comments'].map((field) => (
          <View key={field} style={{ marginBottom: 10 }}>
            <Text style={styles.label}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Text>
            <TextInput
              placeholder={field === 'comments' ? 'Your comments…' : field}
              placeholderTextColor="#aaa"
              keyboardType={
                field === 'email' ? 'email-address'
                : field === 'phone' ? 'phone-pad'
                : 'default'
              }
              multiline={field === 'comments'}
              numberOfLines={field === 'comments' ? 4 : 1}
              style={[
                styles.input,
                field === 'comments' && styles.textArea,
              ]}
              value={form[field]}
              onChangeText={t => handleChange(field, t)}
            />
          </View>
        ))}

        <TouchableOpacity
          style={[
            styles.submitButton,
            loading && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.submitButtonText}>
            {loading ? 'Submitting…' : 'Submit'}
          </Text>
        </TouchableOpacity>

        {submissions.length > 0 && (
          <>
            <Text style={styles.subHeader}>Submissions:</Text>
            <FlatList
              data={submissions}
              keyExtractor={(item, i) => String(i)}
              renderItem={({ item, index }) => (
                <View style={styles.submission}>
                  <Text>#{index + 1}</Text>
                  <Text>Name: {item.name}</Text>
                  <Text>Email: {item.email}</Text>
                  <Text>Phone: {item.phone}</Text>
                  <Text>Message: {item.message}</Text>
                </View>
              )}
            />
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
    flexGrow: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: 'white',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    borderColor: '#555',
    color: 'white',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    color: 'white',
  },
  submission: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
  },
});
