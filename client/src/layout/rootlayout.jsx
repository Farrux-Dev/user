import {NavLink , Outlet} from "react-router-dom"
import '../App.css'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Badge from '@mui/material/Badge';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next';
const Rootlayout = ({backet ,search, setSearch, theme ,setTheme, Settingtheme, setSettingTheme ,Lang }) => {
    const [hover, setHover] = useState(false);
    const { t } = useTranslation();

    const refreshPage = () => {
        window.location.reload();
    }
    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
        document.body.className = event.target.checked ? 'dark' : 'light';
      };
           
      
      const handleSettingtheme = (event) => {
        setSettingTheme(event.target.value);
        document.body.className = event.target.value;
      };

    return (
        <>
        <div>
            <nav className={`navbar ${theme}`}>
                <div className="navbar-header">
                    <button  onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)} className="btn refresh btn-primary" onClick={refreshPage}><RestartAltIcon  style={{ transform: 'rotate(-90deg)' }}/>        {hover &&   <input type="button" class="enjoy-css" value="refresh" />}
                    </button>
                    <ul className="navitem">
                        <a href="/" className={`nav ${Settingtheme}`}>{t('nav1')}</a>
                        <NavLink to="/" className={`nav ${Settingtheme}`}>{t('nav2')}</NavLink>
                        <NavLink to="contact" className={`nav ${Settingtheme}` }>{t('nav3')}</NavLink>
                    </ul> 
                </div>
                <div className="navbaritem">
                    <input type="search" className="input"  placeholder="serach" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <Badge badgeContent={backet.length} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                    </button>
                    <NavLink to="admin"><button className={`btn btn-success ${Settingtheme}`} style={{marginLeft:"4px"}}><p style={{fontSize:"13px"}}>{t('nav4')}</p></button></NavLink>
                
<Switch
  checked={theme === 'dark'}
  onChange={handleThemeChange}
  icon={<WbSunnyIcon />}
  checkedIcon={<NightsStayIcon />}
/>

<Select
  value={theme}
  onChange={handleSettingtheme}
  className="btn"
  renderValue={(value) => (
    <>
      <SettingsIcon />
      {value}
    </>
  )}
>
  <MenuItem value="white">
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    {t('nav5')}
  </MenuItem>
  <MenuItem value="orange" style={{color:"orange"}}>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    {t('nav6')}
  </MenuItem>
  <MenuItem value="red" style={{color:"red"}}>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    {t('nav7')}
  </MenuItem>
  <MenuItem value="green" style={{color:"green"}}>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    {t('nav8')}
  </MenuItem>
</Select>




<div class="dropdown">
  <button style={{marginLeft:"20px"}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <LanguageIcon/>
  </button>
  <ul class="dropdown-menu">
  {
    Lang.map((item)=>{
        return(
            <li key={item.country_code}>
                <button className='dropdown-item' onClick={()=> i18next.changeLanguage(item.code)}>

                    <span className={`flag-icon flag-icon-${item.country_code}`}>  </span>&nbsp;
                    {item.name}
                </button>
            </li>
        )
    })
  }
  </ul>
  

                {/* <h2></h2> */}
            
</div>

                </div>
 
            </nav>
            <Outlet></Outlet>
        </div>
        </>
    )
}

export default Rootlayout
