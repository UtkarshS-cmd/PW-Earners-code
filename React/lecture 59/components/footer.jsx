import React from 'react'

// named export
// import with {}
// multiple named export
// cannot directly rename import but "unless rename with as"
export default function Footer() {
  return (
    <div>footer</div>
  )
}

export default function Footer2(){
    return (
        <div>Footer 2</div>
    );
}

// default export
// import without {}
// One default export 
// can rename during import 

// function footer() {
//   return (
//     <div>footer</div>
//   )
// }

// export default footer;