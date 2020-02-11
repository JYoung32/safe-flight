import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const DangerAlert = (props) => {
  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
        This is working!!
    </Alert>
  );
}

export default DangerAlert;


// import React from 'react';
// import { UncontrolledAlert } from 'reactstrap';

// function dangerAlert() {
//   return (
//     <UncontrolledAlert color="danger">
//       this is working!!!
//     </UncontrolledAlert>
//   );
// }

// export default dangerAlert;