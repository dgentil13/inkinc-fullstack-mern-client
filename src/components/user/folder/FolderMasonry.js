import React from 'react';
import axios from 'axios'

const FolderMasonry = (props) => {
  const deleteFolder = (folder) => {
    axios.put(`${process.env.REACT_APP_API_URL}/api/folder/${props.detailsProps.match.params.id}/remove/${props.data._id}`, {}, { withCredentials: true })
      .then(() => {
        props.updateFolderInfo();
        // axios.get(`${process.env.REACT_APP_API_URL}/api/user`, {withCredentials: true})
        //   .then((response) => {
        //     let data = response.data;
        //     props.detailsProps.getUser(data)
        //   })
        //   .catch(err => console.log(err));
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return(
    <div className="search-grid-image-wrapper">
      <img width="100%" src={props.data.image} className="search-grid-image" alt={props.data.name} />
      {<div className="search-grid-overlay" onClick={(f) => deleteFolder(props.data._id)}><img src="/images/trash-solid.svg" className="trash-ico"/></div>}
    </div>
  );
}

export default FolderMasonry;
