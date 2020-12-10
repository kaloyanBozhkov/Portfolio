import React from 'react'

// Pro incons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingBag,
  faSearch,
  faTimes,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const Icon = ({ icon }) => {
  switch (icon) {
    case 'user':
      return <FontAwesomeIcon icon={faUser} />
    case 'shopping-bag':
      return <FontAwesomeIcon icon={faShoppingBag} />
    case 'search':
      return <FontAwesomeIcon icon={faSearch} />
    case 'times':
      return <FontAwesomeIcon icon={faTimes} />
    case 'chevronRight':
      return <FontAwesomeIcon icon={faChevronRight} />
    default:
      return <i>Icon not found</i>
  }
}

export default Icon
