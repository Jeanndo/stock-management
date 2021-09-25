import {makeStyles} from "@mui/styles"

export const useStyles = makeStyles({
    StockContainer:{
        padding:'30px',
        position: 'absolute',
        width: '800px',
        height: '400px',
        left: '400px',
        top: '150x',
        background: '#FFFFFF',
        boxShadow: '0px 50px 60px -25px rgba(77, 108, 203, 0.31)',
        borderRadius: '2px' 
    },
    stockUpperPart:{
        display:"flex",
        flexDirection:'row'
    },
    users:{
        borderRadius:'100%',
        width:'300px',
        marginLeft:'40px',
        marginRight:'20px',
        height:'300px',
        backgroundColor:'#39c3ff',
        textAlign:'center'
    },
    Products:{
        borderRadius:'100%',
        width:'300px',
        height:'300px',
        backgroundColor:'#757de8',
        textAlign:'center'
    },
    heading1:{
        marginTop:'120px',
        fontWeight:400,
        fontSize:'25px',
        lineHeight:1.7,
        textAlign:'center',
        color:'#ffff'
    }
})