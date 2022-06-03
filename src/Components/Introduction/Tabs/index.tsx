import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { DevBox } from '../devBox';
import { Topics } from './Topics';




export function AboutTab() {
    return (
        <Tabs disableUpDownKeys={true}>
            <TabList>
                <Tab>About Me</Tab>
                <Tab>Education</Tab>
                <Tab>Timeline</Tab>
            </TabList>

            <TabPanel>
                <DevBox />
            </TabPanel>

            <TabPanel>
                <Topics 
                link = 'https://www.faculdadeflamingo.com.br/marketing'
                theme ='Marketing'
                place ='Flamingo College'
                date = '2014'
                description='Focusing on the main areas of direct, industrial, corporate, retail'
                seDescription='and services marketing.'
                />
                <Topics 
                link = 'https://www.devmedia.com.br/carreira-programador/?slug=front-end'
                theme ='HTML CSS JAVASCRIPT'
                place ='DevMedia'
                date = '2021'
                description='Programming web pages and applications, from basic contact to'
                seDescription='programming to initial contact with more complex web languages.'
                />
                <Topics 
                link = 'https://www.rocketseat.com.br/ignite'
                theme ='React JS and TypeScript'
                place ='RocketSeat Ignite'
                date = '2021 in Progress'
                description='Ignite is an acceleration program focused on specialization, '
                seDescription='for those who already master programming.'
                />
                           
            </TabPanel>
            <TabPanel>
                
               
            </TabPanel>
           
        </Tabs>
    );



}