const express = require('express');
const axios = require('axios');
const router = express.Router();

const obj = {
  radio: '',
  name:'',
  regionName: ''
  
};
const region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const country = () => {
  let str = '<form name="myForm">';
  region.map((el,index) => {
    str = `${str}<input type="radio" name="region" id="${index}" value="${el}">${el}<br>`;
  });
  obj.radio = `${str}</form>`;
};
  
router.get('/', function(req, res) {
  country();
  res.render('index', obj)
});

router.get('/:id', function(req, res) {
  country();
  axios(`https://restcountries.eu/rest/v2/region/${req.params.id}`)
  .then((res1) => {
    const arrName = res1.data.map(el => el.name);
    const arrFlag = res1.data.map(el => el.flag);
    const arrCapital = res1.data.map(el => el.capital);
    const arrRegion = res1.data.map(el => el.region);
    const arrPopulation = res1.data.map(el => el.population);
    console.log(arrFlag)
    let str = '<ul class="list-people">'
    arrName.map((el, index) =>{
        str = `${str}<li>Name:"${el}"; 
                          Capital:"${arrCapital[index]}";
                          Region:"${arrRegion[index]}";
                          Population:"${arrPopulation[index]}";
                          <img class ="img" src="${arrFlag[index]}"></li>`;
    });
    obj.name = `${str}</ul>`;
    obj.regionName = req.params.id;
    res.render('index', obj);
  })
  .catch(err => {
    console.log(err.response.data)
    obj.info = err.response.data.detail;
  });
});

module.exports = router;