const config = {
    jira: {
        baseUrl: 'https://[your institution].atlassian.net',
        headers: {
            headers: {
                'Authorization': 'Basic [your token]'
            }
        }
    },
    neo4j: {
        // bolt: bolt://xx.xx.xxx.xxx:xxxx
        bolt: 'bolt://[ip address]:[port]',
        username: '',
        password: ''
    }
}
module.exports = config;
