import MSCartesian from'./mscartesian';import AreaDataset from'../_internal/datasets/area';import{_setDefaultConfig}from'./areabase';class InverseMSArea extends MSCartesian{static getName(){return'InverseMSArea'}getName(){return'InverseMSArea'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Inverted Y-Axis Multi-series Area Chart',a.defaultDatasetType='area',a.isInverse=!0,a.zeroplanethickness=2,a.zeroplanealpha=80,a.showzeroplaneontop=1,a.enablemousetracking=!0,a.defaultcrosslinethickness=1,_setDefaultConfig.call(this)}getDSdef(){return AreaDataset}getDSGroupdef(){}}export default InverseMSArea;