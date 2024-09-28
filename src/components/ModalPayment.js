import { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { PaperProvider, RadioButton } from 'react-native-paper';

const PaymentModal = ({ isVisible, onClose }) => {
    const [checked, setChecked] = useState('PayPal');
    // const radioButtons = useMemo(() => ([
    //     {
    //         id: '1',
    //         label: 'Cash on pay',
    //         value: 'Cash on pay'
    //     },
    //     {
    //         id: '2',
    //         label: 'PayPal',
    //         value: 'PayPal'
    //     },
    //     {
    //         id: '3',
    //         label: 'Credit or debit card',
    //         value: 'Credit or debit card'
    //     }
    // ]), []);
    return (
        <PaperProvider>
            <Modal isVisible={isVisible} onBackdropPress={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Select Payment Method</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>×</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.optionContainer}>
                        <View style={styles.option}>
                            <Image
                                source={{ uri: 'https://png.pngtree.com/png-clipart/20230815/original/pngtree-business-acounting-money-logo-vector-cash-logo-background-vector-picture-image_10709611.png' }}
                                style={styles.icon}
                            />
                            <Text style={styles.optionText}>Cash on pay</Text>
                            <RadioButton
                                color='black'
                                value="Cash on pay"
                                status={checked === 'Cash on pay' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Cash on pay')}
                            />
                        </View>

                        <View style={styles.option}>
                            <Image
                                source={{ uri: 'https://rgb.vn/wp-content/uploads/2014/05/rgb_vn_new_branding_paypal_2014_logo_detail.png' }}
                                style={styles.icon}
                            />
                            <Text style={styles.optionText}>PayPal</Text>
                            <RadioButton
                                value="PayPal"
                                status={checked === 'PayPal' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('PayPal')}
                            />
                        </View>

                        <View style={styles.option}>
                            <Image
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMAlSmkkwIuh3aplKwhUbtRlVyiFb8c2xTQ&s' }}
                                style={styles.icon}
                            />
                            <Text style={styles.optionText}>Credit or debit card</Text>
                            <RadioButton
                                value="Credit or debit card"
                                status={checked === 'Credit or debit card' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Credit or debit card')}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.continueButton} onPress={onClose}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 24,
        color: 'black',
    },
    optionContainer: {
        marginVertical: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    optionText: {
        fontSize: 16,
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    continueButton: {
        backgroundColor: '#000',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default PaymentModal;
