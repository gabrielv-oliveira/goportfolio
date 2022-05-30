import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { DevBox } from '../devBox';



export function AboutTab() {
    return (
        <Tabs disableUpDownKeys={true}>
            <TabList>
                <Tab>About Me</Tab>
                <Tab>Timeline</Tab>
                <Tab>Education</Tab>
            </TabList>

            <TabPanel>
                <DevBox />
            </TabPanel>

            <TabPanel>

            </TabPanel>
            <TabPanel>
                <p>
                    <a className='link-about' rel='noopener noreferrer' target='_blank' href='https://www.faculdadeflamingo.com.br/marketing'>Marketing | Flamingo College</a> (<i> 2014 </i>)<br />
                    Focusing on the main areas of direct, industrial, corporate, retail and services marketing.
                </p>
                <p>
                    <a className='link-about' rel='noopener noreferrer' target='_blank' href='https://www.devmedia.com.br/carreira-programador/?slug=front-end'>HTML CSS JAVASCRIPT | DevMedia</a> (<i> 2021 </i>)<br />
                    Focusing on the main areas of direct, industrial, corporate, retail and services marketing.
                </p>
                <p>
                    <a className='link-about' rel='noopener noreferrer' target='_blank' href='https://www.rocketseat.com.br/ignite'>React JS and TypeScript | RocktSeat</a> (<i> 2021 </i>)<br />
                    Focusing on the main areas of direct, industrial, corporate, retail and services marketing.
                </p>
               
            </TabPanel>
           
        </Tabs>
    );



}