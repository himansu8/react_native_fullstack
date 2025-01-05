import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SubmitButton from '../../components/form/SubmitButton';
import InputBox from '../../components/form/InputBox';

const Login = ({navigation} ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (!email || !password) {
                Alert.alert("Please Fill All Fields");
                setLoading(false);
                return;
            }
            //setLoading(false);
            console.log("Login Data==> ", { email, password });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Login</Text>
            <View style={{ marginHorizontal: 20 }}>
                <InputBox title={"EMAIL"} keyboardType="email - address" autoComplete="email" value={email}
                    setValue={setEmail} />
                <InputBox title={"PASSWPORD"} secureTextEntry={true} autoComplete="password" value={password}
                    setValue={setPassword} />
            </View>
            {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
            <SubmitButton
                btnTitle="Login"
                loading={loading}
             handleSubmit={handleSubmit} 
            />

            <Text style={styles.linkText}>
                Not A User{" "}
                <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
                    REGISTER
                </Text>{" "}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e1d5c9",
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1e2225",
        marginBottom: 20,
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: "#af9f85",
    },
    linkText: {
        textAlign: "center",
    },
    link: {
        color: "red",
    },
})

export default Login
