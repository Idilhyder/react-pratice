function Backdrop (props) {

    const backgroundHandler =() =>{
        props.onCancel()
    }
    
    return <div className='backdrop' onClick = {backgroundHandler}/>
}

export default Backdrop;