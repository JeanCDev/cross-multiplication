import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f8f9fa',
    },

    header: {
        backgroundColor: '#007bff',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        marginTop: 20,
        fontSize: 70,
        color: '#fff',
        fontFamily: 'Roboto_300Light'
    },

    body: {
        marginHorizontal: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        marginBottom: 25
    },

    input: {
        backgroundColor: '#fff',
        width: '48%',
        fontSize: 37,
        fontFamily: 'Roboto_300Light_Italic',
        borderWidth: 1,
        borderColor: '#c1c1c1',
        borderRadius:8,
        paddingVertical: 5,
        paddingLeft: 8,
        marginRight: 15
    },

    inputDisabled:{
        backgroundColor: '#E6E6E6'
    },

    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:16
    },

    button: {
        width:'48%',
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:25
    },

    buttonClear:{
        backgroundColor: '#dc3545',
    },

    buttonCalc: {
        backgroundColor: '#28A745',
    },

    buttonText:{
        color: '#fff',
        fontSize:30,
        fontFamily: 'Roboto_700Bold_Italic'
    },

    footer: {
        backgroundColor: '#6c757d',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerText: {
        fontFamily: 'Roboto_100Thin_Italic',
        fontSize: 24,
        color: '#fff',
    }
});

export default styles;