import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFFFFFF",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    }, 
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formlabel:{
            colort: "#0000000",
            fontSize: 18,
            paddingLeft: 20
        },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems:"center",
        justifyContent: "center",
        width: "90%",
        backgroundColor:"#FF0043",
        paddingBottom: 14,
        paddingTop: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textbuttonCalculator: {
        fontSize: 20,
        color:"#FFFFFFF"
    },
    erroMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },
    boxSharedbutton: {
        width: "100%",
        alignItems: 'center',
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    }
    

});

export default style