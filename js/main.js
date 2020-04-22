"use strict";

// ----------aboutME-----------
const Development  = new ProgressBarX3("Development",'WordPress','Photoshop',80,59,88,".myProgress1",1);
const Html  = new ProgressBarX3("Html",'Css','Asp.net',96,70,58,".myProgress2",4);
const Aboutparferst = new AboutAs ('.titleShort');
const AbotHello = new AboutAs ('.aboutH2_1');
const Abotimg = new AboutAs ('.aboutimg_1');
const aboutUx = new AboutAs ('.aboutMeh2_1');
const aboutLong = new AboutAs ('.aboutPlomg_1');

import aboutData from './data/AboutMe-data.js'
import {ProgressBarX3,AboutAs} from './about.js';


import SectionHeading from './components/SectionHeading.js';
import Achievements from './components/Achievements.js';
import Experience from './components/Experience.js';
import Portfolio from './components/Portfolio.js';
import Blog from './components/Blog.js';
 
// find all attr with 'data-h2' to create H2 elements
const allDataH2 = document.querySelectorAll('[data-h2],[data-h2-bold],[data-place]');
for ( let i=0; i<allDataH2.length; i++ ) {
    new SectionHeading( allDataH2[i] );
} 

//create four achievements blocks
new Achievements('#achievements > .row');

new Experience ('#experience .row:nth-child(3)');

new Portfolio ('#portfolio > .row:nth-child(3) > .col-12');
