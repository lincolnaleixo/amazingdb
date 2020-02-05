const fs = require('fs')

class db {

	save(file, content) {

		try {

			fs.writeFileSync(file, content)

			return true

		} catch (error) {

			console.log(`Error on save: ${error}`)

		}

		return false

	}

	select(file) {

		try {

			return fs.readFileSync(file)

		} catch (error) {

			console.log(`Error on select db: ${error}`)

		}

		return false

	}

}

module.exports = db
