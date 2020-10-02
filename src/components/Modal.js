import React, {useContext} from 'react';
import PlaylistsContext from "../context/PlaylistsContext";

export default function Modal() {
  const { modal } = useContext(PlaylistsContext);

  return (
    <div className="modal fade" id="modalPrincipal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{modal.tituloModal}</h5>
          </div>
          <div className="modal-body">
            {modal.textoModal}
          </div>
        </div>
      </div>
    </div>
  )
}
