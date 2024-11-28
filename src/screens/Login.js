import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, ingresa el correo y la contraseña.");
      return;
    }

    Alert.alert("Inicio de Sesión", "Sesión iniciada correctamente.");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Iniciar Sesión" onPress={handleLogin} />

      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate("Register")}
      >
        ¿No tienes cuenta? Regístrate
      </Text>

      <Text
        style={styles.forgotText}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: 250,
    alignItems: 'center'
  },
  registerText: {
    color: '#0000ff',
    marginTop: 15,
    textAlign: 'center',
  },
  forgotText: {
    color: '#ff0000',
    marginTop: 10,
    textAlign: 'center',
  },
});
