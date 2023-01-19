import {compose} from 'redux'
import LoginPage from './LoginPage'
import {withoutAuthRedirect} from '../../hoc/withoutAuthRedirect'

export default compose(withoutAuthRedirect)(LoginPage)