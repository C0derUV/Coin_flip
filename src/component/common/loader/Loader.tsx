import Index from "../../../container/Index";


export default function Loader() {
      return (
            <Index.TableRow>
                  <Index.TableCell className='table-not-found-td' colSpan={12}>
                        <Index.Box className="loader-main">
                              <Index.Box className="loader">
                                    <span></span>
                                    <span></span>
                              </Index.Box>
                        </Index.Box>
                  </Index.TableCell>
            </Index.TableRow>
      )
}
