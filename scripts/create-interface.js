import fs from 'fs'

const name = process.argv[2]
const file = `src/interfaces/${name}.interface.ts`

if (!fs.existsSync(file)) {
	fs.writeFileSync(file, `export interface I${name} {
	
}`)
}