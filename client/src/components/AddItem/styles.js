import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    additemContainer:{
        marin:'0',
        display:'flex',
        flexDirection:'row',
        padding:'20px 10px 10px 10px',
        width:'85%',
        background: '#FFFFFF',
        boxShadow: '0px 50px 60px -25px rgba(77, 108, 203, 0.31)',
        borderRadius: '2px',
        position:'fixed',
        marginTop:'-100px',
        background:'#2196f3'
    },
    ProductName:{
        alignItems: 'flex-start',
        padding: '0px',
        height: '30px',
        outline:'none',
        marginRight:'5px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
    },
    Quantity:{
        alignItems: 'flex-start',
        padding: '0px',
        height: '30px', 
        outline:'none', 
        marginRight:'5px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
    },
    From:{
        alignItems: 'flex-start',
        padding: '0px',
        height: '30px', 
        outline:'none', 
        marginRight:'5px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
        
    },
    Owner:{
        alignItems: 'flex-start',
        padding: '0px',
        height: '30px',
        outline:'none',  
        marginRight:'5px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
    },
    Phone:{
        alignItems: 'flex-start',
        padding: '0px',
        height: '30px',
        outline:'none', 
        marginRight:'5px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
    },
    Price:{
        
        alignItems: 'flex-start',
        padding: '0px',
        outline:'none',
        height: '30px',
        textAlign:'center',
        borderRadius: '5px',
        borderStyle:'none'
        
    },
    AddBtn:{
        borderRadius:'3px',
        background:'white',
        color:'#000'
    },
    CancelBtn:{
        marginRight:'10px',
        borderRadius:'3px'
    }
})