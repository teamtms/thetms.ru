import fs from 'fs'

const name = process.argv[2]
const createInterface = !process.argv.includes('--no-props')
const createStyles = !process.argv.includes('--no-styles')
const defaultExport = process.argv.includes('--default')
const root = `src/components/${name}`

if (fs.existsSync(root)) { throw (`В папке components уже присутствует папка ${name}`) }

fs.mkdirSync(root, cb);

fs.writeFileSync(`${root}/${name}.component.tsx`,
	`${createStyles ? `import styles from './${name}.module.scss'\n` : ''}${createStyles && !createInterface ? '\n' : ''}${createInterface ? `import type { ${name}Props } from './${name}.props.ts'\n\n` : ''}${!defaultExport ? 'export ' : ' '}const ${name} = (${createInterface ? `props: ${name}Props` : ''}) => {
	return (
		<div>

		</div>
	)
}

${defaultExport ? `export default ${name}` : ''}
`, cb); if (createStyles) { fs.writeFileSync(`${root}/${name}.module.scss`, ``, cb) } if (createInterface) {
	fs.writeFileSync(`${root}/${name}.props.ts`, `export interface ${name}Props {
	
}`, cb)
} function cb(e) { console.log(e) }