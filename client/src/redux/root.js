import { combineReducers } from 'redux';
import modal from './reducers/modal';
import dialogBox from './reducers/dialog.box';
import backdropLoader from './reducers/backdrop';
import globalMessages from './reducers/global.messages';
import initialState from './reducers/initial.state';
import user from './reducers/user';
import doctorSearch from './reducers/doctor.search';
import appointmentForm from './reducers/appointment.form';
const root = combineReducers({
    modal, dialogBox, backdropLoader, globalMessages, initialState, user, doctorSearch, appointmentForm
});

export default root;