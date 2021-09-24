import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    additemContainer:{
        position: 'absolute',
        width: '500px',
        height: '600px',
        left: '555px',
        top: '150x',
        background: '#FFFFFF',
        boxShadow: '0px 50px 60px -25px rgba(77, 108, 203, 0.31)',
        borderRadius: '2px'
    },
    addNewProduct:{
    position: 'absolute',
    width: '500px',
    height: '36px',
    top: '10px',
    fontFamily:' IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '36px',
    textAlign:'center',

    },
    ProductName:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'absolute',
        height: '50px',
        left: '33.06%',
        right: '39.06%',
        outline:'none',
        top: '80px'
    },
    Quantity:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'absolute',
        height: '50px',
        left: '33.06%',
        right: '39.06%', 
        outline:'none', 
        top: '150px'
    },
    From:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'absolute',
        height: '50px',
        left: '33.06%',
        right: '39.06%', 
        outline:'none', 
        top: '220px'
    },
    Phone:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        position: 'absolute',
        height: '50px',
        left: '33.06%',
        right: '39.06%', 
        outline:'none', 
        top: '220px'
    },
    Price:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        outline:'none',
        position: 'absolute',
        height: '50px',
        left: '33.06%',
        right: '39.06%',  
        top: '290px'
    },
    AddBtn:{
        position: 'absolute',
        width: '165px',
        height: '51px',
        left: '300px',
        top: '420px',
        borderRadius:'3px'
    },
    CancelBtn:{
        position: 'absolute',
        width: '165px',
        height: '51px',
        left: '100px',
        top: '420px',
        borderRadius:'3px'
    }
})