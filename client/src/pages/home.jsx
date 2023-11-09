import React from 'react'
import { useState , useEffect} from 'react'
import fetchAPI from '../Usefetch/fetchAPI'
import '../App.css'
import { Card, Row, Col } from 'react-bootstrap';
import '../App.css'
import Searchmodal from '../component/searchmodal';
import Backet from '../component/backet';
import RadioGroupRating from '../component/client';
import { ToastContainer, toast } from 'react-toastify';
import Favorite from '@mui/icons-material/Favorite';
import alanBtn from '@alan-ai/alan-sdk-web';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from '@mui/material/Skeleton';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next';

const Home = ({backet , SetBacket ,search, setSearch, theme ,setTheme, Settingtheme, setSettingTheme}) => {
  


  const notify = () => toast("User Go");




  const GoToBacket = (item)=>{
    SetBacket((prev)=>{
        return [...prev , item]
    })
    notify()
  }



  const { t } = useTranslation();


   
    const url =  "http://localhost:2000/alldata"
    const {data:products, data:setproducts, ispending, error} = fetchAPI(url)

  
  return (
<>
<div className="box">
{ispending && Array.from({ length: 20 }).map((_, i) => (
  <div key={i} className="Card">
    <Skeleton variant="text" />
    <Skeleton variant="circle" width={40} height={40} />
    <Skeleton variant="rectangular" height={118} />
  </div>
))}
{
    products&&products.filter(item => item.name.toLowerCase().includes(search.toLowerCase())||item.username.toLowerCase().includes(search.toLowerCase())).map((item ,index)=>{
        return(
        <>
            <div key={item.id} className={`Card ${theme} ${Settingtheme}`}>
            <div className="flex">
            <div>
            <i>{t('username')}</i><h4 className={`font ${Settingtheme}`}>{item.username}</h4>
            
          
            </div>
            <div>
            <img src="https://img.freepik.com/premium-vector/accoun-vector-icon-with-long-shadow-white-illustration-isolated-blue-round-background-graphic-web-design_549897-771.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais" alt="" />
            </div>
            </div>
            <div className="flexone">{t('fullname')}:
            <div><p className={`font ${Settingtheme}`}>{item.name}</p></div>
            <div><p className={`font ${Settingtheme}`}>{item.lastname}</p>
            </div>
 
            </div>
            <div className="flextwo">
            <div><p className={`UserEmail font${Settingtheme}`}>{item.email}</p></div>
            <div><button className={`btn btn-primary font ${Settingtheme}`} onClick={()=>GoToBacket(item)}>{t('go')}</button>

      

           
            <ToastContainer/></div>
           
           </div>
           <RadioGroupRating/>
           </div>
           
        </>
        )
    })
} 

</div>
<Backet backet={backet} SetBacket={SetBacket}/>


</>
  )
}

export default Home
