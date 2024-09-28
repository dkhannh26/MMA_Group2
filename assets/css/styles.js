import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    dragArea: {
        height: 40,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dragText: {
        fontSize: 16,
        color: '#555',
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    box: {
        flex: 1,
        margin: 5,
        padding: 10,
    },
    box2: {
        margin: 2,
        padding: 5,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    mg5: {
        margin: 10
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal: 70,
        overflow: 'hidden',
        padding: 12,
    },
    txtButton: {
        color: 'white', textAlign: 'center',
    },
    boxextra: {
        padding: 20,
        backgroundColor: "gray",
    },
    favorite: {
        position: 'absolute',
        top: 50,
        right: 40,
        zIndex: 10,
    },
    container2: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    avatarContainer: {
        marginRight: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
    },
    feedback: {
        fontSize: 14,
        color: '#666',
    },
    input: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        height: 100
    },
    star: {
        flexDirection: 'row',
    }
});

export default styles;
