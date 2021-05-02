const Dotenv = require('dotenv-webpack')

module.exports = {

    weback: config =>{

        config.plugins.push(new Dotenv({silent: true}))
        return config
    }
}