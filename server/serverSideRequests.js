// polyfill fetch, so works server
require('isomorphic-fetch')
const requestBuilder = require('../lib/requestBuilder')

// get API endpoint from env var
const serverSideRequestBuilder = () => requestBuilder(process.env.SANDBOX_ENDPOINT)

const ssRequests = {
    withErrorCheck: (property, response) => {
        // error check, assuming the endpoint is giving an error property as response at all
        if (!response) {
            return { error: 'The fetch failed :(' }
        } else if (response.error) {
            return { error: response.error }
        } else if (response.message) {
            return { error: response.message }
        } else if (!response[property] || response[property].length === 0) { // weirdly the API is returning an empty array for all fields, even ones not asked for... .-. why?
            return { error: `Did not find ${property} in response.` }
        }

        return response[property]
    },
    /**
     * @date 2020-11-18
     * @param {object} config: { propertyAs: 'QueryParam }
     * @returns {object} { propertyAs: _RESPONSE_ }
     */
    // get list of questions based on language, fall back to ENG-GB for now since selecting language on FE and re-fetching is not essential part of task
    getStandardQuestions: async function (countryLanguageID) {
        const client = serverSideRequestBuilder()
            .setEndpoint('/projects')
            .setMethod('GET')
            .setHeaders()
            .build()

        const request = await client.fetchApi()
        const response = await request.json()
        return this.withErrorCheck('Questions', response)
    },
}

module.exports = ssRequests