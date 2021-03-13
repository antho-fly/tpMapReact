const mapReducer = (state, action) => {
    const {type,data} = action;
    switch (type) {
    case 'addMarker':
    return {...state, markers: [...state.markers,{id:Date.now(),coords:data.marker}]};
    case 'deleteMarker':

    return {...state,markers:[...state.markers.filter(o=> o.id != data.id)]};
    default:
    return {...state}
    }
   }

export default mapReducer