import Index from "../../../container/Index"



export default function PrimaryButton(props : any) {
  return (
    <>
      <Index.Box className='primary-btn-main'>
        <Index.Button className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Button>
      </Index.Box>


      {/* use this button like below demo */}
      {/* <Index.PrimaryButton btnLabel="View Button" className='primary-btn'/> */}
    </>
  )
}