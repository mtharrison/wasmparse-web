import React from 'react';

class TypesSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section types-section-container">
          <div className="section-header"><h3>Types section</h3></div>
          <div className="types-section-container-inner">
              <table>
                  <tbody>
                      <tr>
                          <th>Index</th>
                          <th>Signature</th>
                      </tr>
                      <tr>
                          <td>0</td>
                          <td>(i32, i32) -> f64</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>(i32, i32, i32, i32, i32, i32) -> f64</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default TypesSection;