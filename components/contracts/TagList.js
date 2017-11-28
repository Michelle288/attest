const TagList = ({ tags }) => (
  <div className='fl'>
    <ul className='list ma0 pa0'>
      {tags.map(tag => (
        <li
          key={tag}
          className='shadow-4 b f6 bg-dark-sur white fl pv1 ph2 mr2 mv1'
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
