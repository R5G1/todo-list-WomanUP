import React from 'react';
import FormContainer from './form-components/form-container';
class ReactForm extends React.Component {
  render() {
    return (
      <>
        <main className="container-main">
          <h2>todo-list</h2>
          <div>
            <FormContainer />
          </div>
        </main>
      </>
    );
  }
}
export default ReactForm;
