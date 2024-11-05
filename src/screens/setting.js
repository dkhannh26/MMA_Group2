import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';
export default function Setting() {
    const [lng, setLng] = useState('vi')
    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        if (lng === 'vi') {
            i18n.changeLanguage('en');
            setLng('en')
            Alert.alert("Language has been changed to English")
        } else {
            i18n.changeLanguage('vi');
            setLng('vi')
            Alert.alert("Ngôn ngữ đã đổi sang tiếng Việt")
        }

    };

    const settingFeatures = [
        {
            title: t("account"),
            data: [
                {
                    icon: <MaterialIcons name="language" size={19} color="black" />,
                    name: t('changeL'),
                    changeLanguage
                },
                {
                    icon: <Feather name="settings" size={19} color="black" />,
                    name: t('manageAccount')
                },
                {
                    icon: <MaterialIcons name="people-outline" size={19} color="black" />,
                    name: t("inviteFriends")
                },
                {
                    icon: <Feather name="bookmark" size={19} color="black" />,
                    name: t("Saved")
                },
            ]
        },
        {
            title: t("General"),
            data: [
                {
                    icon: <MaterialIcons name="privacy-tip" size={19} color="black" />,
                    name: t("Privacy")
                },
                {
                    icon: <SimpleLineIcons name="lock" size={19} color="black" />,
                    name: t("Term")
                },
                {
                    icon: <Feather name="database" size={19} color="black" />,
                    name: t("Data")
                },
            ]
        },
    ]

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <SectionList
                sections={settingFeatures}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.rowCenter, styles.settingItem]}
                        onPress={() => changeLanguage(lng)}
                    >
                        <View style={styles.rowCenter}>
                            <View style={styles.icon}>{item.icon}</View>
                            <Text style={{
                                marginLeft: 5
                            }}>{item.name}</Text>
                        </View>
                        <AntDesign name="right" size={13} color="black" />
                    </TouchableOpacity>
                )
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.title}>{title}</Text>
                )
                }
                style={styles.sectionList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        backgroundColor: "#f8f4f4",
        borderRadius: 50,
        padding: 5,
        width: 30,
        height: 30
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionList: {
        paddingHorizontal: 15,
        flexGrow: 0
    },
    settingItem: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: "#EFEEEE",
        marginBottom: 10
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        marginVertical: 5
    }
});