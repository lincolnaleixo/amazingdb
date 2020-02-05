const fs = require('fs')

class db {

	save(file, content) {

		try {

			fs.writeFileSync(file, JSON.stringify(content))

			return true

		} catch (error) {

			console.log(`Error on save: ${error}`)

		}

		return false

	}

	select(file) {

		try {

			const buffer = fs.readFileSync(file)

			return JSON.parse(buffer)

		} catch (error) {

			console.log(`Error on select db: ${error}`)

		}

		return false

	}

}

module.exports = db
