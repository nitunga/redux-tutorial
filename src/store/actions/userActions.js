export const UPDATE_USER='UPDATE_USER'

const fetch_data=(dispatch) =>{
     fetch('http://businesstest.ezytrade.africa/api/adminstrator/get-all-categories')
     .then(res =>res.json())
     .then(res => dispatch({type:UPDATE_USER,payload:res})
     )
}

export default fetch_data