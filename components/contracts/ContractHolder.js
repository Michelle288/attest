import cn from 'classnames'

const ContractHolder = ({ children, index }) => (
  <li
    className={cn(
      (index + 1) % 4 === 0 && 'mr0-ns',
      (index + 1) % 4 !== 0 && 'mr3-ns',
      (index + 1) % 4 === 0 && 'mr0',
      (index + 1) % 4 !== 0 && 'mr0',
      'bg-haus',
      'f5',
      'pa3',
      'mb3'
    )}
  >
    {children}
  </li>
)

export default ContractHolder
