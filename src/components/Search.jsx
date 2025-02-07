import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchTracks } from '../redux/SearchAction';
import { selectTrackData } from '../selectors/SearchSelectors';

const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const isButtonDisabled = searchInput.length !== 12; 

  const trackData = useSelector(selectTrackData);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchTracks(searchInput));
  };

  return (
    <div className="search-container">
      <h2>Search Tracks</h2>
      <div className='search-container'>
        <InputText
          value={searchInput}
          onChange={handleInputChange}
          maxLength={12}
          placeholder="Enter ISRC Code"
          className="input-text"
        />
        <Button
          label="Search"
          icon="pi pi-search"
          onClick={handleSearch}
          disabled={isButtonDisabled}
          className="p-button-primary search-button"
        />
      </div>
      <DataTable value={trackData || []} paginator rows={10} className="datatable">
        <Column field="name" header="Track Name" sortable/>
        <Column field="artistName" header="Artist Name" sortable/>
        <Column field="albumName" header="Album Name" sortable/>
        <Column field="explicit" header="Explicit Content" />
        <Column field="playbackSeconds" header="Playback Seconds" />
      </DataTable>
    </div>
  );
};

export default Search;
