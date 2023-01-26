import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#FFFFFFFF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
       
    }, 
    form: {
        width: "100%",

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
    boxSharedButton: {
        width: "100%",
        alignItems: 'center',
        marginBottom: 10,
    },
 
    

});

export default style