const Notification = props => {

const {containerClassName,icon,msg}=props
  return (
    <div className={containerClassName}>
      <img className="icon" src={icon} />
      <p className="message">{msg}</p>
    </div>
  )
}


}

const element = (
   <div className="main-cont">
       <h1 className="heading">Notifications</h1>
       <Notification containerClassName="cont-1" icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png/" msg="Information Message" />
        <Notification containerClassName="cont-2" icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png/" msg="Success Message" />
        <Notification containerClassName="cont-3" icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png/" msg="Warning Message" />
           <Notification containerClassName="cont-3" icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png/" msg="Error Message" />
           </div>


)

ReactDOM.render(element, document.getElementById('root'))
