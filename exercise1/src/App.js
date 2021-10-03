import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotifications from './components/NewsNotifications';
import SideSection from './components/SideSection';

function App() {

  const SivuUutiset= [
    {

      otsikko: 'Koronavirus',
      teksti: 'Pääkaupunkiseutu luopuu yleisötilaisuuksien ja harrastusten rajoituksista lokakuun alussa'
    },

    {
      otsikko: 'HS Visio',
      teksti: 'Mahtisuvun perijä Jussi Herlin sympatisoi julkisesti Elokapinaa ja feminismiä. Nyt suvun säätiöön on palkattu Greenpeacen entinen johtaja: ”Ei tässä kapitalismista olla luopumassa.”'
    },

    {
      otsikko: 'HS-analyysi',
      teksti: 'Saksan huoltoasema-ampuminen on varoitus korona­rajoituksia vastustavan liikkeen väkivaltaisuudesta, ja se kannattaa ottaa vakavasti.'
    }

  ]
  
  const NewsNotificationData= [
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: '”Ulkonäön takia ei anneta edes mahdollisuutta” – Tällaista on deittimaailmassa rehottava painosyrjintä, jonka vuoksi osa ei pääse treffeille lainkaan'
    },

    {
      topic: 'TELEVISIO',
      body: 'Drag-artisti RuPaul on nyt Emmy-gaalan historian palkituin tummaihoinen mies'
    },
  
  ]

  return (
    <div>
      <Header />
      {
        NewsNotificationData.map(element => <NewsNotifications topic={ element.topic } body={ element.body }/>
        )
        /* [
          <NewsNotifications topic='HS-VISIO' body='Motonet voitti ulkomaalaiset kilpailijansa Suomessa. Nyt kauppaketju aikoo valloittaa myös Ruotsin miesluolamarkkinat.'/>,
          <NewsNotifications topic='KORONA' body='Uusia tartuntoja 459 kpl'/>,
          <NewsNotifications topic='JÄÄKIEKKO' body='Kärpät Liigan voittoon!'/> 
        ] */
      }
         
      <MainSection />

      {
        SivuUutiset.map(element => <SideSection otsikko={ element.otsikko } teksti={ element.teksti }/>
        )
      }
    </div>
  );
}

export default App;
