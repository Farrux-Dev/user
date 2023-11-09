import React from 'react'
import Rootlayout from './layout/rootlayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useState } from 'react'
import Home from './pages/home'
import Contact from './pages/contact'
import Admin from './pages/admin'
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import  HttpAPi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css'
import Footer from './component/footer'


const App = () => {


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpAPi)
  .init({
    supportedLngs:["en" ,"uz", "ru", "tu", "zh", "fr", "es", "ar"],
    fallbackLng: "en",
    detection:{
        order: ['htmlTag', 'cookie', 'localStorage', 'subdomain', 'path', ],
        caches:['cookie']
},
backend:{
    loadPath:'/assets/locales/{{lng}}/translation.json'
},
 react:{useSuspense:false}
  });
  const Lang  =[
    {
        code:"en",
        name:"Eng",
        country_code:"us"
    },
    {
        code:"uz",
        name:"Uz",
        country_code:"uz"
    },
    {
      code:"tu",
      name:"Turk ",
      country_code:"tr"
     },
    {
     code:"ru",
     name:"Ru ",
     country_code:"ru"
    },
   
     {
      code:"zh",
      name:"Xitoy ",
      country_code:"cn"
     },
     {
      code:"fr",
      name:"Franse",
      country_code:"fr"
     },
     {
      code:"es",
      name:"Espanol",
      country_code:"es"
     },
     {
      code:"ar",
      name:"Arabian",
      country_code:"sa"
     }
  ]


  const [backet , SetBacket] = useState([])
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('blue');
  const [Settingtheme, setSettingTheme] = useState('white');
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout Lang={Lang} Settingtheme={Settingtheme} setSettingTheme={setSettingTheme} theme={theme} setTheme={setTheme} backet={backet} search={search} setSearch={setSearch}></Rootlayout>}>
       <Route index element={<Home Settingtheme={Settingtheme} setSettingTheme={setSettingTheme}  theme={theme} setTheme={setTheme} backet={backet} SetBacket={SetBacket} search={search}/>}></Route> 
       <Route path='/contact' element={<Contact theme={theme} setTheme={setTheme}/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
         
      </Route>
    )
   )

  return (
   <>
 <RouterProvider router={router}></RouterProvider>

   </>
  )
}

export default App
