import { compose } from 'redux'
import { connect } from 'react-redux'

// Load components
import ListSurveys from 'components/ListSurveys/ListSurveys'
import Error from '~/components/Error/Error'

// Load hoc
import withError from '~/hoc/Error/withError'
import withPropDispatch from '~/hoc/Data/withPropDispatch'

// Load actions
import { requestSearchSurveyPending, searchSurveyReset as onClose } from 'redux/searchSurveys/searchSurveys.actions'

// this error repalces a component part of overlay (which on LayoutBase is placed above all) so make it absolute so not to push anything else in flow
const customErrorStyles = {  
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 'overlay'
}

const mapStateToProps = (state) => ({
  isLoading: state.searchSurveyReducer.isPending,
  surveys: state.searchSurveyReducer.surveys,
  hasError: state.searchSurveyReducer.error,
})

// before opening a modal, on lotteryBets.container action is set to dispatch a fetch for bet details, so no useDispatch here
const ListSurveysContainer = compose(
  connect(mapStateToProps),
  // we can make use of this hoc to dispatch a request for surveys if supplierCode passes as prop! But we're dispatching the search action from Search so the check gate will never pass
  withPropDispatch(requestSearchSurveyPending, 'supplierCode', ((val) => !!val && val.toString().length > 0 && val !== 'no-need-see-why')),
  withError({ ErrorComponent: Error, customStyles: customErrorStyles, onClose }),
)(ListSurveys)

export default ListSurveysContainer
