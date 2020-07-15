import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {SupportStyle, Styles} from '../styles';

const Support = () => {
    const [form, setForm] = useState({
        email: '',
        msg: ''
    });
    const onChangeEmail = text => setForm({...form, email: text}); 
    const onChangeMsg = text => setForm({...form, msg: text}); 

    const submitForm = () => {
        const {email, msg} = form;
        if(email === '' || msg === ''){
            alert('Both Fields Are Required.');
        }else{
            alert('Thank You For Contacting Us,\r\nYour Message Has Been Received And We Will Be In Touch With You Soon.')
            setForm({
                email: '',
                msg: ''
            })
        }
    }

    return (
        <View style={SupportStyle.container}>
            <Text style={Styles.heading}>Contact VOJ WebTech</Text>
            <View style={SupportStyle.formWrapper}>
                <TextInput 
                    style={SupportStyle.emailInput} 
                    placeholder="Enter Your Message" 
                    value={form.email} 
                    keyboardType="email-address" 
                    autoCompleteType="email"
                    onChange={onChangeEmail}
                    />
                <TextInput 
                    style={SupportStyle.msgInput} 
                    placeholder={`Enter Your Message Here`} 
                    value={form.msg}
                    onChange={onChangeMsg}
                    multiline={true}
                    />
                <Button title="Submit" onPress={submitForm}/>
            </View>
        </View>
    )
}

export default Support ;

