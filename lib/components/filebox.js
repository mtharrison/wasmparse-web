import React from 'react';

class FileBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="upload-container">
          <input type="file" name="file" id="file"/>
      </div>
    );
  }
}

export default FileBox;