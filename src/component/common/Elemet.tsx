



// import Select2 from 'react-select2-wrapper';
import React from "react";
import Index from "../../container/Index";
import PagesIndex from "../../container/PagesIndex";


// In this page We create some elements  


// Input Field
// Password Field
// Dropdown
// Text Area Field ( Address Field / Description Field )
// radio group 
// Create custom switch design */
// Create custom file upload design */
// Create grid ( colum and row ) */
// mui grid colum
// Select2
// accordian
// table
// checkbox


export default function Demo() {

      // add user modal
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


      // for password eye hide and show

      const [showPassword, setShowPassword] = React.useState(false);

      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event: any) => {
            event.preventDefault();
      };


      // for open handleChangedropdown 

      const [age, setAge] = React.useState('');

      const handleChangedropdown = (event: any) => {
            setAge(event.target.value);
      };

      return (
            <>

                  <Index.Box className="container">
                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Input filed</Index.Typography>
                              <Index.Box className="input-box add-user-input">
                                    <Index.FormHelperText className='form-lable'>User Name</Index.FormHelperText>
                                    <Index.Box className="form-group">
                                          <Index.TextField
                                                fullWidth
                                                id="fullWidth"
                                                className="form-control"
                                                placeholder=""
                                          />
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Password Input filed</Index.Typography>
                              <Index.Box className="input-box password-input-box">
                                    <Index.FormHelperText className="form-lable">
                                          Password
                                    </Index.FormHelperText>
                                    <Index.Box className="form-group">
                                          <Index.OutlinedInput
                                                className="form-control-eye form-control"
                                                // autocomplete="off"
                                                id="outlined-adornment-password"
                                                type={showPassword ? "text" : "password"}
                                                endAdornment={
                                                      <Index.InputAdornment position="end">
                                                            <Index.IconButton
                                                                  aria-label="toggle password visibility"
                                                                  onClick={handleClickShowPassword}
                                                                  onMouseDown={handleMouseDownPassword}
                                                                  edge="end"
                                                            >
                                                                  {showPassword ? (
                                                                        <Index.VisibilityOff />
                                                                  ) : (
                                                                        <Index.Visibility />
                                                                  )}
                                                            </Index.IconButton>
                                                      </Index.InputAdornment>
                                                }
                                          />
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Dropdown Input filed</Index.Typography>
                              <Index.Box className="input-box add-user-input">
                                    <Index.FormHelperText className='form-lable'>SKU</Index.FormHelperText>
                                    <Index.Box className="form-group">
                                          <Index.Box className='dropdown-box'>
                                                <Index.FormControl className='form-control'>
                                                      <Index.Select className='dropdown-select '
                                                            value={age}
                                                            onChange={handleChangedropdown}
                                                            displayEmpty
                                                      >
                                                            <Index.MenuItem value="" className='menuitem'>
                                                                  USD
                                                            </Index.MenuItem>
                                                            <Index.MenuItem value={10} className='menuitem'>USD</Index.MenuItem>
                                                            <Index.MenuItem value={20} className='menuitem'>USD</Index.MenuItem>
                                                            <Index.MenuItem value={30} className='menuitem'>USD</Index.MenuItem>
                                                      </Index.Select>
                                                </Index.FormControl>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Radio</Index.Typography>
                              <Index.Box className="input-box add-user-input radio-main">
                                    <Index.FormHelperText className='form-lable'>Price Limit</Index.FormHelperText>
                                    <Index.RadioGroup
                                          row
                                          aria-labelledby="demo-row-radio-buttons-group-label"
                                          name="row-radio-buttons-group"
                                          className='radiogroup'
                                    >
                                          <Index.FormControlLabel value="female" control={<Index.Radio className='radio' />} label="$100k" />
                                          <Index.FormControlLabel value="male" control={<Index.Radio className='radio' />} label="$200k" />
                                          <Index.FormControlLabel value="other" control={<Index.Radio className='radio' />} label="$300k" />
                                    </Index.RadioGroup>
                              </Index.Box>
                        </Index.Box>
                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Text area</Index.Typography>
                              <Index.Box className="input-box add-user-input">
                                    <Index.FormHelperText className='form-lable'>Description</Index.FormHelperText>
                                    <Index.Box className="form-group">
                                          <Index.TextareaAutosize
                                                aria-label="minimum height"
                                                // minRows={3}
                                                placeholder=""
                                                className="form-control-textarea"
                                          />
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>

                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Checkbox</Index.Typography>
                              <Index.Box className="checkbox-main">
                                    <PagesIndex.BpCheckbox />
                                    <Index.Typography className="checkbox-lable">Remember Me</Index.Typography>
                              </Index.Box>
                        </Index.Box>

                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Switch</Index.Typography>
                              <Index.Box className="switch-main">
                                    <Index.FormControlLabel
                                          control={<PagesIndex.IOSSwitch sx={{ m: 1 }} />}
                                          label="Public Profile" className='switch-lable'
                                    />
                              </Index.Box>
                        </Index.Box>

                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">custome file upload</Index.Typography>
                              <Index.Box className="file-upload-btn-main">
                                    <img src={PagesIndex.Svg.avtarImg} className="upload-full-img" alt='upload img'></img>
                                    <Index.Button variant="contained" component="label" className='file-upload-btn'>
                                          <img src={PagesIndex.Svg.editIcon} className="upload-icon-img" alt='upload img'></img>
                                          <input hidden accept="image/*" multiple type="file" />
                                    </Index.Button>
                              </Index.Box>
                        </Index.Box>


                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">custome grid</Index.Typography>
                              <Index.Box className="custom-row">
                                    <Index.Box className="cust-column">
                                          <Index.Box className="cust-col">

                                          </Index.Box>
                                    </Index.Box>
                                    <Index.Box className="cust-column">
                                          <Index.Box className="cust-col">

                                          </Index.Box>
                                    </Index.Box>
                                    <Index.Box className="cust-column">
                                          <Index.Box className="cust-col">

                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>


                        {/* <Index.Box className="common-card">
                              <Index.Typography className="card-title">Select 2</Index.Typography>

                              <Index.Box className="select2-main">
                                    <Select2
                                          multiple
                                          style={{ width: "100%" }}
                                          data={["bug", "feature", "documents", "discussion"]}
                                          options={{
                                                placeholder: "search by tags",
                                          }}
                                    />
                              </Index.Box>
                        </Index.Box> */}

                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Mui grid</Index.Typography>
                              <Index.Box className='grid-row'>
                                    <Index.Box sx={{ width: 1 }} className="grid-main">
                                          <Index.Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 6" }} className="grid-column">
                                                      <Index.Box className="box-main">

                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 8", lg: "span 6" }} className="grid-column">
                                                      <Index.Box className="box-main">

                                                      </Index.Box>
                                                </Index.Box>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>

                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Accordion</Index.Typography>
                              <Index.Box className="faq-accordian-main">
                                    <Index.Box className="accordian-main">
                                          <Index.Accordion className="accordian">
                                                <Index.AccordionSummary
                                                      className="accordian-summary"
                                                      expandIcon={<Index.ExpandMoreIcon className="accordian-expan-icon" />}
                                                      aria-controls="panel1-content"
                                                      id="panel1-header"
                                                >
                                                      <Index.Box className="accordian-title-main">
                                                            <Index.Typography className="accordian-title">
                                                                  Accordion 1
                                                            </Index.Typography>
                                                      </Index.Box>
                                                </Index.AccordionSummary>
                                                <Index.AccordionDetails className="accordian-details">
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Index.AccordionDetails>
                                          </Index.Accordion>

                                          <Index.Accordion className="accordian">
                                                <Index.AccordionSummary
                                                      className="accordian-summary"
                                                      expandIcon={<Index.ExpandMoreIcon className="accordian-expan-icon" />}
                                                      aria-controls="panel1-content"
                                                      id="panel2-header"
                                                >
                                                      <Index.Typography>
                                                            Accordion 1
                                                      </Index.Typography>
                                                </Index.AccordionSummary>
                                                <Index.AccordionDetails className="accordian-details">
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Index.AccordionDetails>
                                          </Index.Accordion>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>


                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Table</Index.Typography>
                              <Index.Box className="userlist-table-main page-table-main">
                                    <Index.TableContainer component={Index.Paper} className='table-container'>
                                          <Index.Table aria-label="simple table" className='table'>
                                                <Index.TableHead className='table-head'>
                                                      <Index.TableRow className='table-row'>
                                                            <Index.TableCell component='th' className='table-th' width="10%">NAME</Index.TableCell>
                                                            <Index.TableCell component='th' className='table-th' width="10%">ADDRESS</Index.TableCell>
                                                            <Index.TableCell component='th' className='table-th' width="10%">CITY</Index.TableCell>
                                                            <Index.TableCell component='th' className='table-th' width="10%">NUMBER</Index.TableCell>
                                                            <Index.TableCell component='th' className='table-th' width="10%">STATUS</Index.TableCell>
                                                            <Index.TableCell component='th' className='table-th' width="10%" align='right'>ACTION</Index.TableCell>
                                                      </Index.TableRow>
                                                </Index.TableHead>
                                                <Index.TableBody className='table-body'>
                                                      <Index.TableRow
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                      >
                                                            <Index.TableCell component='td' scope="row" className='table-td'>
                                                                  <Index.Box className="table-data-flex"><img src={PagesIndex.Svg.avtarImg} className="table-data-img " alt='User'></img> <Index.Typography className='table-data-text'>GASTON</Index.Typography></Index.Box>
                                                            </Index.TableCell>
                                                            <Index.TableCell component='td' className='table-td'>
                                                                  <Index.Box className="table-data-flex"><Index.Typography className='table-data-text'>  12974 Keebler Prairie, South Brendon, Id, Cl</Index.Typography></Index.Box>
                                                            </Index.TableCell>
                                                            <Index.TableCell component='td' className='table-td'> Id, Cl New Kaelachester</Index.TableCell>
                                                            <Index.TableCell component='td' className='table-td'>623-880-0509 X6880</Index.TableCell>
                                                            <Index.TableCell component='td' className='table-td'>Status</Index.TableCell>
                                                            <Index.TableCell component='td' className='table-td'>
                                                                  <Index.Box className="table-data-btn-flex">
                                                                        <Index.Tooltip
                                                                              title="View"
                                                                              arrow
                                                                              placement="bottom"
                                                                              className="tooltip"
                                                                        >
                                                                              <Index.Button className="table-data-btn table-data-btn-view">
                                                                                    <img src={PagesIndex.Svg.eyeIcon} className='icon' alt='View' /></Index.Button>
                                                                        </Index.Tooltip>

                                                                        <Index.Tooltip
                                                                              title="View"
                                                                              arrow
                                                                              placement="bottom"
                                                                              className="tooltip"
                                                                        >
                                                                              <Index.Button className="table-data-btn table-data-btn-edit">
                                                                                    <img src={PagesIndex.Svg.editIcon} className='icon' alt='View' /></Index.Button>
                                                                        </Index.Tooltip>

                                                                        <Index.Tooltip
                                                                              title="View"
                                                                              arrow
                                                                              placement="bottom"
                                                                              className="tooltip"
                                                                        >
                                                                              <Index.Button className="table-data-btn   table-data-btn-trash">
                                                                                    <img src={PagesIndex.Svg.trashIcon} className='icon' alt='View' /></Index.Button>
                                                                        </Index.Tooltip>
                                                                  </Index.Box>
                                                            </Index.TableCell>
                                                      </Index.TableRow>
                                                </Index.TableBody>
                                          </Index.Table>
                                    </Index.TableContainer>
                              </Index.Box>
                              <Index.Box className="pagination-outer-main">
                                    {/* <PagesIndex.Pagination /> */}
                              </Index.Box>
                        </Index.Box>


                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Inner page layout</Index.Typography>
                              <Index.Box className="dashboard-content user-list-content">
                                    <Index.Box className="inner-main-title-flex page-title-main">
                                          <Index.Typography className='page-title user-list-page-title' component='h2' variant='h2'>User List</Index.Typography>
                                          <Index.Box className="inner-btn-flex">
                                                <Index.Box className="search-main input-box">
                                                      <Index.Box className="form-group">
                                                            <Index.TextField
                                                                  fullWidth
                                                                  id="fullWidth"
                                                                  className="form-control"
                                                                  placeholder="Search user"
                                                            />
                                                            <img
                                                                  src={PagesIndex.Svg.searchIcon}
                                                                  className="search-grey-img icon" alt='search'
                                                            ></img>
                                                      </Index.Box>
                                                </Index.Box>

                                                <Index.Box className="userlist-inner-btn-flex">
                                                      <Index.Box className="export-btn-main border-btn-main">
                                                            <Index.Button className='export-btn border-btn'><img src={PagesIndex.Svg.exportIcon} className="export-icon icon" alt='download' />Export</Index.Button>
                                                      </Index.Box>
                                                      <Index.Box className="adduser-btn-main primary-btn-main">
                                                            <Index.Button className='adduser-btn primary-btn' onClick={handleOpen}><img src={PagesIndex.Svg.plusIcon} className="plus-icon icon" alt='plus' />Add User</Index.Button>
                                                      </Index.Box>
                                                </Index.Box>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>


                        <Index.Box className="common-card">
                              <Index.Typography className="card-title">Add more row</Index.Typography>
                              <Index.Box className="card-border common-card">
                                    <Index.Box className="grid-main add-more-row add-lable-row">
                                          <Index.Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 3" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.FormHelperText className='form-lable'>Duration</Index.FormHelperText>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 3" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.FormHelperText className='form-lable'>Basic</Index.FormHelperText>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.FormHelperText className='form-lable'>Price</Index.FormHelperText>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.FormHelperText className='form-lable'>Version</Index.FormHelperText>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.FormHelperText className='form-lable'></Index.FormHelperText>
                                                      </Index.Box>
                                                </Index.Box>
                                          </Index.Box>
                                    </Index.Box>
                                    <Index.Box className="grid-main add-more-row add-input-row">
                                          <Index.Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 3" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.Box className="form-group">
                                                                  <Index.Box className='dropdown-box'>
                                                                        <Index.FormControl className='form-control'>
                                                                              <Index.Select className='dropdown-select '
                                                                                    value={age}
                                                                                    onChange={handleChangedropdown}
                                                                                    displayEmpty
                                                                              >
                                                                                    <Index.MenuItem value="" className='menuitem'>
                                                                                          1 month
                                                                                    </Index.MenuItem>
                                                                                    <Index.MenuItem value={10} className='menuitem'>1 month</Index.MenuItem>
                                                                                    <Index.MenuItem value={20} className='menuitem'>1 month</Index.MenuItem>
                                                                                    <Index.MenuItem value={30} className='menuitem'>1 month</Index.MenuItem>
                                                                              </Index.Select>
                                                                        </Index.FormControl>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 3" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.Box className="form-group">
                                                                  <Index.Box className='dropdown-box'>
                                                                        <Index.FormControl className='form-control'>
                                                                              <Index.Select className='dropdown-select '
                                                                                    value={age}
                                                                                    onChange={handleChangedropdown}
                                                                                    displayEmpty
                                                                              >
                                                                                    <Index.MenuItem value="" className='menuitem'>
                                                                                          Basic
                                                                                    </Index.MenuItem>
                                                                                    <Index.MenuItem value={10} className='menuitem'>Basic</Index.MenuItem>
                                                                                    <Index.MenuItem value={20} className='menuitem'>Basic</Index.MenuItem>
                                                                                    <Index.MenuItem value={30} className='menuitem'>Basic</Index.MenuItem>
                                                                              </Index.Select>
                                                                        </Index.FormControl>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.Box className="form-group">
                                                                  <Index.TextField
                                                                        name="name"
                                                                        fullWidth
                                                                        id="fullWidth"
                                                                        className="form-control"
                                                                        placeholder="Enter Price"
                                                                  />
                                                            </Index.Box>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="input-box add-more-product-input-box">
                                                            <Index.Box className="form-group">
                                                                  <Index.TextField
                                                                        name="name"
                                                                        fullWidth
                                                                        id="fullWidth"
                                                                        className="form-control"
                                                                        placeholder="Enter Version"
                                                                  />
                                                            </Index.Box>
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 3", lg: "span 2" }} className="grid-column">
                                                      <Index.Box className="add-more-btn-main">
                                                            <Index.Button className="add-more-btn" variant="contained">
                                                                  <img src={PagesIndex.Svg.plusIcon} alt="add" className="add-icon icon" />
                                                            </Index.Button>
                                                            <Index.Button className="add-more-btn" variant="contained">
                                                                  <img src={PagesIndex.Svg.plusIcon} alt="add" className="add-icon icon" />
                                                            </Index.Button>
                                                      </Index.Box>
                                                </Index.Box>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                  </Index.Box>


                  <Index.Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='modal'
                  >
                        <Index.Box sx={PagesIndex.style} className="modal-inner">
                              <Index.Box className="modal-header">
                                    <Index.Typography id="modal-modal-title" className='modal-title' variant="h6" component="h2">
                                          Add User Modal
                                    </Index.Typography>
                                    <Index.Button className='modal-close-btn' onClick={handleClose}><img src={PagesIndex.Svg.cancelIcon} className="modal-close-icon" alt='Close' /></Index.Button>
                              </Index.Box>
                              <Index.Box className="modal-body">
                                    <Index.Box className="modal-hgt-scroll cus-scrollbar">
                                          <Index.Box className='modal-grid-row'>
                                                <Index.Box sx={{ width: 1 }} className="grid-main">
                                                      <Index.Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                                                            <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 6" }} className="grid-column">
                                                                  <Index.Box className="input-box modal-input-box">
                                                                        <Index.FormHelperText className='form-lable'>First Name<span className='sign-required'>*</span></Index.FormHelperText>
                                                                        <Index.Box className="form-group">
                                                                              <Index.TextField
                                                                                    fullWidth
                                                                                    id="fullWidth"
                                                                                    className="form-control"
                                                                                    placeholder=""
                                                                              />
                                                                        </Index.Box>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                            <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 8", lg: "span 6" }} className="grid-column">
                                                                  <Index.Box className="input-box modal-input-box">
                                                                        <Index.FormHelperText className='form-lable'>Language</Index.FormHelperText>
                                                                        <Index.Box className='dropdown-box'>
                                                                              <Index.FormControl className='form-control drop-form-control'>
                                                                                    <Index.Select className='dropdown-select drop-select'
                                                                                          value={age}
                                                                                          onChange={handleChangedropdown}
                                                                                          displayEmpty
                                                                                    >
                                                                                          <Index.MenuItem value="" className='drop-menuitem'>
                                                                                                English
                                                                                          </Index.MenuItem>
                                                                                          <Index.MenuItem value={10} className='drop-menuitem'>English</Index.MenuItem>
                                                                                          <Index.MenuItem value={20} className='drop-menuitem'>English</Index.MenuItem>
                                                                                          <Index.MenuItem value={30} className='drop-menuitem'>English</Index.MenuItem>
                                                                                    </Index.Select>
                                                                                    {/* <span><img src={Index.Svg.instagram} className="grey-down pay-down" alt='down arrow'></img></span> */}
                                                                              </Index.FormControl>
                                                                        </Index.Box>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                            <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 6" }} className="grid-column">
                                                                  <Index.Box className="input-box modal-input-box">
                                                                        <Index.FormHelperText className='form-lable'>Last Name</Index.FormHelperText>
                                                                        <Index.Box className="form-group">
                                                                              <Index.TextField
                                                                                    fullWidth
                                                                                    id="fullWidth"
                                                                                    className="form-control"
                                                                                    placeholder=""
                                                                              />
                                                                        </Index.Box>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                            <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 8", lg: "span 6" }} className="grid-column">
                                                                  <Index.Box className="input-box modal-input-box">
                                                                        <Index.FormHelperText className='form-lable'>Email<span className='span-text common-para'>(Optional)</span></Index.FormHelperText>
                                                                        <Index.Box className="form-group">
                                                                              <Index.TextField
                                                                                    fullWidth
                                                                                    id="fullWidth"
                                                                                    className="form-control"
                                                                                    placeholder=""
                                                                              />
                                                                        </Index.Box>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                            <Index.Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 8", lg: "span 6" }} className="grid-column">
                                                                  <Index.Box className="input-box modal-input-box">
                                                                        <Index.FormHelperText className='form-lable'>Date</Index.FormHelperText>
                                                                        <Index.Box className="form-group">
                                                                              <Index.TextField
                                                                                    type='date'
                                                                                    fullWidth
                                                                                    id="fullWidth"
                                                                                    className="form-control"
                                                                                    placeholder=""
                                                                              />
                                                                        </Index.Box>
                                                                  </Index.Box>
                                                            </Index.Box>
                                                      </Index.Box>
                                                </Index.Box>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                              <Index.Box className="modal-footer">
                                    <Index.Box className="modal-user-btn-flex">
                                          <Index.Box className="discard-btn-main border-btn-main">
                                                <Index.Button className='discard-user-btn border-btn'>Discard</Index.Button>
                                          </Index.Box>
                                          <Index.Box className="save-btn-main primary-btn-main">
                                                <Index.Button className='save-user-btn primary-btn'>Save</Index.Button>
                                          </Index.Box>
                                    </Index.Box>
                              </Index.Box>
                        </Index.Box>
                  </Index.Modal>
            </>
      )
}


