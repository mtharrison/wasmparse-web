import React from 'react';
import { connect } from 'react-redux'

import { translateTypeName } from '../../helpers';

class TypesSection extends React.Component {
    constructor(props) {
        super(props);
    }

    typeSignature(entry) {

        return `(${entry.param_types.map(translateTypeName).join(', ')}) -> ${entry.return_type ? translateTypeName(entry.return_type) : '()'}`;
    }

    render() {

        const data = this.props.data;
        let tableRows = null;

        if (data) {
            tableRows = data.body.Types.entries.map((entry, i) => {
                return (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{this.typeSignature(entry)}</td>
                    </tr>
                );
            });

        }

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

                            {tableRows}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        data: state.parsed ?
            state.parsed.sections.find((s) => s.name === 'types') :
            null
    };
};

TypesSection = connect(mapStateToProps)(TypesSection);

export default TypesSection;