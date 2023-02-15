import * as UserActionCreates from  './user'
import * as TodoActionCreates from  './todo'


export default  {
    ...TodoActionCreates,
    ...UserActionCreates
}