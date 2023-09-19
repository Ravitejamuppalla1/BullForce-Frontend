import axios from '../config/axios'
import Swal from 'sweetalert2'

export const CREATE_NOMINEE = 'CREATE_NOMINEE'

export const createNominee = (data) => {
    return {
        type: CREATE_NOMINEE,
        payload: data
    }
  }


export const asyncAddNominee = (formData,reset) => {
    return (dispatch) => {
       ( async () => {
            try {
                const result = await axios.post('/api/nominee', formData)
                reset()
                console.log(result.data)
                 dispatch(createNominee(result.data))
                 Swal.fire('Successfully submitted')

            } catch (e) {
                console.log(e.message)
            }
        }

     )()}
}

