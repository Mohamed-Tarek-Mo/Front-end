import { useState } from "react";

function Folder({ handleInsertNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="mt-3 text-white">
        <div onClick={() => setExpand(!expand)} className="folder">
          <span className="user-select-none">📁 {explorer.name}</span>

          <button
            className="btn btn-outline-light btn-sm mx-1"
            onClick={(e) => handleNewFolder(e, true)}
          >
            Folder +
          </button>
          <button
            className="btn btn-outline-light btn-sm "
            onClick={(e) => handleNewFolder(e, false)}
          >
            File +
          </button>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="my-2">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="my-2"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                key={exp.id}
                explorer={exp}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="d-block my-1 user-select-none">📄 {explorer.name}</span>
    );
  }
}

export default Folder;
