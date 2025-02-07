import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracks, deleteTrack } from '../redux/actions';
import { Toast } from 'primereact/toast';

const Track = () => {
  const [loading, setLoading] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(null);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.tracks);
  const toast = React.useRef(null);
  
  const jwtToken = 'dummy-jwt-token';

  useEffect(() => {
    if (jwtToken) {
      console.log("jwtToken: " + jwtToken);
      dispatch(fetchTracks(jwtToken));
    } else {
      toast.current.show({ severity: 'error', summary: 'No authorization token' });
    }
  }, [dispatch, jwtToken]);

  const handleDelete = (id) => {
    setDeleteInProgress(id);
    if (jwtToken) {
      dispatch(deleteTrack({ trackId: id, jwtToken }))
        .then(() => {
          toast.current.show({ severity: 'success', summary: 'Deleted successfully' });
          setDeleteInProgress(null);
        })
        .catch((error) => {
          toast.current.show({ severity: 'error', summary: 'Error deleting track', detail: error.message });
          setDeleteInProgress(null);
        });
    } else {
      toast.current.show({ severity: 'error', summary: 'No authorization token' });
    }
  };

  return (
    <div className="track-container">
      <Toast ref={toast} />
      <DataTable value={tracks} responsiveLayout="scroll">
        <Column field="name" header="Track Name" sortable/>
        <Column field="artistName" header="Artist Name" sortable/>
        <Column field="albumName" header="Album Name" sortable/>
        <Column
          body={(rowData) => (
            <Button
              label={deleteInProgress === rowData.id ? 'Deleting...' : 'Delete'}
              icon="pi pi-trash"
              className="p-button-danger"
              onClick={() => handleDelete(rowData.id)}
              disabled={deleteInProgress === rowData.id}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default Track;
