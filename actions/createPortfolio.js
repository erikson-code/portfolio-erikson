import { useState } from 'react'
export function useApiHandler(apiCall) {


    const [reqState, setReqState] = useState({
        error: null,
        data: null,
        loading: false
    }
    )

    const handler = async (...data) => {

        setReqState({ error: null, data: null, loading: true })

        try {

            const json = await apiCall(...data)
            const Data = await json.data
            if (!(Data.company && Data.companyWebsite &&
                Data.description && Data.endDate &&
                Data.jobTitle && Data.location &&
                Data.startDate && Data.title)) {
                  
                setReqState({ error: "Complete all data!", data: json.data, loading: false })

            }else{
                setReqState({ error: null, data: json.data, loading: false })
                return json.data
            }




        } catch (e) {

            const message = (e.response && e.response.message) || 'Ops, something is wrong...'

            setReqState({ error: message, data: null, loading: false })

            return Promise.reject(message)

        }
    }

    return [handler, { ...reqState }]

}