const fs = require('fs')
const jsonpack = require('jsonpack/main')

class db {

	save(file, content, compress) {

		try {

			if (compress) fs.writeFileSync(file, jsonpack.pack(content))
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
			const content = buffer.toString()

			try {

				return jsonpack.unpack(content)

			} catch (e) {

				return JSON.parse(content)

			}

		} catch (error) {

			console.log(`Error on select db: ${error}`)

		}

		return false

	}

}

module.exports = db
