/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */
import { createAction } from '@common/reducers/lib/ActionCreator';
import { connect } from 'react-redux';
import { IRootState } from '../../../Definitions';
import Component from '../components/Counter';
import { doubleAsync } from '../modules/counter';
import { Defaults } from './../../../Constants';
import { COUNTER_INCREMENT } from './../modules/counter';

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  doubleAsync,
  increment: () => createAction(COUNTER_INCREMENT, Defaults.Increment),
}

const mapStateToProps = (state: IRootState) => ({
  counter : state.counter,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */
// tslint:disable:no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Component)
