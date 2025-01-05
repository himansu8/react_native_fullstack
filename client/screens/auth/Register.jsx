import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/form/InputBox'
import SubmitButton from '../../components/form/SubmitButton'

const Register = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (!name || !email || !password) {
                Alert.alert("Please Fill All Fields");
                setLoading(false);
                return;
            }
            //setLoading(false);
            console.log("Register Data==> ", { name, email, password });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Register</Text>
            <View style={{ marginHorizontal: 20 }}>
                <InputBox title={"NAME"} value={name} setValue={setName} />
                <InputBox title={"EMAIL"} keyboardType="email - address" autoComplete="email" value={email}
                    setValue={setEmail} />
                <InputBox title={"PASSWPORD"} secureTextEntry={true} autoComplete="password" value={password}
                    setValue={setPassword} />
            </View>
            {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
            <SubmitButton
                btnTitle="Register"
                loading={loading}
                handleSubmit={handleSubmit} />

            <Text style={styles.linkText}>
                ALready Register Please{" "}
                <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
                    LOGIN
                </Text>{" "}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1d5c9",
        justifyContent: "center"
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "green",
        marginBottom: 20
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: "#af9f85"
    },
    linkText: {
        textAlign: "center",
      },
      link: {
        color: "red",
      },
})

export default Register