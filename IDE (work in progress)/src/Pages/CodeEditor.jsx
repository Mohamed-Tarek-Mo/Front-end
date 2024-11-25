import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@monaco-editor/react";
import { XTerm } from "xterm-for-react";
import Folder from "./../Components/Folder";
import explorer from "../Data/folderData";
import useTraverseTree from "./../Hooks/use-traverse-tree";

export default function CodeEditor() {
  /*
      Fectch or Get data from API and 

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/10")
    .then((response)=>{
      // console.log(response);
      setLoading(false)
      setError("")
      setProject(response.data)

    }).catch((error)=>{
      setLoading(false);
      setError("something went wrong");
      setProject({});
    })
  },[]);*/

  const [contentMarkdown, setContentMarkdown] = useState("#Welcome to our IDE");
  const [term, setTerm] = useState("test");
  // const [Loading , setLoading] = useState(true)
  // const [Error , setError] = useState("")
  // const [Project , setProject] = useState({})
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const handleSave = () => {
    console.log(editorRef.current.getValue());
  };

  const xtermRef = React.createRef();

  React.useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln(term);
    console.log(term);
    xtermRef.current.terminal.resize(100, 20);
  });

  ////////////////////////////////////////////////////////////////////////////////
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="row p-1 bg-dark mb-5">
      <div className="col-3 ">
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
      <div className="col-9 ">
        <div className="row">
          <div className="row m-1">
            <div className="col-5 col-lg-3 text-white text-center pt-2 ">
              Language
            </div>
            <select className="col-4 col-lg-2">
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
            </select>
            <div className="col-lg-4 col-1"></div>
            <button className="btn btn-success col-2 col-lg-2">
              Run
              <FontAwesomeIcon icon={faPlay} className="mx-2" />
            </button>
          </div>
          <div className="row p-2">
            <div className="col-12">
              <Editor
                height="50vh"
                theme="vs-dark"
                saveViewState={true}
                loading="Loading..."
                defaultLanguage="python"
                value={contentMarkdown}
                onChange={(value) => setContentMarkdown(value)}
                onMount={handleEditorDidMount}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-12 mt-3 overflow-auto" id="terminal-container">
              <XTerm
                ref={xtermRef}
                onData={(T) => {
                  //console.log(T.charCodeAt(0));
                  //this.setState({ data: this.state.data + T });

                  //console.log(term);
                  if (T.charCodeAt(0) == 13) setTerm(term + "\r");
                  else setTerm(term + T);
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-outline-light col-3 my-2 mx-auto"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
