import React from 'react'
// memo for replace of Pure Component in Functional Component
// this file is imported in Parent Component in pureComponetn
function MemoComp({ name }) {
    console.log("Memo Component rendering");

    return (
        <div>
            Memo Component {name}
        </div>
    )
}

//memo supports React and React_DOM above 16.6.0 or above
export default React.memo(MemoComp);
