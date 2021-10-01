  
import { FETCH_USERS,DELETE_USER} from '../actiions/types/actionTypes';


const usersReducer = (users=[],action) => {
    switch(action.type){
        case FETCH_USERS:
            return action.payload;  
            case DELETE_USER:
            return users.filter((user) => user._id !== action.payload);
        default:
        return users;
    }
    
}

export default usersReducer;